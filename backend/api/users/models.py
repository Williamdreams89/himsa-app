from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    index_number = models.CharField(max_length=14)
    is_verified = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateField(auto_now_add=True)

    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']


    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

    @property
    def username(self):
        return self.last_name

    @property
    def has_index_number(self):
        if self.index_number:
            return True
        return False

    @property
    def is_a_valid_him_student(self):
        pass

    @property
    def user_is_verified(self):
        if self.is_verified:
            return True
        return False


    class Meta:
        ordering = ["-date_joined"]