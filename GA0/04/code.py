import json
import statistics

with open("q-calculate-variance.json") as f:
    data = json.load(f)

print(round(statistics.variance(data), 2))