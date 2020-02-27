BEGIN;

DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts (
  id            serial        PRIMARY KEY,
  title         text NOT NULL,
  detail        text NOT NULL,
  img           text ,
  p_date        DATE NOT NULL DEFAULT CURRENT_DATE

);

insert INTO posts (title,detail,img) VALUES 
('first title ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
'https://unsplash.com/photos/TjegK_z-0j8'),
('first title ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
'https://images.unsplash.com/photo-1582650946940-5e8d53989db3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
('second title ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
'https://images.unsplash.com/photo-1582650946940-5e8d53989db3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),

('third title ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
'https://images.unsplash.com/photo-1582691440518-104cda25be42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),

('forth title ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
'https://images.unsplash.com/photo-1582691472047-7cf57ae35eea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');


COMMIT;
