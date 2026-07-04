import logging
import smtplib
from email.message import EmailMessage

from .config import settings

logger = logging.getLogger(__name__)


def notify_new_lead(name: str, email: str, company: str, project_type: str, message: str) -> None:
    """Best-effort email notification. Never raises: a mail failure
    must not lose the lead (it's already stored in the database)."""
    if not (settings.smtp_host and settings.notify_email):
        return
    try:
        msg = EmailMessage()
        msg["Subject"] = f"New lead: {name}" + (f" ({company})" if company else "")
        msg["From"] = settings.smtp_user or settings.notify_email
        msg["To"] = settings.notify_email
        if email:
            msg["Reply-To"] = email
        msg.set_content(
            f"Name: {name}\nEmail: {email}\nCompany: {company}\n"
            f"Project type: {project_type}\n\n{message}"
        )
        with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=10) as s:
            s.starttls()
            if settings.smtp_user:
                s.login(settings.smtp_user, settings.smtp_password)
            s.send_message(msg)
    except Exception:
        logger.exception("Lead email notification failed (lead is safe in DB)")
