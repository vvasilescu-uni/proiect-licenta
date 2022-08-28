from utils.process_image import process_image
from models.prediction_body import PredictionBody
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/predict")
def predict(body: PredictionBody):
    image = process_image(body.image)
    resp = requests.post(
        "http://server:8501/v1/models/char_recog_model:predict",
        json={"instances": image.tolist()},
    )

    predictions = resp.json()["predictions"][0]
    max_index = predictions.index(max(predictions))

    confidence = int(predictions[max_index] * 100)
    prediction = chr(ord("A") + max_index)

    return {"conf": confidence, "pred": prediction}
