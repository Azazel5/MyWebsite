from rest_framework import serializers
from .models import Technologies, ProjectModel, Blog


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technologies
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    project_technology = TechnologySerializer(read_only=True, many=True)
    class Meta:
        model = ProjectModel
        fields = '__all__'


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'