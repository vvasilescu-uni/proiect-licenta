FROM tensorflow/tensorflow:latest-gpu-jupyter as build

RUN apt-get update
RUN apt-get install ffmpeg libsm6 libxext6 -y

WORKDIR /app

COPY ./requirements .
RUN python -m pip install -r requirements

COPY ./app .
