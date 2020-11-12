from app import db


# Create TodoList
class TodoList(db.Model):
    __tablename__ = 'todolists'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=True)
    todos = db.relationship('todo', backref='list', lazy=True)

    def __repr__(self):
        return 'Todo list {}: {}'.format(self.id, self.name)


# Create TodoModel
class Todo(db.Model):
    __tablename__ = 'todos'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(), nullable=False)
    completed = db.Column(db.Boolean(), nullable=False, default=False)
    list_id = db.Column(db.Integer, db.ForeignKey('todolists.id'), nullable=False)

    def __repr__(self):
        return 'Todo {}: {}'.format(self.id, self.description)
