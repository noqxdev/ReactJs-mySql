# ReactJs - MySQL

<a href="https://react.dev/">
<img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width=50>
</a>
<a href="https://vite.dev/">
<img src="https://www.svgrepo.com/show/374167/vite.svg" width=50>
</a>
<a href="https://www.mysql.com/">
<img src="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg" width=70>
</a>
<a href="https://nodejs.org/en">
<img src="https://raw.githubusercontent.com/benc-uk/icon-collection/e33ee714d05a24a81cf6ccd967ef34b22cb77e65/logos/nodejs-3.svg" width=50>
</a>

---

<img src="https://i.ibb.co/S4NSYZhL/image.png">

> [Download XAMPP](https://www.apachefriends.org/)

> [phpadmin](http://localhost/phpmyadmin/)

---

### MySQL Script

```
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
/*
DROP TABLE users;

use master
*/
```

---
