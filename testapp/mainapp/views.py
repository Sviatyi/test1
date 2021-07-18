from django.shortcuts import render
from .models import User, Group
from .serializer import UserSerializer, GroupSerializer, UserRetrieveSerializer
from rest_framework import viewsets

# Create your views here.


def index(request):
    return render(request, "index.html", {})


class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer
    action_to_serializer = {
        "list": UserRetrieveSerializer,
        "retrieve": UserRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class GroupViewSet(viewsets.ModelViewSet):

    queryset = Group.objects.all()
    serializer_class = GroupSerializer






