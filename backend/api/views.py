import os
import json
from rest_framework import status
from rest_framework import viewsets
from contextlib import redirect_stdout
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Technologies, ProjectModel, Blog
from .serializers import TechnologySerializer, ProjectSerializer, BlogSerializer


class TechnologyViewset(viewsets.ModelViewSet):
    queryset = Technologies.objects.all()
    serializer_class = TechnologySerializer

    # Supporting multiple POSTs in the API
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data=request.data, many=isinstance(request.data, list))

        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class ProjectViewset(viewsets.ModelViewSet):
    queryset = ProjectModel.objects.all()
    serializer_class = ProjectSerializer

    # Supporting multiple POSTs in the API
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data=request.data, many=isinstance(request.data, list))

        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class BlogViewset(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    # Supporting multiple POSTs in the API
    def create(self, request):
        serializer = self.get_serializer(
            data=request.data, many=isinstance(request.data, list))

        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class ContactView(APIView):
    permission_classes = [AllowAny, ]

    def post(self, request):
        email = request.data['email']
        message = request.data['message']

        # Get the number of files in the emails directory for the sake of naming the
        # email files. The getcwd for this file points to .backend because of manage.py;s
        # location probably
        email_folder_path = os.path.join(os.getcwd(), 'emails')

        if not os.path.isdir(email_folder_path):
            os.mkdir('emails')

        number_of_files = len(os.listdir(email_folder_path))

        # Redirect the output of this function call to a file
        response_message = {}
        try:
            with open(f'emails/email_{number_of_files + 1}.txt', 'w') as email_file:
                with redirect_stdout(email_file):
                    send_mail(
                        subject='Message from MyWebsite',
                        message=message,
                        from_email=email,
                        recipient_list=['subhanga2015@gmail.com'],
                        fail_silently=False,
                    )

            response_message['message'] = 'Message successfully sent'

        except Exception as e:
            response_message['message'] = 'Something went wrong; the email couldn\'t be sent...'
            response_message['err'] = str(e)

            # Delete the email log file as it is empty (as there was an error)
            os.remove(f'emails/email_{number_of_files + 1}.txt')

        finally:
            return Response(json.dumps(response_message))
