from rest_framework import viewsets
from .models import Technologies, ProjectModel, Blog
from .serializers import TechnologySerializer, ProjectSerializer, BlogSerializer


class TechnologyViewset(viewsets.ModelViewSet):
    queryset = Technologies.objects.all()
    serializer_class = TechnologySerializer


class ProjectViewset(viewsets.ModelViewSet):
    queryset = ProjectModel.objects.all()
    serializer_class = ProjectSerializer


class BlogViewset(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
