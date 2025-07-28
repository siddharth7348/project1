from django.db import models
from django.contrib.auth.models import User
from django.dispatch.dispatcher import receiver
from django.db.models.signals import post_save

class Product(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    image = models.ImageField(null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    brand = models.CharField(max_length=200, blank=True)
    category = models.CharField(max_length=200, blank=True)
    countInStock = models.IntegerField(null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    _id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Profile(models.Model):
    user_profile = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    user_image = models.ImageField(null=True, blank=True)
    delivery_address = models.TextField(blank=True, null=True)
    delivery_zip = models.IntegerField(null=True, blank=True)
    contact = models.CharField(max_length=12, blank=True)


@receiver(post_save, sender=User)
def create_user_profile(created, instance, *args, **kwargs):
    if created:
        Profile.objects.create(user_profile=instance)


@receiver(post_save, sender=User)
def save_user_profile(created, instance, *args, **kwargs):
    instance.profile.save()


# Create your models here.
