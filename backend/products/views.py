from django.shortcuts import render

from .models import Product, Profile
from .serializers import productSerializers, userSerializer, MyTokenObtainPairSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework import viewsets

class ProductListView(viewsets.ModelViewSet):
    serializer_class = productSerializers
    queryset = Product.objects.all()

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer




# Create your views here.
