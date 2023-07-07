from rest_framework import generics, status, views
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .serializers import *
from django.contrib.sites.shortcuts import get_current_site
from .utils import Utils
from django.urls import reverse
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import smart_bytes, force_bytes, DjangoUnicodeDecodeError
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.shortcuts import render
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenRefreshView
import jwt
from django.conf import settings
from decouple import config


class UserRegisterAPIView(generics.GenericAPIView):
    serializer_class = UserRegistrationSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data
        serializer.save()
        user = get_user_model().objects.get(email=serializer.data['email'])
        rtoken = RefreshToken.for_user(user)
        atoken = rtoken.access_token
        email_to = user.email
        email_subject = "Verify your email"
        relative_url = reverse('verify-user')
        current_site = get_current_site(request).domain
        absolute_url = "{}{}?token={}".format(current_site, relative_url, str(atoken))
        email_body = "Hi, {}\nPlease use the link below to verify your email:\n{}".format(user.username, absolute_url)
        payload = { 'EMAIL_SUBJECT':email_subject
        ,'EMAIL_BODY':email_body, 'EMAIL_TO':email_to}
        Utils.send_email(payload)
        return Response({'mesage': f"Registered Successfully! Verification Email sent to {email_to}", 'email_body': email_body}, status=status.HTTP_200_OK)


class VerifyUserAPIView(views.APIView):
    def get(self, request):
        token = request.GET.get('token')
        try:
            payload = jwt.decode(jwt=token, key=settings.SECRET_KEY, algorithms="HS256")
            user = get_user_model().objects.get(id=payload["user_id"])
            if not user.is_verified:
                user.is_verified = True
                user.save()
                return Response({'message':'User has been verified!'})
            else:return Response({'message': "user is verified already!"}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.ExpiredSignatureError as e:
            return Response({"sorry token expired"})
        except jwt.exceptions.DecodeError as e:
            return Response({"sorry token is invalid!"})
    


class UserLoginAPIView(generics.GenericAPIView):
    serializer_class = UserSignInSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data

        user = get_user_model().objects.get(email=serializer.data['email'])

        rtoken = RefreshToken.for_user(user)
        atoken = rtoken.access_token
        
        return Response({'message':'successfully logged in', 'tokens': {'refresh': str(rtoken), 'access':str(atoken)}}, status=status.HTTP_200_OK)


class PasswordResetRequestAPIView(generics.GenericAPIView):
    serializer_class = RequestPasswordResetSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        if get_user_model().objects.filter(email=serializer.data['email']).exists:
            user = get_user_model().objects.get(email=serializer.data['email'])
            # Encode the user id and generate a token for the user
            uuidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)

            # Send the token and the encoded id to the user via email
            email_subject = "Reset your password"
            current_site = get_current_site(request).domain
            relative_url = reverse('set-new-password', kwargs={'token': token, 'uuidb64': uuidb64})
            absolute_url = "{}{}".format(current_site, relative_url)
            email_body = "Hello, please reset your password with the link below: {}".format(absolute_url)
            payload={'EMAIL_SUBJECT': email_subject, 'EMAIL_BODY': email_body, 'EMAIL_TO': user.email}
            Utils.send_email(payload)

            return Response({'message': f'password reset link sent to {user.email}', 'email_body': absolute_url}, status=status.HTTP_200_OK)
        return Response("User does not exist!", status=status.HTTP_400_BAD_REQUEST)

class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def patch(self, request, token, uuidb64):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Decode the user id and check the validity of the token
        id = force_bytes(urlsafe_base64_decode(uuidb64))
        user = get_user_model().objects.get(id=id)
        if PasswordResetTokenGenerator().check_token(user, token):
            user.set_password(serializer.data['password'])
            user.save()
            return Response('password reset succesful!', status=status.HTTP_200_OK)
        else: 
            return Response('Invalid password reset link or token!', status=status.HTTP_400_BAD_REQUEST)
        


def homePage(request):
    return render(request, 'homepage.html')


class RefreshJWTAPIView(views.APIView):
    def post(self, request):
        refresh_jwt_token = TokenRefreshView.as_view()
        res = refresh_jwt_token(request._request)