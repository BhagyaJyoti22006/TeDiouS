import json

data = {}

with open("q-multi-cursor-json.txt", "r", encoding="utf-8") as f:
    for line in f:
        line = line.strip()
        if not line or "=" not in line:
            continue

        key, value = line.split("=", 1)
        data[key] = value

print(json.dumps(data, indent=2))