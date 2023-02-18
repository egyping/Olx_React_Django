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
    description = models.TextField(max_length=500)
    price = models.PositiveIntegerField()
    make = models.CharField(
        max_length=3,
        choices=make_choices,
        default=GERMAN,
    )
    created = models.DateTimeField(auto_now_add=True)

    available = models.BooleanField(default=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="ads")
    seller = models.CharField(max_length=50)
    seller_logo = models.ImageField(blank=True, null=True)
    

    def __str__(self):
        return self.title
    