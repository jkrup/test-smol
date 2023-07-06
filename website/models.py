```python
from django.db import models

class Pixel(models.Model):
    x_coordinate = models.IntegerField()
    y_coordinate = models.IntegerField()
    color = models.CharField(max_length=7)
    owner = models.ForeignKey('User', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f'Pixel ({self.x_coordinate}, {self.y_coordinate})'

class User(models.Model):
    owned_pixels = models.ManyToManyField(Pixel)

    def __str__(self):
        return f'User {self.id}'
```