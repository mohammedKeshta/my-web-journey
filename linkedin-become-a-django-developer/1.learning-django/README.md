## [ Learning Django](https://www.linkedin.com/learning/learning-django/welcome)


## Creating A project 
   - First Way 
       * You can create an isolated environment for each new Django project. `pip install virtualenvwrapper`
       * Create a virtual environment for a project `mkvirtualenv WEBSITE_NAME`
       * To activate the environment WEBSITE_NAME we have to run `workon WEBSITE_NAME`
       * Install Django `pip install django`
       * Check the django version by executing `python -m django --version`
       
   - Create an environment
       1. `mkdir WEBSITE_NAME`
       2. `cd WEBSITE_NAME`
       3. `py -3 -m venv venv`
    - Activate the environment
       4. `venv\Scripts\activate`
    - Install Django 
       // Within the activated environment, use the following command to install Flask:
       5. `pip install Django` 
       6. `django-admin startproject WEBSITE_NAME` 
    - Run Project 
       7. `cd WEBSITE_NAME`
       8. `python manage.py runserver`
       9. `python manage.py startapp APP_NAME`
    
   - Migrations Commands 
       1. `python manage.py makemigrations`
       2. `python manage.py migrate`
       *. `python manage.py showmigrations`
