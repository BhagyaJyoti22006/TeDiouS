import json

with open("config_merge/base.json") as f:
    base = json.load(f)

with open("config_merge/branch_a.json") as f:
    a = json.load(f)

with open("config_merge/branch_b.json") as f:
    b = json.load(f)

conflict_count = sum(
    1
    for k in base
    if a[k]["value"] != base[k]["value"]
    and b[k]["value"] != base[k]["value"]
    and a[k]["value"] != b[k]["value"]
)

print(conflict_count)