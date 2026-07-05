from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# PASTE YOUR ASSIGNED BLOCKS HERE
# -----------------------------
LAYER_1_DEFAULTS = """
<DEFAULTS>
"""

LAYER_2_YAML = """
<CONFIG_YAML>
"""

LAYER_3_ENV = """
<ENV_FILE>
"""

LAYER_4_OS = """
<OS_ENV_VARS>
"""

# -----------------------------
# PARSING LOGIC
# -----------------------------
def parse_text_block(text: str, separator: str) -> dict:
    text = text.strip()
    if not text or text == "(empty)":
        return {}
    
    parsed = {}
    for line in text.split("\n"):
        line = line.strip()
        if not line:
            continue
        if separator in line:
            key, val = line.split(separator, 1)
            parsed[key.strip()] = val.strip()
    return parsed

def apply_env_mappings(target_config: dict, env_data: dict):
    for k, v in env_data.items():
        if k == "NUM_WORKERS":
            target_config["workers"] = v
        elif k.startswith("APP_"):
            key = k[4:].lower()
            target_config[key] = v

def build_base_config() -> dict:
    config = parse_text_block(LAYER_1_DEFAULTS, ":")
    config.update(parse_text_block(LAYER_2_YAML, ":"))
    
    env_file_data = parse_text_block(LAYER_3_ENV, "=")
    apply_env_mappings(config, env_file_data)
    
    os_block_data = parse_text_block(LAYER_4_OS, "=")
    apply_env_mappings(config, os_block_data)
    
    apply_env_mappings(config, dict(os.environ))
    
    return config

# -----------------------------
# ENDPOINT
# -----------------------------
@app.get("/effective-config")
@app.get("/{full_path:path}")
async def get_effective_config(
    set: List[str] = Query(default=[]),
    full_path: str = ""
):
    current_config = build_base_config()

    for override in set:
        if "=" in override:
            key, val = override.split("=", 1)
            current_config[key.lower()] = val

    if "port" in current_config:
        current_config["port"] = int(current_config["port"])
    if "workers" in current_config:
        current_config["workers"] = int(current_config["workers"])
    
    if "debug" in current_config:
        val = str(current_config["debug"]).lower()
        current_config["debug"] = val in ["true", "1", "yes", "on"]

    for k in current_config.keys():
        if k not in ["port", "workers", "debug"]:
            current_config[k] = str(current_config[k])
            
    if "api_key" in current_config:
        current_config["api_key"] = "****"

    return current_config