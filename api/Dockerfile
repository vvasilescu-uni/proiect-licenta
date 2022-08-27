FROM python:3.10-buster

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 80

ENTRYPOINT ["uvicorn", "main:app", "--reload", "--port", "8001"]
