#pip3 install flask_sqlalchemy
#pip3 install flask_cors
#pip3 install flask --upgrade
#pip3 uninstall flask-socketio -y
#service postgresql start
su - postgres bash -c "psql < /Users/mohammdelzanaty/Desktop/me/my-web-journey/Udacity/nd001-mena-nfp3/Ch-03/trivia
/backend/setup.sql"
su - postgres bash -c "psql bookshelf < /Users/mohammdelzanaty/Desktop/me/my-web-journey/Udacity/nd001-mena-nfp3/Ch-03/trivia
/backend/books.psql"