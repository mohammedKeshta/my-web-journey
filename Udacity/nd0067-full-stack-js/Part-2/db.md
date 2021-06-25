# DB

## General

- Remember you can get out of `pqsl` with `\q`
- Database names should use underscores
- Double quotes are used to indicate identifiers within the database, which are objects like tables, column names, and roles. In contrast, single quotes are used to indicate string literals.
- The Foreign Key is a column that relates each row to in the table to the primary key of another table
- Having a foreign key allows us to query for relationships between two tables of data
- **Migrations**
  - are a record of a change made to the schema of a database, with documented instructions to implement and rollback that change
  - contain instructions for how to enact and rollback a specific change to the database
  - using manage database schema changes in a project makes it easier to keep databases across various environment synced together.

## [SQL Cheat Sheet](https://dataschool.com/learn-sql/meta-commands-in-psql/)

- \l List databases
- \c Connect to a database
- \dt Display Tables in a database
- \q Quit out of psql to normal terminal

## Queries

```shell

CREATE DATABASE database_for_all_things

CREATE TABLE first_things (id SERIAL PRIMARY KEY, name VARCHAR(50), count integer);

```

## Commands in the course

```shell

create table plants (id SERIAL PRIMARY KEY, name varchar(100), description text, individuals integer, sighting_date date);

# CRUD

insert into plants (name, description, individuals, sighting_date) values ('Dandelion', 'Fuzzy yellow flowers', 5, '2021-01-01');

select * from plants;

update plants set individuals=8 where id=1;

delete from plants where id=1;

# filters

select * from plants where id=1;

select * from plants limit 5;

select * from plants where sighting_date between '2021-01-01' and '2021-01-31';

select count(*) from plants where sighting_date between '2021-01-01' and '2021-01-31';

select name, description from plants where name like '%lion%';

select name, id from plants where sighting_date is null;

select name, id from plants where individuals is not null;

# foreign keys 

create table regions ( id SERIAL PRIMARY KEY, name VARCHAR);
create table users ( id SERIAL PRIMARY KEY, name VARCHAR, email VARCHAR);

alter table plants add column region_id integer;
alter table plants add foreign key (region_id) references regions(id);

create table animals ( id SERIAL PRIMARY KEY, individuals integer, sighting_date date, description text, region_id integer, user_id integer);
alter table animals add foreign key (region_id) references regions(id);
alter table animals add foreign key (user_id) references users(id);


```
