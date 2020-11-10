from flask import Flask, render_template, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import sys

# Create App instanace
app = Flask(__name__)
# DB Congig
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://mohammdelzanaty@localhost:5432/todoapp'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Connect to db
db = SQLAlchemy(app)
# Migrate
migrate = Migrate(app, db)


# Create Todo Model`
class Todo(db.Model):
    __tablename__ = 'todos'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(), nullable=False)

    def __repr__(self):
        return 'Todo {}: {}'.format(self.id, self.description)


db.create_all()

if not len(Todo.query.all()):
    todo1 = Todo(description='Do Thing 1')
    todo2 = Todo(description='Do Thing 2')
    todo3 = Todo(description='Do Thing 3')
    todo4 = Todo(description='Do Thing 4')
    todo5 = Todo(description='Do Thing 5')
    todo6 = Todo(description='Do Thing 6')

    db.session.add_all([todo1, todo2, todo3, todo4, todo5, todo6])
    db.session.commit()


@app.route('/todos/delete', methods=['DELTEE'])
def delete():
    description = request.get_json()['description']
    todo = Todo.query.filter_by(description=description)
    todo.session.delete()
    todo.commit()
    return jsonify({'todo with description: {} deleted'.format(description)})


@app.route('/todos/create', methods=['POST'])
def create():
    body = {}
    error = False
    try:
        # get new todo
        description = request.get_json()['description']
        todo = Todo(description=description)
        db.session.add(todo)
        db.session.commit()
        body['description'] = todo.description
    except Exception as inst:
        print(type(inst))
        print(inst)
        db.session.rollback()
        error = True
        print(sys.exc_info())
    finally:
        db.session.close()
    if error:
        abort(400)
    else:
        return jsonify(body)


@app.route('/')
def index():
    todos = Todo.query.all()
    return render_template('index.html', data=todos)


if __name__ == '__main__':
    app.run(debug=True)
