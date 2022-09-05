CREATE TABLE Employees(
	id VARCHAR(3) NOT NULL UNIQUE PRIMARY KEY, 
    nome TEXT NOT NULL, 
    email TEXT NOT NULL 
);

INSERT INTO Employees (id, nome, email)
VALUES ("001", "Luana", "lua@lbn.com"), ("002", "Vinicius", "vini@lbn.com"), ("003", "Laura", "lau@lbn.com");

SELECT * FROM Employees;

SELECT id as identifier, nome FROM Employees;

SELECT * FROM Employees
WHERE id="003";

SELECT * FROM Employees
WHERE nome LIKE "%a%";

SELECT * FROM Employees
WHERE email LIKE "%u%" AND NOT nome="%r%";

INSERT INTO Employees (id, nome, email)
VALUES ("004", "Yuzo", "yuzo@lbn.com");

DELETE FROM Employees
WHERE id = "004"



