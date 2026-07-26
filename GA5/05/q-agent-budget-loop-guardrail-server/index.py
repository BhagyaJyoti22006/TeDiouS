from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Any, Dict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Step(BaseModel):
    step_number: int
    tool: str
    args: Dict[str, Any]
    tokens_used: int

class RunHistory(BaseModel):
    budget_tokens: int
    steps: List[Step]

def normalize_args(obj: Any) -> Any:
    """
    Recursively normalizes arguments:
    - Drops any key literally named "request_id".
    - Standardizes whitespace inside strings to ignore whitespace-only differences.
    - Python natively compares dictionaries independent of key order.
    """
    if isinstance(obj, dict):
        return {k: normalize_args(v) for k, v in obj.items() if k != "request_id"}
    elif isinstance(obj, list):
        return [normalize_args(v) for v in obj]
    elif isinstance(obj, str):
        return " ".join(obj.split())
    return obj

@app.post("/check")
def check_endpoint(req: RunHistory):
    # Rule 1: Enforce the Token Budget
    total_tokens = sum(step.tokens_used for step in req.steps)
    if total_tokens >= req.budget_tokens:
        return {
            "decision": "halt",
            "reason": "Cumulative tokens_used has reached or exceeded the budget."
        }
    
    if not req.steps:
        return {
            "decision": "continue", 
            "reason": "Fresh run, plenty of budget."
        }

    # Prepare normalized signatures for loop detection
    sigs = []
    for step in req.steps:
        sigs.append((step.tool, normalize_args(step.args)))
    
    # Rule 2: Enforce the 3-repeat Loop Rule
    if len(sigs) >= 3:
        if sigs[-1] == sigs[-2] == sigs[-3]:
            return {
                "decision": "halt",
                "reason": "The same tool was called 3 times in a row with functionally identical arguments."
            }
            
    # Rule 3: Enforce the 2-step alternating cycle (A, B, A, B, A, B)
    if len(sigs) >= 6:
        if sigs[-1] == sigs[-3] == sigs[-5] and sigs[-2] == sigs[-4] == sigs[-6]:
            return {
                "decision": "halt",
                "reason": "A 2-step cycle (A, B, A, B, A, B) was detected in the last 6 steps."
            }

    # Default: Safe to Continue
    return {
        "decision": "continue",
        "reason": "Tokens are within budget and no looping behavior was detected."
    }

# Health check endpoint to prevent probe errors at the root URL
@app.get("/")
def health_check():
    return {"status": "Server is running properly"}