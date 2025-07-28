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


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.username
        token['message'] = "authentication successful!"
        return token


class UserSerializerWithToken(userSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
