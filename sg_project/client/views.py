from django.shortcuts import render
from django.views import generic

from garden.models import Field, Topic



class HomeView(generic.TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "Home"
        return context


class FieldView(generic.DetailView):
    template_name = "field.html"
    model = Field

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "Field"
        return context


class TopicView(generic.DetailView):
    template_name = "topic.html"
    model = Topic

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "Topic"
        return context