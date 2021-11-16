CREATE TABLE pessoas(
    id int NOT NULL AUTOINCREMENT,
    nome varchar(20) NOT NULL,
    nascimento date 
);

INSERT INTO pessoas(nome, nascimento)
VALUES ("NATHALLY", "1990-05-22")