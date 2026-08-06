import json
import csv
from datetime import datetime
from decimal import Decimal, ROUND_HALF_UP

def solve():
    fx_rates = []
    with open("q-duckdb-json-ledger-reconciliation-server-fx.csv", "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            fx_rates.append({
                "currency": row["currency"],
                "valid_from": row["valid_from"],
                "usd_per_unit": Decimal(row["usd_per_unit"])
            })

    fx_rates.sort(key=lambda x: x["valid_from"], reverse=True)

    def get_fx_rate(currency, issued_at):
        issued_date = issued_at[:10]
        for fx in fx_rates:
            if fx["currency"] == currency and fx["valid_from"] <= issued_date:
                return fx["usd_per_unit"]
        return None

    events = {}
    with open("q-duckdb-json-ledger-reconciliation-server-events.jsonl", "r") as f:
        for line in f:
            if not line.strip(): continue
            row = json.loads(line)
            events[row["event_id"]] = row

    invoices = {}
    for event in events.values():
        iid = event["invoice_id"]
        seq = int(event["sequence"])
        emitted = event["emitted_at"]
        if iid not in invoices:
            invoices[iid] = event
        else:
            curr = invoices[iid]
            curr_seq = int(curr["sequence"])
            if seq > curr_seq:
                invoices[iid] = event
            elif seq == curr_seq and emitted > curr["emitted_at"]:
                invoices[iid] = event

    valid_invoices = []
    for event in invoices.values():
        if event["operation"] == "DELETE":
            continue
        
        payload = json.loads(event["payload"])
        schema = payload.get("schema_version")
        
        if schema == 1:
            status = payload.get("status")
            region = payload.get("customer", {}).get("region")
            currency = payload.get("currency")
            issued_at = payload.get("issued_at")
            items = payload.get("lines", [])
        elif schema == 2:
            status = payload.get("invoice_status")
            region = payload.get("geography", {}).get("region_code")
            currency = payload.get("settlement", {}).get("currency")
            issued_at = payload.get("issued_at")
            items = payload.get("items", [])
        else:
            continue
            
        if status != "PAID":
            continue
            
        if region != "APAC":
            continue
            
        dt = datetime.fromisoformat(issued_at.replace("Z", "+00:00"))
        st = datetime.fromisoformat("2026-01-01T00:00:00+00:00")
        et = datetime.fromisoformat("2026-04-01T00:00:00+00:00")
        if not (st <= dt < et):
            continue
            
        event["parsed_payload"] = payload
        event["currency"] = currency
        event["issued_at"] = issued_at
        event["items"] = items
        event["schema"] = schema
        valid_invoices.append(event)
        
    sku_revenue = {}
    total_usd_revenue_cents = Decimal("0")

    for event in valid_invoices:
        fx_rate = get_fx_rate(event["currency"], event["issued_at"])
        schema = event["schema"]
        
        for item in event["items"]:
            if schema == 1:
                sku = item["sku"]
                qty = Decimal(item["qty"])
                unit_price = Decimal(item["unit_price"].replace(",", ""))
                discount = Decimal(item["discount"].replace("%", "")) / Decimal(100)
                local_minor_units = unit_price * Decimal(100)
                val = local_minor_units * qty * (Decimal(1) - discount)
            elif schema == 2:
                sku = item["product"]["sku"]
                qty = Decimal(item["quantity"])
                unit_price_cents = Decimal(item["unit_price_cents"])
                discount_bps = Decimal(item["discount_bps"]) / Decimal(10000)
                val = unit_price_cents * qty * (Decimal(1) - discount_bps)
                
            usd_cents = val * fx_rate
            rounded_cents = usd_cents.quantize(Decimal("1"), rounding=ROUND_HALF_UP)
            
            total_usd_revenue_cents += rounded_cents
            if sku not in sku_revenue:
                sku_revenue[sku] = Decimal("0")
            sku_revenue[sku] += rounded_cents

    top_sku = None
    top_sku_cents = Decimal("-1")
    for sku, cents in sku_revenue.items():
        if cents > top_sku_cents:
            top_sku = sku
            top_sku_cents = cents
        elif cents == top_sku_cents:
            if top_sku is None or sku < top_sku:
                top_sku = sku

    invoice_count = len(valid_invoices)
    net_usd_str = f"{(total_usd_revenue_cents / Decimal(100)):.2f}"
    top_sku_usd_str = f"{(top_sku_cents / Decimal(100)):.2f}"

    result = {
        "invoice_count": invoice_count,
        "net_usd": net_usd_str,
        "top_sku": top_sku,
        "top_sku_usd": top_sku_usd_str
    }
    print(json.dumps(result, separators=(",", ":")))

if __name__ == "__main__":
    solve()
