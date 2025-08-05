from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import Product, Profile
from .serializers import productSerializers, userSerializer,  profileSerializer, UserSerializerWithToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework import status

class ProductListView(viewsets.ModelViewSet):
    serializer_class = productSerializers
    queryset = Product.objects.all()


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class Home(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            qs = get_object_or_404(Profile.objects.all(), id=request.user.profile.id)
            serializer = profileSerializer(qs)
            serializer.data["email"] = request.user.email
            return Response(serializer.data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
        # else:
        #     content = {'message': 'Hello, World!', 'user_id': request.user.id}
        #     return Response(content)




# Create your views here.
