from django.core.mail import EmailMessage
from decouple import config

class Utils:
    @staticmethod
    def send_email(payload):
        email = EmailMessage(subject=payload['EMAIL_SUBJECT'], body=payload['EMAIL_BODY'], from_email=config('EMAIL_FROM'), to=(payload['EMAIL_TO'],))
        email.send(fail_silently=True)
        
    