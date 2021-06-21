---
title: 'Database navigation'
date: '6-21-21'
class: 'CSP'
section: 2
---

Definition: Managed by a database engine, a database is a collection of organized information stored in a system.
Purpose: allows users' fast and secure access to data to gain insight. 
* Example: you can create a login system with input forms in the html and database for backend, databases can sort and filter user data. 

## CRUD 
Create, Read, Update and Delete are the operations that can be performed with most database systems and they are the mainstay for interacting with database.
* Create: Add data to database
* Read: View data in database 
* Update: Edit data and save the updated version
* Delete: Delete data from database

## CRUD commands examples
* Create data:
  - INSERT commands
  - INSERT INTO table VALUES(‘column_1_data’, ‘column_2_data’)
* Update data:
  - UPDATE table SET column2=’value’ WHERE column1=’value’
    - must use WHERE command, or else all values in that column will be reset
* Delete data: 
  - DELETE FROM table = delete all data
  - DELETE FROM table WHERE column1=’value’
* Read data: 
  - SELECT * FROM table = get all columns + values
  - SELECT * FROM table WHERE column1=’value’
