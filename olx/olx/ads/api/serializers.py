from rest_framework.serializers import ModelSerializer
from olx.ads.models import Ad

class AdSerializer(ModelSerializer):
    class Meta:
        model = Ad
        fields = (
            "id",
            "title",
            "description",
            "price",
            "make",
            "available",
            "created",

            "user",
            "seller",
            "seller_logo",
        )
        read_only_fields = ("created", "user",)
