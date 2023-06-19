from django.db import models

# Create your models here.
class Client(models.Model):
    name = models.CharField(max_length=100)
    id_number = models.CharField(max_length=20)
    email = models.EmailField()
    birthday = models.DateField()
    creation_date = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)