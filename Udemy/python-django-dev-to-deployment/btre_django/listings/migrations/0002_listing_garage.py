# Generated by Django 3.1.2 on 2020-10-30 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='garage',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=2),
        ),
    ]