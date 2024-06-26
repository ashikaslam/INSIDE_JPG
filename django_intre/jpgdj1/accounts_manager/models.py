# your_app/models.py
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone

class CustomUserManager(BaseUserManager):
    def create_user(self, email, mobile_number, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        if not mobile_number:
            raise ValueError('The Mobile Number field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, mobile_number=mobile_number, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, mobile_number, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        
        user= self.create_user(email, mobile_number, password, **extra_fields)
        user.is_active=True
        user.save()
        return user









    
    
    
    

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    mobile_number = models.CharField(max_length=15, unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    date_joined = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['mobile_number']
    
    
    
    def save(self, *args, **kwargs):
        if not self.username:
            self.username = self.email
        super().save(*args, **kwargs)

    def __str__(self):
        return self.email
    
    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'


    


# .........................


from django.db import models

class PasswordReset(models.Model):
    email = models.EmailField()
    token = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    
class AccountActivation(models.Model):
    email = models.EmailField()
    token = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)