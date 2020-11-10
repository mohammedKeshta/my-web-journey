from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Create Instance Flask App
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://mohammdelzanaty@localhost:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


# Create Person Model
class Person(db.Model):
    __tablename__ = 'persons'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)

    def __repr__(self):
        return f'Person ID: {self.id} and name: {self.name}'


# Create Models
db.create_all()

# Clean DB
persons = Person.query
persons.delete()

persons_names = ['Rahim', 'Mohammed', 'rahim', 'Yasmeen']

# Insert Data
for person_name in persons_names:
    person = Person(name=person_name)
    db.session.add(person)

db.session.commit()


# Insert More than Object
person2 = Person(name="Farah")
person3 = Person(name="Eiad")
db.session.add_all([person2, person3])
db.session.commit()

# Get All Data
persons = Person.query.limit(10).all()
for person in persons:
    print(person.name)

# Count of persons
count = Person.query.count()
print(f"Persons Count : {count}")


# Get Number of person with name Rahim
rahims = Person.query.filter_by(name="Rahim").all()
print(f'Rahims With Capital R Count: {len(rahims)}')

# Get Count of Persons with name Rahim Case sensitive
rahim_count = Person.query.filter(Person.name.like('%r%')).count()
print(f'Rahim Count Like : {rahim_count}')

# Get Count of Persons with name Rahim Case sensitive
rahim_count_sensitive = Person.query.filter(Person.name.ilike('%r%')).count()
print(f'Rahim sensitive Count ILike : {rahim_count}')


@app.route('/')
def index():
    person = Person.query.first()
    return 'Hello {}!'.format(person.name)


if __name__ == "__main__":
    app.run()
