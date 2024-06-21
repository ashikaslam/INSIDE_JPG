





from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.exceptions import ValidationError  # Correct import
User = get_user_model()

# register..................................
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'mobile_number', 'first_name', 'last_name', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data): # it is build in mathod
        user = User.objects.create_user(
            email=validated_data['email'],
            mobile_number=validated_data['mobile_number'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            
        )
        return user

        """
        {
  "email": "user@example.com",
  "mobile_number": "+1234567890",
  "first_name": "John",
  "last_name": "Doe",
  "password": "password123"
}

        
        """




# login ........................
from rest_framework import serializers

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, style={'input_type': 'password'})
    """
    
    {
  "username": "ashikaslam0000@gmail.com",
  "password": "password123"
}
    
    
    """


# passwrod change with current password

class PasswordChangeSerializer(serializers.Serializer):
    current_password = serializers.CharField(required=True)
    new_password1 = serializers.CharField(required=True)
    new_password2 = serializers.CharField(required=True)
    
    
    
    
# now this the code if someone forget his/her passoword
from rest_framework import serializers

class ResetPasswordRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    
    
    
# class ResetPasswordSerializer(serializers.Serializer):
#     new_password = serializers.RegexField(
#         regex=r'^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$',
#         write_only=True,
#         error_messages={'invalid': ('Password must be at least 8 characters long with at least one capital letter and symbol')})
#     confirm_password = serializers.CharField(write_only=True, required=True)
    
class ResetPasswordSerializer(serializers.Serializer):
    new_password = serializers.CharField(write_only=True, required=True)
    confirm_password = serializers.CharField(write_only=True, required=True)
    
    