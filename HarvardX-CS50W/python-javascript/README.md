# [SQL - Lecture 3 - CS50's Web Programming with Python and JavaScript](https://www.youtube.com/watch?v=Eda-NmcE5mQ&list=PLhQjrBD2T382hIW-IsOVuXP1uMzEvmcE5&index=5)

##  Notes
   - DataTypes 
        * INTEGER
        * DECIMAL
        * SERIAL
        * VARCHAR
        * TIMESTAMP
        * BOOLEAN
        * ENUM
   - LOGIN CMD ` psql -U postgres postgres`
   - TO SHOW List of Relations `\d`
   - TO SHOW List of Roles `\du`
   - Constraints 
        * NOT NULL
        * UNIQUE
        * PRIMARY KEY 
        * DEFAULT  
        * CHECK 
        * ...
   - Functions 
        * SUM
        * COUNT
        * MIN 
        * MAX  
        * AVG
        * ... 
   - CREATE TABLE 
        * `CREATE TABLE flights(
            id SERIAL PRIMARY KEY,
            origin VARCHAR NOT NULL,
            destination VARCHAR NOT NULL,
            duration INTEGER NOT NULL 
        );` 
        
   - INSERT ROW
        * `INSERT INTO flights 
            (origin, destination, duration)
            VALUES ('New York', 'London', 415);`
            
   - SELECT 
        * `SELECT * FROM flights;` 
        * `SELECT origin, destination FROM flights;` 
        * `SELECT * FROM flights WHERE duration > 400;` 
        * `SELECT * FROM flights WHERE id = 3;` 
        * `SELECT AVG(duration) FROM flights;` 
        * `SELECT AVG(duration) FROM flights WHERE origin = 'New York';` 
        * `SELECT COUNT(*) FROM flights;` 
        * `SELECT COUNT(*) FROM flights WHERE origin = 'New York';` 
        * `SELECT MIN(duration) FROM flights;` 
        * `SELECT MAX(duration) FROM flights;` 
        * `SELECT * FROM flights WHERE origin IN ('New York', 'Lima');` 
        * `SELECT * FROM flights WHERE destination = 'Paris' AND duration > 500;` 
        * `SELECT * FROM flights WHERE destination = 'Paris' OR duration > 500;` 
        * `SELECT * FROM flights WHERE origin LIKE '%a%';` # contain a char  
        * `SELECT * FROM flights ORDER BY duration ASC LIMIT 3;`   
        * `SELECT * FROM flights ORDER BY duration DESC;`   
        * `SELECT origin, COUNT(*) FROM flights GROUP BY origin;`   
        * `SELECT origin, COUNT(*) FROM flights GROUP BY origin HAVING COUNT(*) > 1;`   
        
   - DELETE  
        * `DELETE FROM flights;` # Delete all rows 
        * `DELETE FROM flights WHERE id=0;` 
        
   - UPDATE
        * `UPDATE flights 
            SET duration = 430
            WHERE origin = 'New York'
            AND destination = 'London';` 
            
   
   - JOIN 
        * `SELECT origin, destination, name FROM flights JOIN passengers ON passengers.flight_id = flights.id;`   
        * `SELECT origin, destination, name FROM flights JOIN passengers ON passengers.flight_id = flights.id; WHERE name='Alice'`   
        * `SELECT origin, destination, name FROM flights INNER JOIN passengers ON passengers.flight_id = flights.id;`
        * `SELECT origin, destination, name FROM flights JOIN passengers ON passengers.flight_id = flights.id;`
        * `SELECT origin, destination, name FROM flights LEFT OUTER JOIN passengers ON passengers.flight_id = flights.id;`
        * `SELECT origin, destination, name FROM flights RIGHT OUTER JOIN passengers ON passengers.flight_id = flights.id;`
   
   - INDEXING 
        * Speed up the selection from table
        * `CREATE INDEX duration_index ON flights (duration);
`