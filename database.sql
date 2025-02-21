USE master;

DROP DATABASE IF EXISTS reactmysql;
CREATE DATABASE reactmysql;
USE reactmysql;
GO

CREATE TABLE users (
     id INT PRIMARY KEY,
     username VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL
);
go

INSERT INTO users(id, username, email)
VALUES (1, 'React', 'React@domain.com');
go

INSERT INTO users(id, username, email)
VALUES (2, 'Vite', 'Vite@domain.com');
go

INSERT INTO users(id, username, email)
VALUES (3, 'MySQL', 'MySQL@domain.com');
go


SELECT * FROM users;

DROP TABLE users;

use master
