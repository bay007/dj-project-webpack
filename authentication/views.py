from django.shortcuts import render
# Create your views here.
from django.views.generic import TemplateView
from django.contrib.auth.views import LoginView


class LoginTemplate(LoginView):
    template_name = "login.html"
    redirect_authenticated_user = True
