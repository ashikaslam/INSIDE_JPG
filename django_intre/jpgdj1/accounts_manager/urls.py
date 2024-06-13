




# your_project/urls.py
from django.urls import path
from . import views







urlpatterns = [
    path('signup/', views.UserSignupView.as_view(), name='user_signup'),
    path('login/', views.UserLoginView.as_view(), name='user_login'),
    # Other URL patterns...
]
