BEGIN;

DROP TABLE IF EXISTS users, languages, connections, sessions CASCADE;
CREATE TABLE "users" (
"id" int PRIMARY KEY,
  "name" text,
  "email" VARCHAR ( 255 ) UNIQUE NOT NULL,
  "password" VARCHAR ( 255 ) NOT NULL,
  "gender" varchar,
  "image" text,
  "created_at" timestamp,
  "updated_at" timestamp,
  "email_verified" TIMESTAMPTZ,
);


CREATE TABLE "languages" (
  "user_id" int,
  "language" text,
  "proficiency" text
);


CREATE TABLE "connections" (
  "user_id" int,
  "woman" boolean,
  "man" boolean,
  "non_binary" boolean,
  "anyone" boolean
);

CREATE TABLE "sessions" (
  "sid" text,
  "data" json
);


INSERT INTO users (id, name, email, password, gender, email_verified, image, created_at, updated_at) VALUES
  (1, 'maryam', 'ghorbani.maryam6688@gmail.com', 'me2293403', 'female', (SELECT CURRENT_TIMESTAMP),'', (SELECT CURRENT_TIMESTAMP), (SELECT CURRENT_TIMESTAMP))
;
ALTER TABLE "languages" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");





ALTER TABLE "connections" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

COMMIT;
