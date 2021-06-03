BEGIN;

DROP TABLE IF EXISTS users, languages, connections, sessions CASCADE;

CREATE TABLE users (
  id int PRIMARY KEY,
  name text,
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  password VARCHAR ( 255 ) NOT NULL,
  gender varchar,
  email_verified boolean,
  image text,
  created_at timestamp,
  updated_at timestamp
);

CREATE TABLE languages (
  user_id int,
  language text,
  proficiency text
);

CREATE TABLE connections (
  user_id int,
  woman boolean,
  man boolean,
  non_binary boolean,
  anyone boolean
);

INSERT INTO users (id, name, email, password, gender, email_verified, image, created_at, updated_at) VALUES
  (1, 'Maryam', 'mg5640041@gmail.com', 'me2293403', 'female', 'true', '', (SELECT CURRENT_TIMESTAMP), (SELECT CURRENT_TIMESTAMP));



INSERT INTO languages (language, proficiency) VALUES
('Arabic', 'Social');


INSERT INTO connections (woman, man, non_binary, anyone) VALUES
('true', 'false', 'false', 'false');


DROP TABLE IF EXISTS sessions CASCADE;

CREATE TABLE sessions (
  sid TEXT PRIMARY KEY,
  data JSON NOT NULL
);

ALTER TABLE "languages" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "connections" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

COMMIT;
