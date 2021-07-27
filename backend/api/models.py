from django.db import models
from ckeditor.fields import RichTextField


class Technologies(models.Model):
    technology_name = models.CharField(max_length=255)
    svg_name = models.CharField(max_length=30, null=True)
    show_on_sidebar = models.BooleanField()

    def __str__(self):
        return self.technology_name

    class Meta:
        verbose_name_plural = 'Technologies'


class ProjectModel(models.Model):
    project_name = models.CharField(max_length=255)
    project_description = models.CharField(max_length=1000)
    project_view_link = models.URLField(max_length=255)
    project_technology = models.ManyToManyField('Technologies')
    notes_reflection = models.TextField()

    def __str__(self):
        return self.project_name


class Blog(models.Model):
    blog_title = models.CharField(max_length=255)
    blog_create_date = models.DateField(auto_now_add=True)
    blog_time = models.TimeField(auto_now=True)
    blog_content = RichTextField()
    blog_preview = models.CharField(max_length=20)

    def __str__(self):
        return self.blog_title
