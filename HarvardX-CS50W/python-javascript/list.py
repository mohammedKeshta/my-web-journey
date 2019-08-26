from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

engine = create_engine('heroku pg:psql postgresql-tetrahedral-36991 --app read-guid-css50w')
# Create Global Session
db = scoped_session(sessionmaker(bind=engine))


def main():
    flights = db.execute("SELECT origin, destination, duration FROM flights")
    for flight in flights:
        print(f"{flight.origin} to {flight.destination}, {flight.duration} minutes.")


if __name__ == "__main__":
    main()
