# api/urls.py

from django.urls import include, path

from .views import ClientCreateView, ClientDeleteView, ClientDetailView, ClientFilterView, ClientListView, ClientUpdateView


urlpatterns = [
    path('clients/create/', ClientCreateView.as_view(), name='client-create'),
    path('clients/update/<int:pk>/', ClientUpdateView.as_view(), name='client-update'),
    path('clients/delete/<int:pk>/', ClientDeleteView.as_view(), name='client-delete'),
    path('clients/', ClientListView.as_view(), name='client-list'),
    path('clients/filter/', ClientFilterView.as_view(), name='client-filter'),
    path('clients/<int:pk>/', ClientDetailView.as_view(), name='client-detail'),
    # path('api/', include((swagger_urls, 'swagger'), namespace='swagger')),
    
]
