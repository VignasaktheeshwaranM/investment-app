from sqlalchemy import Column, Integer, Float
from database import Base

class Portfolio(Base):
    __tablename__ = "portfolios"

    id = Column(Integer, primary_key=True, index=True)
    total_value = Column(Float, nullable=False)
    daily_change_percentage = Column(Float, nullable=False)
    active_assets = Column(Integer, nullable=False)
    asset_classes = Column(Integer, nullable=False)