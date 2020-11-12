from app import db


# Create TodoModel
class Todo(db.Model):
    __tablename__ = 'todos'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(), nullable=False)
    completed = db.Column(db.Boolean(), nullable=False, default=False)

    def __repr__(self):
        return 'Todo {}: {}'.format(self.id, self.description)
