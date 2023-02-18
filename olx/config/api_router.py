from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

# M
from django.urls import path
# M
from olx.ads.api.views import AdListView, AdCreateView, AdUpdateView, AdDeleteView, AdDetailView

from olx.users.api.views import UserViewSet



if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)

app_name = "api"

urlpatterns = [
    path("ads/", AdListView.as_view()),
    path("create-ad/", AdCreateView.as_view()),
    path("ads/<pk>/update", AdUpdateView.as_view()),
    path("ads/<pk>/", AdDetailView.as_view()),
    path("ads/<pk>/delete/", AdDeleteView.as_view()),
]
urlpatterns += router.urls