from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product, Profile
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken


class productSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'        

class profileSerializer(serializers.ModelSerializer):
    email = serializers.SerializerMethodField(read_only=True)
    username = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Profile
        fields = '__all__'
    def get_email(self, obj):
        return obj.user_profile.email

    def get_username(self, obj):
        return obj.user_profile.username          
    
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

    #     # Add custom claims
        token['name'] = user.username
        token['message'] = "authentication successful!"
        return token
    
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data
    


class UserSerializerWithToken(userSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
    
    def get_isAdmin(self, obj):
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
            return user.is_superuser
