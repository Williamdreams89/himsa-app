from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate


class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['email', 'first_name', 'last_name', 'password']
        extra_kwargs = {'password': {'write_only': True}}


    def create(self, validated_data):
        return get_user_model().objects.create_user(**validated_data)

class UserSignInSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self,data):
        import pdb
        user = authenticate(**data)
        if user and user.is_active:
            return user 
        return serializers.ValidationError('Invalid login credentials!')


class RequestPasswordResetSerializer(serializers.Serializer):
    email = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get('email')

        return super().validate(attrs)


class SetNewPasswordSerializer(serializers.ModelSerializer):
    class Meta: 
        model = get_user_model()
        fields = ['password']


class VerifyEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['is_verified']