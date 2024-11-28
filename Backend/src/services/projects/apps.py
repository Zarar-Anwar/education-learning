from django.apps import AppConfig


class CoreConfig(AppConfig):
    name = 'src.services.projects'
    verbose_name = 'Projects'
    verbose_plural = 'Projects'
    default_auto_config = 'django.db.models.BigAutoField'

    # def ready(self):
    #     import src.core.signals
