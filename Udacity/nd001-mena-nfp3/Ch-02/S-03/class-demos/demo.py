import psycopg2


def create_tables():
    """ create tables in the PostgreSQL database"""
    commands = (
        """
        DROP TABLE IF EXISTS todos;
        """,
        """
        CREATE TABLE todos (
            id serial PRIMARY KEY,
            description VARCHAR NOT NULL
        );
        """,
        """
        INSERT INTO todos (description) 
        VALUES 
            ('Todo 1'),
            ('Todo 2'),
            ('Todo 3'),
            ('Todo 4');
        """,
        """
        SELECT * FROM todos;
        """
    )
    connection = None
    try:
        # connect to the PostgreSQL server
        connection = psycopg2.connect(dbname="postgres")
        # Open a cursor to perform database operations
        cursor = connection.cursor()
        # create table one by one
        for command in commands:
            cursor.execute(command)

            # fetch data
            todos = cursor.fetchall()
            print(todos)
            # close communication with the PostgreSQL database server
            cursor.close()
            # commit the changes
            connection.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if connection is not None:
            connection.close()


if __name__ == '__main__':
    create_tables()
