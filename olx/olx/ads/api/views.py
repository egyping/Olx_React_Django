from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView, RetrieveAPIView
from olx.ads.models import Ad
from .serializers import AdSerializer
# axios
from rest_framework.permissions import IsAuthenticated, AllowAny

class AdListView(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = AdSerializer

    def get_queryset(self):
        # return Ad.objects.all()
        return Ad.objects.filter(available=True)


class AdCreateView(CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = AdSerializer

    # User <> Ad
    # perform_create is a method from the CreateAPIView>Mixin which we can ovveride 
    # while saving take the user 
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class AdUpdateView(UpdateAPIView):
    permission_classes = [AllowAny]
    serializer_class = AdSerializer

    def get_queryset(self):
        return Ad.objects.filter(available=True)


class AdDeleteView(DestroyAPIView):
    # we don't need serializer as its just delete with no response 
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Ad.objects.all()


class AdDetailView(RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = AdSerializer

    def get_queryset(self):
        return Ad.objects.all()