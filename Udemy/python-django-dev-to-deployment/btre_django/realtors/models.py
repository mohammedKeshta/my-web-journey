from django.db import models
from django.utils import timezone


class Realtor(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to="photos/%Y/%m/%d/")
    description = models.TextField(blank=True)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    is_mvp = models.BooleanField(default=False)
    hire_date = models.DateTimeField(timezone.now, blank=True)

    def __str__(self):
        return self.name


# id: INT
# name: STR
# photo: STR
# description: TEXT
# email: STR
# phone: STR
# is_mvp: BOOL [0]
# hire_date: DATE
