from django.db import models
from olx.users.models import User

class Ad(models.Model):

    GERMAN = 'GER'
    JAPAN = 'JPN'
    AMERICAN = 'USA'
    make_choices = [
        (GERMAN, 'German'),
        (JAPAN, 'Japan'),
        (AMERICAN, 'USA'),
    ]

    title = models.CharField(max_length=50)
    description = models.TextField(max_length=500, blank=True, null=True)
    price = models.PositiveIntegerField(blank=True, null=True)
    make = models.CharField(
        max_length=3,
        choices=make_choices,
        default=GERMAN,
        blank=True, null=True
    )
    created = models.DateTimeField(auto_now_add=True)

    available = models.BooleanField(default=True, blank=True, null=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="ads", blank=True, null=True)
    seller = models.CharField(max_length=50, blank=True, null=True)
    seller_logo = models.ImageField(blank=True, null=True)
    

    def __str__(self):
        return self.title
    