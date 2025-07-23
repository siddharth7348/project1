from celery import Celery
import os

app = Celery("backend")

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

app.config_from_object("django.conf:settings", namespace="CELERY")

@app.task(bind=True)
def debug_task(self):
    print("autodiscover task", self)

app.autodiscover_tasks()

