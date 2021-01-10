from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'technologies', views.TechnologyViewset,
                basename="technologies")
router.register(r'projects', views.ProjectViewset, basename="projects")
router.register(r'blogs', views.BlogViewset, basename="blogs")

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
