from django.urls import path
from . import views

urlpatterns = [
    path('allBooks', views.get_all_books),
]
