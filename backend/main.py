from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import models
from database import engine, SessionLocal

# Creates the tables in PostgreSQL automatically
models.Base.metadata.create_all(bind=engine)

app = FastAPI()
# This allows your React frontend (running on port 5173) to securely talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database session manager
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/api/portfolio")
def get_portfolio_summary(db: Session = Depends(get_db)):
    portfolio = db.query(models.Portfolio).first()
    
    # If the database is empty, seed it with initial data
    if not portfolio:
        new_portfolio = models.Portfolio(
            total_value=500000.00,
            daily_change_percentage=2.4,
            active_assets=12,
            asset_classes=3
        )
        db.add(new_portfolio)
        db.commit()
        db.refresh(new_portfolio)
        return new_portfolio

    return portfolio
