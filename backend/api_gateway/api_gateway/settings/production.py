from .base import *
import environ
from redis import ConnectionPool

env = environ.Env()
env.read_env(os.path.join(BASE_DIR, 'env/.env.production'))

DEBUG = True

REDIS_CONNECTION_POOL = ConnectionPool(
    host=env('REDIS_HOST'), port=env('REDIS_PORT'), db=0)

# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': env('MYSQL_DB_NAME'),
        'USER': env('MYSQL_DB_USER'),
        'PASSWORD': env('MYSQL_DB_PW'),
        'HOST': env('MYSQL_DB_HOST'),
        'PORT': env('MYSQL_DB_PORT'),
    }
}

ALLOWED_HOSTS = ['127.0.0.1', 'localhost', '40.82.152.153']