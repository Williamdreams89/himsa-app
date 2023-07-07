from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    """Redefining the base user manager class"""

    def create_user(self, email, first_name, last_name, password=None, **extra_kwargs):
        """The create new user utility function"""
        if not email:
            raise ValueError("User email must not be blank!")
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name, **extra_kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user 


    def create_superuser(self, email, first_name, last_name, password, **extra_kwargs):
        """Creating the super user cli function"""
        user = self.create_user(email, first_name, last_name, password, **extra_kwargs)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user 