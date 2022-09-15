USE `hooks-4313334-giovanna-julio`;

SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Projects(
	id VARCHAR(3) NOT NULL UNIQUE PRIMARY KEY, 
    name VARCHAR(30) NOT NULL UNIQUE, 
    title VARCHAR(30) NOT NULL,
    date DATE NOT NULL
);

INSERT INTO Projects (id, name, title, date)
VALUES ("001", "LabeSky", "LSy", "2023-10-05"), ("002", "Labefy", "LFy", "2024-01-06"), ("003", "AstroZoom", "AZm", "2022-12-20");

ALTER TABLE Projects
DROP COLUMN title;

DESC Projects;

ALTER TABLE Projects
CHANGE date dueDate DATE NOT NULL;

DESC Projects;

ALTER TABLE Projects
ADD description TEXT NOT NULL;

DESC Projects;

UPDATE Projects
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = 1;

UPDATE Projects
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = 2;

UPDATE Projects
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = 3;

DESC Projects;

SELECT * FROM Projects
ORDER BY dueDate DESC;

SELECT name, dueDate FROM Projects
ORDER BY dueDate DESC
LIMIT 2;
