from django.contrib import admin
from django.contrib.auth import get_user_model
class UserAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'email',
        'first_name', 
        'last_name', 
        'date_joined', 
        'is_superuser', 
        'is_verified'
    ]
admin.site.register(get_user_model(), UserAdmin)