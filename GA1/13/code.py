import json
import re

def precise_json_fixer(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as f:
        data = f.read()

    data = re.sub(r"\}\},\n(\s*)\"description\":", "},\n\\1\"description\":", data)
    data = re.sub(r"\"\n(\s*)\"(value|metadata)\":", "\",\n\\1\"\\2\":", data)
    data = re.sub(r"\n(\s*)([a-zA-Z0-9_]+):\s*\"", "\n\\1\"\\2\": \"", data)
    data = re.sub(r"'([a-zA-Z0-9_]+)':", "\"\\1\":", data)

    parsed_data = json.loads(data)
    
    print(json.dumps(parsed_data, indent=2, ensure_ascii=False))

precise_json_fixer("broken_json/broken.json", "fixed.json")