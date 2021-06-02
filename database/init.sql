BEGIN;

DROP TABLE IF EXISTS users, languages, connections, sessions CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name text,
  email varchar UNIQUE,
  password varchar,
  gender varchar
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
  sid text,
  data json
);

INSERT INTO users (name, email, password, gender) VALUES ('Amy', 'LamyKunah@live.com', 'Iamanidiot', 'female');
INSERT INTO users (name, email, password, gender) VALUES ('Crag', 'Cragalag@live.com', 'Iamthebest', 'non_binary');

INSERT INTO languages (user_id, language, proficiency) VALUES (1, 'spanish', 'fluent'), (1, 'french', 'beginner'), (1, 'english', 'native');

INSERT INTO connections (user_id, woman, man, non_binary, anyone) VALUES (1, true, false, true, false);

ALTER TABLE languages ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE connections ADD FOREIGN KEY (user_id) REFERENCES users (id);

COMMIT;
