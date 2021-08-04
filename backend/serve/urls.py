from django.urls import path
from .views import ServeView

# Let React Router handle all routes by only serving the index page in each URL
urlpatterns = [
    path('', ServeView.as_view(), name='index'),
]
