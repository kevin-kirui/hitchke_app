from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, unique=True)
    # Add more fields as needed

class Ride(models.Model):
    driver = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='rides_offered')
    start_location = models.CharField(max_length=100)
    end_location = models.CharField(max_length=100)
    date_time = models.DateTimeField()

    def __str__(self):
        return f"Ride from {self.start_location} to {self.end_location} on {self.date_time}"

