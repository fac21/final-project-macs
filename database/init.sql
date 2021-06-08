BEGIN;

DROP TABLE IF EXISTS users, languages, connections, chats, verification_requests, sessions CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR (255) UNIQUE NOT NULL,
  gender varchar,
  email_verified TIMESTAMPTZ,
  image text,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE verification_requests (
  id SERIAL,
  identifier VARCHAR(255) NOT NULL,
  token VARCHAR(255) NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
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
  id SERIAL,
  user_id INTEGER NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  session_token VARCHAR(255) NOT NULL,
  access_token VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO users (name, email, gender, email_verified, image, created_at, updated_at) VALUES 
( 'Amy', 'amykuner@live.com', 'female',(SELECT CURRENT_TIMESTAMP),'./public/images/avator.png',(SELECT CURRENT_TIMESTAMP),(SELECT CURRENT_TIMESTAMP)),
('Crag','Cragalag@live.com','non_binary',(SELECT CURRENT_TIMESTAMP),'./public/images/avator.png',(SELECT CURRENT_TIMESTAMP),(SELECT CURRENT_TIMESTAMP)),
('Maryam','mg5640041@gmail.com','female',(SELECT CURRENT_TIMESTAMP),'./public/images/avator.png',(SELECT CURRENT_TIMESTAMP),(SELECT CURRENT_TIMESTAMP));

CREATE TABLE chats (
  hash_string text,
  user_one int REFERENCES users (id),
  user_two int REFERENCES users (id)
);

INSERT INTO languages (user_id, language, proficiency)
VALUES (1, 'spanish', 'fluent'),
  (1, 'french', 'beginner'),
  (1, 'english', 'native'),
  (3, 'arabic', 'social');
  
INSERT INTO connections (user_id, woman, man, non_binary, anyone) VALUES 
(1, 'true', 'false', 'true', 'false'),
(3, 'true', 'false', 'false', 'false');

ALTER TABLE languages

ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE connections

ADD FOREIGN KEY (user_id) REFERENCES users (id);

COMMIT;
