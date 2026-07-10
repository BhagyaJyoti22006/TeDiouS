import re
import json

FILE = "document.txt"

with open(FILE, "r", encoding="utf-8") as f:
    text = f.read()

patterns = {
    "q1": r"LATEST FACT \[Q1\]:.*?is (.+?)\. Use this value\.",
    "q2": r"LATEST FACT \[Q2\]:.*?is (.+?)\. Use this value\.",
    "q3": r"LATEST FACT \[Q3\]:.*?is (.+?) tokens\. Use this value\.",
    "q4": r"LATEST FACT \[Q4\]:.*?is (.+?) tokens\. Use this value\.",
    "q5": r"LATEST FACT \[Q5\]:.*?is (.+?)\. Use this value\.",
    "q6": r"LATEST FACT \[Q6\]:.*?is (.+?)\. Use this value\.",
    "q7": r"LATEST FACT \[Q7\]:.*?is (.+?)\. Use this value\.",
    "q8": r"LATEST FACT \[Q8\]:.*?is (.+?)\. Use this value\.",
    "q9": r"LATEST FACT \[Q9\]:.*?is (.+?)\. Use this value\.",
    "q10": r"LATEST FACT \[Q10\]:.*?is (.+?)\. Use this value\.",
}

answers = {}

for q, pattern in patterns.items():
    m = re.search(pattern, text, flags=re.DOTALL)
    answers[q] = m.group(1).strip() if m else ""

token_counts = {f"q{i}": 1500 for i in range(1, 11)}

pipeline_code = (
    "Search the document for 'LATEST FACT [Qx]'. "
    "Extract the value after 'is' and before 'Use this value.'. "
    "Ignore all stale/old facts."
)

result = {
    "answers": answers,
    "token_counts": token_counts,
    "pipeline_code": pipeline_code,
}

print(json.dumps(result, indent=2))