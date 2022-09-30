USE `hooks-4313334-giovanna-julio`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

-- Chave estrangeira: chave que faz referênciao aos dados de outra tabela.

INSERT INTO Movie (id, name) VALUES ("Tit1", "Enemy"), ("Tit2", "1408"), ("Tit3", "Dune");

INSERT INTO Rating (id, comment, rate, movie_id) VALUES 
	("1", "Intriguing.", 9, "Tit1"), 
	("2", "Director's cut ending suits it better.", 7, "Tit2"), 
	("3", "So many emotions", 8, "Tit3");
    
INSERT INTO Rating (id, comment, rate, movie_id) VALUES 
	("4", "?", 0, "Tit4");
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.
-- A Foreing Key não encontrou match na tabela Movie, impedindo a adição no Rating.

ALTER TABLE Rating DROP rate;
DESC Rating;

DELETE FROM Movie
WHERE id = "Tit1";
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails.
-- Não é possível deletar ou alterar um objeto atrelado como pai à uma Foreign Key, isso criaria uma falha na outra tabela automaticamente, fugindo do controle do MySQL e dev.

CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
-- A tabela MovieCast unifica as tabelas Actor e Movie.

INSERT INTO Actor (id, name) VALUES 
	("A1", "Jake Gylenhaal"), 
    ("A2", "John Cusack"), 
    ("A3", "Samuel L Jackson");

INSERT INTO MovieCast (movie_id, actor_id) VALUES
	("Tit1", "A1"),
    ("Tit1", "A2"),
    ("Tit2", "A3"),
    ("Tit2", "A1"),
    ("Tit3", "A2"),
    ("Tit3", "A3");
    
INSERT INTO MovieCast (movie_id, actor_id) VALUES
	("Tit1", "A4");
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails. 
-- Não é possivel adicionar ou fazer o update da tabela mãe pela inclusão de um dado na tabela filha, 
-- a invenção dessa chave gera uma falha.

DELETE FROM Actor
WHERE id = "A1";
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails.
-- Não é possível deletar ou alterar um objeto atrelado como pai à uma Foreign Key, isso criaria uma falha na outra tabela automaticamente, fugindo do controle do MySQL e dev.

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
-- O operador ON nos permite indicar por quais colunas queremos exibir a junção das tabelas.

SELECT name, comment FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;


