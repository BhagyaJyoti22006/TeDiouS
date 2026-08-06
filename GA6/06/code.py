import zipfile
import json
import hashlib

def solve():
    with zipfile.ZipFile("politeness-audit-site.zip", "r") as z:
        robots_txt = z.read("site/robots.txt").decode("utf-8")
        
        disallows = []
        for line in robots_txt.splitlines():
            line = line.strip()
            if line.lower().startswith("disallow:"):
                val = line[len("disallow:"):].strip()
                if val:
                    disallows.append(val)
                    
        records = []
        for i in range(1, 3001):
            path = f"/page-{i:04d}.html"
            
            allowed = True
            for d in disallows:
                if path.startswith(d):
                    allowed = False
                    break
            
            if not allowed:
                continue
                
            html_text = z.read(f"site{path}").decode("utf-8")
            
            start_str = "id=\"record\">"
            start = html_text.find(start_str)
            if start != -1:
                start += len(start_str)
                end = html_text.find("</script>", start)
                record_json = json.loads(html_text[start:end].strip())
                records.append(record_json)
            
        records.sort(key=lambda r: int(r["id"]))
        
        lines = [json.dumps({"id": r["id"], "category": r["category"], "price": r["price"]}, separators=(",", ":")) for r in records]
        text = "\n".join(lines)
        
        data_hash = hashlib.sha256(text.encode("utf-8")).hexdigest()
        print(json.dumps({"data_hash": data_hash}))

if __name__ == "__main__":
    solve()
