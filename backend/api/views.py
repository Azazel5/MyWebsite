import os
import redis
from django.conf import settings
from rest_framework import status
from rest_framework import viewsets
from contextlib import redirect_stdout
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Technologies, ProjectModel, Blog
from .serializers import TechnologySerializer, ProjectSerializer, BlogSerializer

# Instantiate a Redis instance
redis_instance = redis.StrictRedis(
    host=settings.REDIS_HOST,
    port=settings.REDIS_PORT, db=0
)


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
        # Get the request's IP address from the POST request
        ip_address = request.META['HTTP_ORIGIN']

        # Check if the ip_hash object contains the requesting IP address. If yes and
        # the number is less than 5, increase the number of requests from the IP. Else
        # return a Response with a message and don't go through the email processing.
        # If there's no such IP address in the ip_hash object, create one.
        if redis_instance.hexists("ip_hash", ip_address):
            if int(redis_instance.hget("ip_hash", ip_address)) < 5:
                redis_instance.hincrby("ip_hash", ip_address, 1)
            else:
                return Response(
                    {
                        'message': f'Email limit exceeded for today! Please try again tomorrow.'
                    }
                )
        else:
            redis_instance.hset("ip_hash", ip_address, 1)

            # Expires everyday
            redis_instance.expire("ip_hash", 86400)

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
            return Response(response_message)
