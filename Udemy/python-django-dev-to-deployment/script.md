## Create Virtual Environment

    - python3 -m venv VENV_NAME

## Activate The Virtual Environment

    - source venv/bin/activate

## To double check packages

    - python --version

## To Leave venv

    - deactivate

## To install django

    - pip3 install django

## Django

    - [for help]
        - django-admin help
    - [to create django project]
        - django-admin startproject btre .
    - [for manage.py help]
        - python manage.py help
    - [to run server]
        - python manage.py runserver
    - [to create app]
        - python manage.py startapp pages
    - Remember the three-step guide to making model changes:
        - Change your models (in models.py).
        - Run python manage.py makemigrations to create migrations for those changes
        - Run python manage.py migrate to apply those changes to the database.
