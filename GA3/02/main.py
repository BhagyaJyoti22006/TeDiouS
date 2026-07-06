import os
import json
import base64
import io
import asyncio
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from PIL import Image
from google import genai
from google.genai import types

# Initialize app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    raise ValueError("GEMINI_API_KEY environment variable is not set.")

client = genai.Client(api_key=API_KEY)

# Create an async lock to process requests sequentially
api_lock = asyncio.Lock()

CONFIG_FILE = "q-multimodal-image-qa-server_sample.json"
DYNAMIC_RULES = "Return only the raw string or number answer without units."

try:
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE, "r") as f:
            config_data = json.load(f)
            raw_notes = config_data.get("endpoint_spec", {}).get("notes", [])
            
            exclude_keywords = ["cors", "worker", "model", "pipeline", "gpt", "claude"]
            clean_notes = [
                note for note in raw_notes 
                if not any(kw in note.lower() for kw in exclude_keywords)
            ]
            
            if clean_notes:
                DYNAMIC_RULES = " ".join(clean_notes)
except Exception as e:
    print(f"Warning: Could not load JSON config. ({e})")

class ImageRequest(BaseModel):
    image_base64: str
    question: str

class ImageResponse(BaseModel):
    answer: str

@app.post("/answer-image", response_model=ImageResponse)
async def answer_image(request: ImageRequest):
    try:
        b64_string = request.image_base64
        if "," in b64_string:
            b64_string = b64_string.split(",")[1]

        image_data = base64.b64decode(b64_string)
        image = Image.open(io.BytesIO(image_data))

        system_instructions = (
            "You are a robotic data extraction pipeline. "
            "Answer the question based strictly on the provided image. "
            f"DYNAMIC RULES: {DYNAMIC_RULES} "
            "CRITICAL: Output NOTHING else. No conversational text. "
            "Strip all commas and currency symbols from numeric answers."
        )

        # Queue the requests one at a time
        async with api_lock:
            print(f"Processing question: {request.question}...")
            
            # Sleep for 3 seconds to avoid triggering Google's rate limiter
            await asyncio.sleep(3)
            
            response = client.models.generate_content(
                model='gemini-2.5-flash',
                contents=[image, request.question],
                config=types.GenerateContentConfig(
                    system_instruction=system_instructions,
                    temperature=0.0
                )
            )
            
        final_answer = response.text.strip()
        print(f"Answer generated: {final_answer}\n")
        
        return {"answer": final_answer}

    except Exception as e:
        print(f"Server Error: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error")