from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# This allows your React frontend (running on port 5173) to securely talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Alpha Investment API"}

@app.get("/api/portfolio")
def get_portfolio_summary():
    # Later, this data will come from PostgreSQL. For now, we mock it.
    return {
        "total_value": 124500.00,
        "daily_change_percentage": 3.4,
        "active_assets": 12,
        "asset_classes": 3
    }