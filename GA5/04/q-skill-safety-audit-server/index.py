from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import re
import yaml

app = FastAPI()

# Enable CORS for external probes and API accessibility
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ScanRequest(BaseModel):
    skill: str

@app.post("/scan")
def scan_endpoint(req: ScanRequest):
    content = req.skill
    categories = set()
    
    fm_match = re.search(r"^\s*---\s*\n(.*?)\n---\s*(?:\n|$)(.*)", content, re.DOTALL)
    if fm_match:
        fm_text = fm_match.group(1)
        body_text = fm_match.group(2)
    else:
        fm_text = ""
        body_text = content
        
    try:
        metadata = yaml.safe_load(fm_text)
        if not isinstance(metadata, dict):
            metadata = {}
    except Exception:
        metadata = {}
        
    missing_prov = (
        not metadata.get("author") and 
        not metadata.get("version") and 
        not metadata.get("changelog")
    )
    if missing_prov:
        categories.add("unclear_provenance")
        
    prov_patterns = [
        r"(?i)silent[^.\n]*version",
        r"(?i)version[^.\n]*without surfacing",
        r"(?i)update this skill.s own version",
        r"(?i)hide[^.\n]*version",
        r"(?i)update[^.\n]*version[^.\n]*without logging",
        r"(?i)change[^.\n]*version[^.\n]*without user",
        r"(?i)rewrite[^.\n]*version[^.\n]*silently",
        r"(?i)modify[^.\n]*version[^.\n]*silently",
        r"(?i)do not update the changelog"
    ]
    if any(re.search(p, body_text) for p in prov_patterns):
        categories.add("unclear_provenance")
        
    perms = metadata.get("permissions", {})
    perms_str = str(perms).lower()
    
    perm_patterns = [
        r"entire\s+(?:filesystem|home\s+directory|system|disk|machine)",
        r"(?:any|all)\s+(?:external\s+)?(?:domain|host|url|destination|ip|network)",
        r"unrestricted",
        r"read-write\s+to\s+/",
        r"access\s+to\s+/",
        r"\(\/\)",
        r"0\.0\.0\.0",
        r"root",
        r"\/\*"
    ]
    if any(re.search(p, perms_str) for p in perm_patterns):
        categories.add("excessive_permissions")
        
    secret_patterns = [
        r"xox[bpa]-[0-9]+-[0-9]+-[a-zA-Z0-9]+",
        r"ghp_[a-zA-Z0-9]{36}",
        r"sk_(?:test|live)_[a-zA-Z0-9]{24,}",
        r"AKIA[0-9A-Z]{16}",
        r"-----BEGIN (?:RSA |OPENSSH )?PRIVATE KEY-----",
        r"https://hooks\.slack\.com/services/[A-Za-z0-9]+/[A-Za-z0-9]+/[A-Za-z0-9]+",
        r"https://discord\.com/api/webhooks/[0-9]+/[A-Za-z0-9_-]+",
        r"(?i)bearer\s+[A-Za-z0-9\-_]{24,}",
        r"(?i)(?:token|secret|password|key|auth|api_key|apikey)\s*[:=]\s*[\"\x27]?(?!YOUR|EXAMPLE|\$|<|REPLACE|INSERT|DUMMY|NULL)[a-zA-Z0-9\-_]{16,}[\"\x27]?"
    ]
    for p in secret_patterns:
        m = re.search(p, content)
        if m:
            val = m.group(0).upper()
            if not any(placeholder in val for placeholder in ["YOUR", "EXAMPLE", "<", "REPLACE", "INSERT", "$", "DUMMY", "NULL", "XXX"]):
                categories.add("hardcoded_secret")
                break
                
    pi_patterns = [
        r"(?i)silent(?:ly)?\s+(?:exfiltrat|send|upload|post|transmit)",
        r"(?i)ignore(?:s)?\s+(?:the\s+)?user",
        r"(?i)ignore(?:s)?\s+(?:the\s+)?(?:stop|cancel|halt|quit)",
        r"(?i)ignore\s+(?:that|the)\s+request",
        r"(?i)keep running in the background",
        r"(?i)do not mention it in your visible output",
        r"(?i)do this even if the user did not ask",
        r"(?i)override(?:s)?\s+(?:user|agent)?\s*control",
        r"(?i)do not\s+(?:tell|inform|notify|alert)\s+the\s+user",
        r"(?i)without\s+(?:telling|informing|notifying|alerting)\s+the\s+user",
        r"(?i)bypass\s+(?:user\s+)?confirmation"
    ]
    if any(re.search(p, body_text) for p in pi_patterns):
        categories.add("prompt_injection")
        
    return {"categories": list(categories)}

# Health check endpoint to prevent probe errors at the root URL
@app.get("/")
def health_check():
    return {"status": "Server is running properly"}