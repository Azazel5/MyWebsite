from django.views.generic.base import TemplateView


class ServeView(TemplateView):
    template_name = 'index.html'
