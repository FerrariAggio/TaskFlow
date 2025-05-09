-- init.sql

-- Criar extensão para suportar UUIDs, se ainda não estiver ativada
CREATE TABLE AppUser (
  id serial PRIMARY KEY,
  name varchar(50),
  surname varchar(150),
  email varchar(250),
  password varchar(50)
);

CREATE TABLE Task (
  id serial PRIMARY KEY,
  title varchar(100) NOT NULL,
  description varchar(450),
  user_id integer NOT NULL,
  status_id integer NOT NULL,
  priority_id integer NOT NULL,
  category_id integer NOT NULL,
  conclusion_date timestamp
);

CREATE TABLE Status (
  id serial PRIMARY KEY,
  name varchar(100)
);

CREATE TABLE Priority (
  id serial PRIMARY KEY,
  name varchar(100)
);

CREATE TABLE Category (
  id serial PRIMARY KEY,
  name varchar(100)
);

ALTER TABLE Task ADD FOREIGN KEY (user_id) REFERENCES AppUser (id);

ALTER TABLE Task ADD FOREIGN KEY (status_id) REFERENCES Status (id);

ALTER TABLE Task ADD FOREIGN KEY (priority_id) REFERENCES Priority (id);

ALTER TABLE Task ADD FOREIGN KEY (category_id) REFERENCES Category (id);

INSERT INTO AppUser values(default, 'Lorenzo', 'Aggio', 'lorenzo.aggio@teste.com', '123456');
