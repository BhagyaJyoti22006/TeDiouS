from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow all origins (for testing)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SentimentRequest(BaseModel):
    sentences: List[str]


analyzer = SentimentIntensityAnalyzer()

def get_sentiment(text: str) -> str:
    score = analyzer.polarity_scores(text)["compound"]

    if score >= 0.05:
        return "happy"
    elif score <= -0.05:
        return "sad"
    else:
        return "neutral"


@app.post("/sentiment")
def sentiment_analysis(request: SentimentRequest):
    results = []

    for sentence in request.sentences:
        results.append({
            "sentence": sentence,
            "sentiment": get_sentiment(sentence)
        })

    return {"results": results}