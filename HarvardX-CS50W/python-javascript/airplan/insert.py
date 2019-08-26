import csv

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session

engine = create_engine("postgres://postgres:m3l2o18#@localhost:5432")
db = scoped_session(sessionmaker(bind=engine))


def insert_flights():
    flights_file = open("data/flights.csv")
    reader = csv.reader(flights_file)
    for origin, destination, duration in reader:
        db.execute("INSERT INTO flights (origin, destination, duration) VALUES (:origin, :destination, :duration)",
                   {"origin": origin, "destination": destination, "duration": duration})
    db.commit()


def insert_passengers():
    passengers_file = open("data/passengers.csv")
    reader = csv.reader(passengers_file)
    for name, flight_id in reader:
        db.execute("INSERT INTO passengers (name, flight_id) VALUES (:name, :flight_id)",
                   {"name": name, "flight_id": flight_id})
    db.commit()


def main():
    # insert_flights()
    insert_passengers()


if __name__ == '__main__':
    main()
