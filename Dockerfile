FROM python:latest

WORKDIR /app

COPY data_processor.py .

CMD ["python", "data_processor.py"]

