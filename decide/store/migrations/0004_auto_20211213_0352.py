# Generated by Django 2.2.5 on 2021-12-13 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_auto_20211212_2029'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vote',
            name='type',
            field=models.CharField(choices=[('V', 'Voting'), ('BV', 'BinaryVoting'), ('MV', 'MultipleVoting'), ('SV', 'ScoreVoting')], max_length=2),
        ),
    ]
