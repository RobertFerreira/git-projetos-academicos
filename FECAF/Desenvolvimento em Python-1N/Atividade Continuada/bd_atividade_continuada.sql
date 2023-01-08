CREATE DATABASE bd_atividade_continuada;
DROP DATABASE bd_atividade_continuada;
USE bd_atividade_continuada;

-- TABELAS
CREATE TABLE tbl_autores (
id_autor INT PRIMARY KEY AUTO_INCREMENT,
nome_autor VARCHAR(50),
sobrenome_autor VARCHAR(60)
);

CREATE TABLE tbl_editoras (
id_editora INT PRIMARY KEY AUTO_INCREMENT,
nome_editora VARCHAR(50)
);

CREATE TABLE tbl_livros (
id_livro INT PRIMARY KEY AUTO_INCREMENT,
nome_livro VARCHAR (50) NOT NULL,
id_autor INT,
id_editora INT,
FOREIGN KEY(id_autor) REFERENCES tbl_autores(id_autor),
FOREIGN KEY(id_editora) REFERENCES tbl_editoras(id_editora)
);


-- INSERT
INSERT INTO tbl_autores (nome_autor, sobrenome_autor)
VALUES
('Daniel', 'Barret'),
('Gerald', 'Carter'),
('Mark', 'Sobell'),
('William', 'Stanek');

INSERT INTO tbl_editoras (nome_Editora)
VALUES
('Prentice Hall'),
('O´Reilly'),
('Microsoft Press'),
('Wiley');

INSERT INTO tbl_livros (nome_livro, id_autor, id_editora)
VALUES
('Linux Command Line and Shell Scripting',1,1),
('SSH, the Secure Shell',2,2),
('Using Samba',3,3),
('Fedora and Red Hat Linux',4,4);


-- Verificar se registros foram inseridos
SELECT * FROM tbl_livros;