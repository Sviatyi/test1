from django.db import models
from rest_framework.response import Response

# Create your models here.


class UserManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()

    def all(self):
        return self.get_queryset()


class User(models.Model):

    username = models.CharField(max_length=40)
    created = models.DateField()
    group = models.ForeignKey("Group", on_delete=models.CASCADE, null=True)
    is_admin = models.BooleanField(default=False)
    objects = UserManager()

    def __str__(self):
        return f"{self.username} {self.created} {self.group} {self.is_admin}"


class GroupManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()

    def all(self):
        return self.get_queryset()


class Group(models.Model):

    name = models.CharField(max_length=40)
    description = models.CharField(max_length=255)
    objects = GroupManager()

    def delete(self, using=None, keep_parents=True):
        if len(User.objects.all().filter(group=self.id)) > 0:
            return Response().status_code(403)
        return super().delete(keep_parents=keep_parents)

