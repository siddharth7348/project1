pip freeze > requirements.txt
http://0.0.0.0:8000
chmod +x ./entrypoint.sh
python manage.py runserver
docker compose up -d --build
docker-exec backend -it /bin/ash