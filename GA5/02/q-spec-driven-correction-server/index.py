from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS so external probes and frontends can reach the endpoint
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (including OPTIONS for preflight)
    allow_headers=["*"],  # Allows all headers
)

class ProrationRequest(BaseModel):
    old_price: float
    new_price: float
    days_remaining: float
    days_in_actual_month: float
    spec: str

@app.post("/charge")
async def calculate_proration(request: ProrationRequest):
    price_difference = request.new_price - request.old_price

    if request.spec == "v1":
        charge = price_difference * (request.days_remaining / 30.0)
    elif request.spec == "v2":
        if request.days_in_actual_month == 0:
            raise HTTPException(status_code=400, detail="Month cannot have zero days")
        charge = price_difference * (request.days_remaining / request.days_in_actual_month)
    else:
        raise HTTPException(status_code=400, detail="Invalid spec version")

    return {"charge": charge}

# Added a basic root health-check just in case the probe checks the base URL first
@app.get("/")
async def health_check():
    return {"status": "Server is running"}