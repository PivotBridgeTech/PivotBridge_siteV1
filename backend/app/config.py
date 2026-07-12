from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str = "sqlite:///./leads.db"
    admin_api_key: str = "change-me-to-a-long-random-string"
    allowed_origins: str = "http://localhost:5173"
    smtp_host: str = ""
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_password: str = ""
    notify_email: str = ""
    # Enables the /api/chat assistant when set; chat is disabled when empty.
    anthropic_api_key: str = ""
    # Haiku keeps a public, unauthenticated endpoint cheap and fast. Set
    # CHAT_MODEL=claude-opus-4-8 (or any Claude model id) for richer replies.
    chat_model: str = "claude-haiku-4-5"

    class Config:
        env_file = ".env"

    @property
    def origins_list(self) -> list[str]:
        return [o.strip() for o in self.allowed_origins.split(",") if o.strip()]


settings = Settings()
