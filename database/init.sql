BEGIN;

DROP TABLE IF EXISTS users, sessions, categories, products CASCADE;
CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "name" text,
  "email" varchar UNIQUE,
  "password" varchar,
  "gender" varchar
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

ALTER TABLE "languages" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "connections" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

COMMIT;
