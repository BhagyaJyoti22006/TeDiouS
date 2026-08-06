import asyncio
from playwright.async_api import async_playwright
import os
import re
import math
import json
from datetime import datetime, timezone

def parse_duration(d_str):
    d_str = d_str.strip()
    if d_str.startswith("PT"):
        h = 0
        m = 0
        match_h = re.search(r"(\d+)H", d_str)
        if match_h: h = int(match_h.group(1))
        match_m = re.search(r"(\d+)M", d_str)
        if match_m: m = int(match_m.group(1))
        return h * 60 + m
    elif "h" in d_str or "m" in d_str and "min" not in d_str:
        h = 0
        m = 0
        match_h = re.search(r"(\d+)h", d_str)
        if match_h: h = int(match_h.group(1))
        match_m = re.search(r"(\d+)m", d_str)
        if match_m: m = int(match_m.group(1))
        return h * 60 + m
    elif "min" in d_str:
        match = re.search(r"(\d+)\s*min", d_str)
        if match: return int(match.group(1))
    return int(re.sub(r"\D", "", d_str)) if re.sub(r"\D", "", d_str) else 0

def parse_impact(i_str):
    val = re.sub(r"[^\d.]", "", i_str)
    return float(val) if val else 0.0

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        file_path = f"""file:///{os.path.abspath("q-playwright-shadow-incident-audit-server.html").replace(chr(92), "/")}"""
        await page.goto(file_path)
        
        all_records = []
        
        while True:
            await page.wait_for_selector("body[data-ready=\"true\"]")
            
            records = await page.evaluate(r"""() => {
                function getRecords(root) {
                    let recs = [];
                    const els = root.querySelectorAll("*");
                    for (const el of els) {
                        if (el.shadowRoot) {
                            recs.push(...getRecords(el.shadowRoot));
                        }
                        if (el.matches && el.matches(".record[data-active=\"true\"]")) {
                            recs.push({
                                event_id: el.getAttribute("data-event-id"),
                                incident_id: el.getAttribute("data-incident-id"),
                                revision: parseInt(el.getAttribute("data-revision"), 10),
                                updated_at: el.getAttribute("data-updated-at"),
                                team: el.querySelector(".team") ? el.querySelector(".team").textContent.trim() : "",
                                severity: el.querySelector(".severity") ? el.querySelector(".severity").textContent.trim() : "",
                                status: el.querySelector(".status") ? el.querySelector(".status").textContent.trim() : "",
                                duration: el.querySelector(".duration") ? el.querySelector(".duration").textContent.trim() : "",
                                impact: el.querySelector(".impact") ? el.querySelector(".impact").textContent.trim() : ""
                            });
                        }
                    }
                    return recs;
                }
                return getRecords(document);
            }""")
            
            all_records.extend(records)
            
            next_btn = page.locator("#next-page")
            is_disabled = await next_btn.is_disabled()
            if is_disabled:
                break
                
            current_page = await page.evaluate("document.body.getAttribute(\"data-page\")")
            await next_btn.click()
            
            await page.wait_for_function(f"""() => {{
                return document.body.getAttribute("data-page") !== "{current_page}" && 
                       document.body.getAttribute("data-ready") === "true";
            }}""")
            
        await browser.close()
    
    unique_events = {}
    for r in all_records:
        unique_events[r["event_id"]] = r
    
    unique_records = list(unique_events.values())
    
    incidents = {}
    for r in unique_records:
        iid = r["incident_id"]
        rev = r["revision"]
        upd = r["updated_at"]
        
        if iid not in incidents:
            incidents[iid] = r
        else:
            curr = incidents[iid]
            if rev > curr["revision"]:
                incidents[iid] = r
            elif rev == curr["revision"] and upd > curr["updated_at"]:
                incidents[iid] = r
                
    filtered = []
    st = datetime.fromisoformat("2026-04-02T00:00:00+00:00")
    et = datetime.fromisoformat("2026-05-28T00:00:00+00:00")
    
    for r in incidents.values():
        if r["team"] != "Beacon": continue
        if r["severity"] not in ("S1", "S2"): continue
        if r["status"] != "RESOLVED": continue
        
        dt = datetime.fromisoformat(r["updated_at"].replace("Z", "+00:00"))
        if not (st <= dt < et): continue
        
        filtered.append(r)
        
    resolved_incidents = len(filtered)
    downtime_minutes = sum(parse_duration(r["duration"]) for r in filtered)
    loss_usd = sum(parse_impact(r["impact"]) for r in filtered)
    
    durations = sorted(parse_duration(r["duration"]) for r in filtered)
    p95_minutes = 0
    if durations:
        idx = math.ceil(0.95 * len(durations)) - 1
        p95_minutes = durations[idx]
        
    result = {
        "resolved_incidents": resolved_incidents,
        "downtime_minutes": downtime_minutes,
        "loss_usd": round(loss_usd, 2),
        "p95_minutes": p95_minutes
    }
    
    print(json.dumps(result, separators=(",", ":")))

if __name__ == "__main__":
    asyncio.run(main())