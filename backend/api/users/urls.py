from django.urls import path
from .views import *
from rest_framework_simplejwt.views import token_refresh

urlpatterns = [
    path('register/', UserRegisterAPIView.as_view(), name="register-api"),
    path('login/', UserLoginAPIView.as_view(), name='login-api'),
    path('verify-user/', VerifyUserAPIView.as_view(), name="verify-user"),
    path('request-password-reset/', PasswordResetRequestAPIView.as_view(), name='request-password-reset'),
    path('set-new-password/<uuidb64>/<token>/', SetNewPasswordAPIView.as_view(), name='set-new-password'),
    path('homepage/', homePage, name='homepage'),
    path('token-refresh/', token_refresh, name='token-refresh')
]