from pydantic import BaseModel


class PredictionBody(BaseModel):
    image: str
