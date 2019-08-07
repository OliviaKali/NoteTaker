DROP DATABASE IF EXISTS ie2ndyyfnfno7vmj;
CREATE DATABASE ie2ndyyfnfno7vmj;

USE ie2ndyyfnfno7vmj;

CREATE TABLE notes (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  --  created_at DATETIME default NOW(), if you want timestamps uncomment this line.
  PRIMARY KEY (id)
);