# your_app/views.py
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, LoginSerializer,PasswordChangeSerializer
from .import serializers
from. import models
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
import re
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
User = get_user_model()
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import SessionAuthentication
# register view ..............................
class UserSignupView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            serializer = UserSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)




# login  view ..............................

class UserLoginView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            # Initialize the serializer with the request data
            serializer = LoginSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            
            # Extract the validated data
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']

            # Determine if the username is an email or phone number
            if re.match(r'^\+?1?\d{1,15}$', username):  # Basic phone number regex
                user = User.objects.filter(mobile_number=username).first()
            else:
                user = User.objects.filter(email=username).first()

            if user is not None:
                # Perform authentication
                authenticated_user = authenticate(request=request, username=user.email, password=password)
                if authenticated_user is not None:
                    # User authentication successful
                    Refresh=RefreshToken.for_user(authenticated_user)
                    return Response({'message': 'Login successful.', 'user_id': authenticated_user.id ,"access" :str( Refresh.access_token), 'refresh':str( Refresh)}, status=status.HTTP_200_OK)
                else:
                    # Invalid credentials
                    return Response({'error': 'Invalid credentials.'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                # User not found
                return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
        
        except serializer.ValidationError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': 'An unexpected error occurred.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        




# ................ change password


class PasswordChangeView(APIView):
    authentication_classes=[JWTAuthentication,SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        print("hello")
        print(request.user.uesername)
        serializer = PasswordChangeSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = request.user
            current_password = serializer.validated_data['current_password']
            new_password1 = serializer.validated_data['new_password1']
            new_password2 = serializer.validated_data['new_password2']
            
            if not user.check_password(current_password):
                return Response({'error': 'Current password is not correct'}, status=status.HTTP_400_BAD_REQUEST)
            
            if new_password1 != new_password2:
                return Response({'error': 'The two new passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)
            
            user.set_password(new_password1)
            user.save()

            return Response({'message': 'Password changed successfully'}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    


# ................................






from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from rest_framework import status
from django.contrib.auth.tokens import PasswordResetTokenGenerator



class RequestPasswordReset(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = serializers.ResetPasswordRequestSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        email = request.data['email']
        user = models.CustomUser.objects.filter(email__iexact=email).first()

        if user:
            token_generator = PasswordResetTokenGenerator()
            token = token_generator.make_token(user) 
            reset = models.PasswordReset(email=email, token=token)
            reset.save()

            # reset_url = f"{os.environ['PASSWORD_RESET_BASE_URL']}/{token}"
            print(token,user)
            # Sending reset link via email (commented out for clarity)
            # ... (email sending code)

            return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "User with credentials not found"}, status=status.HTTP_404_NOT_FOUND)
        
        
        
        
    
class ResetPassword(generics.GenericAPIView):
    serializer_class = serializers.ResetPasswordSerializer
    permission_classes = []

    def post(self, request, token):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        
        new_password = data['new_password']
        confirm_password = data['confirm_password']
        
        if new_password != confirm_password:
            return Response({"error": "Passwords do not match"}, status=400)
        
        reset_obj = models.PasswordReset.objects.filter(token=token).first()
        
        if not reset_obj:
            return Response({'error':'Invalid token'}, status=400)
        
        user = User.objects.filter(email=reset_obj.email).first()
        
        if user:
            user.set_password(request.data['new_password'])
            user.save()
            
            reset_obj.delete()
            
            return Response({'success':'Password updated'})
        else: 
            return Response({'error':'No user found'}, status=404)