BEGIN;

DROP TABLE IF EXISTS users, languages, connections, sessions CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
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
  user_id int REFERENCES users (id),
  language text,
  proficiency text
);

CREATE TABLE connections (
  user_id int REFERENCES users (id),
  woman boolean,
  man boolean,
  non_binary boolean,
  anyone boolean
);



CREATE TABLE sessions (
  sid TEXT PRIMARY KEY,
  data JSON NOT NULL
)

INSERT INTO users (name, email, password, gender, email_verified, image, created_at, updated_at) VALUES 
('Amy', 'LamyKunah@live.com', 'Iamanidiot', 'female', 'true', '', (SELECT CURRENT_TIMESTAMP), (SELECT CURRENT_TIMESTAMP) ), 
 ('Crag', 'Cragalag@live.com', 'Iamthebest', 'non_binary', 'true', '', (SELECT CURRENT_TIMESTAMP), (SELECT CURRENT_TIMESTAMP)), 
 ('Maryam', 'mg5640041@gmail.com', 'me2293403', 'female', 'true', '', (SELECT CURRENT_TIMESTAMP), (SELECT CURRENT_TIMESTAMP));


INSERT INTO languages (user_id, language, proficiency) VALUES (1, 'spanish', 'fluent'), (1, 'french', 'beginner'), (1, 'english', 'native');
(3, 'arabic', 'social');

INSERT INTO connections (user_id, woman, man, non_binary, anyone) VALUES (1, 'true', 'false', 'true', 'false')
(3, 'true', 'false', 'false', 'false');

ALTER TABLE languages ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE connections ADD FOREIGN KEY (user_id) REFERENCES users (id);

COMMIT;
