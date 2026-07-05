from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Event(BaseModel):
    user: str
    amount: float
    ts: int

class AnalyticsRequest(BaseModel):
    events: List[Event]

API_KEY = "<API_KEY>"
USER_EMAIL = "<roll>@ds.study.iitm.ac.in"

@app.post("/analytics")
@app.post("/{full_path:path}")
async def process_analytics(
    req: AnalyticsRequest,
    x_api_key: Optional[str] = Header(None, alias="X-API-Key"),
    full_path: str = ""
):
    if x_api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Unauthorized")

    total_events = len(req.events)
    unique_users_set = set()
    user_revenue = {}
    total_revenue = 0.0

    for event in req.events:
        unique_users_set.add(event.user)
        
        # Only process revenue and top user logic for positive amounts
        if event.amount > 0:
            total_revenue += event.amount
            user_revenue[event.user] = user_revenue.get(event.user, 0.0) + event.amount

    unique_users = len(unique_users_set)
    top_user = max(user_revenue, key=user_revenue.get) if user_revenue else ""

    return {
        "email": USER_EMAIL,
        "total_events": total_events,
        "unique_users": unique_users,
        "revenue": total_revenue,
        "top_user": top_user
    }