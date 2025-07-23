#!/bin/ash

echo "create project schema"

python manage.py migrate

exec "$@"