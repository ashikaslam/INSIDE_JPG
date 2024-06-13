# your_app/views.py
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, LoginSerializer
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
import re
from rest_framework_simplejwt.tokens import RefreshToken
User = get_user_model()


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