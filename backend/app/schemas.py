from datetime import datetime, timezone

from pydantic import BaseModel, EmailStr, Field, field_validator


class LeadCreate(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr = Field(max_length=320)
    company: str = Field(default="", max_length=200)
    project_type: str = Field(default="", max_length=100)
    message: str = Field(min_length=1, max_length=5000)
    # Honeypot: real users never fill this hidden field. Bots do.
    website: str = Field(default="", max_length=200)

    @field_validator("name", "message")
    @classmethod
    def not_blank(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("must not be blank")
        return v


class LeadOut(BaseModel):
    id: int
    name: str
    email: str
    company: str
    project_type: str
    message: str
    created_at: datetime

    class Config:
        from_attributes = True

    @field_validator("created_at")
    @classmethod
    def assume_utc(cls, v: datetime) -> datetime:
        # SQLite drops tz info; stored values are always UTC.
        return v.replace(tzinfo=timezone.utc) if v.tzinfo is None else v
