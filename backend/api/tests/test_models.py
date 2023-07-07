from django.test import TestCase
from django.contrib.auth import get_user_model



class UserModelTests(TestCase):
    """The test for our models for this projects goes here"""

    def testing_create_new_user_with_email_successful(self):
        """Testing creating user with email successful"""
        first_name = "William"
        last_name = "example"
        email = "william@example.com"
        password = "password"
        user = get_user_model().objects.create_user(email=email, password=password, first_name=first_name, last_name=last_name)

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))


    def testing_user_has_index_number(self):
        """Test should fail because user doesn't have index number"""

        first_name = 'william'
        last_name = 'example'
        email = 'william@example.com'
        password = 'password'
        index_number = 'password'
        user = get_user_model().objects.create_user(email=email, password=password, first_name=first_name, last_name=last_name, index_number=index_number)

        self.assertTrue(user.has_index_number)

    def testing_if_user_is_not_verified_the_first_time(self):
        """Testing for user verification post registration"""
        first_name = 'william'
        last_name = 'example'
        email = 'william@example.com'
        password = 'password'
        index_number = 'password'
        user = get_user_model().objects.create_user(email=email, password=password, first_name=first_name, last_name=last_name, index_number=index_number)

        
        self.assertFalse(user.user_is_verified)


    def testing_new_user_registration_without_email_raises_error(self):
        """Testing new user registration without email raises an error"""
        with self.assertRaises(ValueError):
            user = get_user_model().objects.create_user(email='', password='password', first_name='first_name', last_name='last_name')