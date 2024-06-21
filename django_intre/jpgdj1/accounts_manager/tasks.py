



# users/tasks.py

from celery import shared_task
from django.utils import timezone
from datetime import timedelta
from .models import PasswordReset

@shared_task
def delete_expired_password_reset_tokens():
    expiration_time = timezone.now() - timedelta(minutes=10)
    PasswordReset.objects.filter(created_at__lt=expiration_time).delete()
