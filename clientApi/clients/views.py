
from django.shortcuts import render

# Create your views here.
# api/views.py

from rest_framework import generics,filters
from .models import Client
from .serializers import ClientSerializer


class ClientCreateView(generics.CreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class ClientUpdateView(generics.UpdateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class ClientDeleteView(generics.DestroyAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class ClientListView(generics.ListAPIView):
    queryset = Client.objects.filter(is_deleted=False)
    serializer_class = ClientSerializer

class ClientFilterView(generics.ListAPIView):
    queryset = Client.objects.filter(is_deleted=False)
    serializer_class = ClientSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'creation_date']

class ClientDetailView(generics.RetrieveAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer