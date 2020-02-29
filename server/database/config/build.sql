BEGIN;
  DROP TABLE IF EXISTS posts;
  CREATE TABLE posts
  (
    id serial PRIMARY KEY,
    title text NOT NULL,
    detail text NOT NULL,
    img text,
    p_date date NOT NULL DEFAULT CURRENT_DATE
  );
  COMMIT;