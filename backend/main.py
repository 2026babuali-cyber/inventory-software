from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Inventory & Accounting API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "status": "success",
        "message": "Inventory & Accounting API is running"
    }


@app.get("/api/dashboard")
def dashboard():

    return {
        "sales": 0,
        "purchase": 0,
        "receivable": 0,
        "payable": 0,
        "stock_value": 0
    }
