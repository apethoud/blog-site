INSERT INTO posts (title, slug)
VALUES 
  ('Initial Post', 'initial-post'),
  ('Second Post', 'second-post'),
  ('Third Post', 'third-post');

INSERT INTO paragraphs (body, ui_order, post_id)
VALUES
  ('For post one, this is the first paragraph. I''ll make sure this is long enought to force a text wrap onto another line, so I guess I''ll have to just keep typing for a while and hope what I write is long enough. That should be good.', 1, (SELECT id from posts WHERE slug='initial-post')),
  ('For post one, this is the second paragraph. It doesn''t need to be as long.', 2, (SELECT id from posts WHERE slug='initial-post')),
  ('For post one, this last paragraph should be more than one line, but it doesn''t need to be as long as the first paragraph, so I''ll write just a little bit more.', 3, (SELECT id from posts WHERE slug='initial-post')),
  ('For post two, this is the first paragraph. I''ll make sure this is long enought to force a text wrap onto another line, so I guess I''ll have to just keep typing for a while and hope what I write is long enough. That should be good.', 1, (SELECT id from posts WHERE slug='second-post')),
  ('For post two, this is the second paragraph. It doesn''t need to be as long.', 2, (SELECT id from posts WHERE slug='second-post')),
  ('For post two, this last paragraph should be more than one line, but it doesn''t need to be as long as the first paragraph, so I''ll write just a little bit more.', 3, (SELECT id from posts WHERE slug='second-post')),
  ('For post three, this is the first paragraph. I''ll make sure this is long enought to force a text wrap onto another line, so I guess I''ll have to just keep typing for a while and hope what I write is long enough. That should be good.', 1, (SELECT id from posts WHERE slug='third-post')),
  ('For post three, this is the second paragraph. It doesn''t need to be as long.', 2, (SELECT id from posts WHERE slug='third-post')),
  ('For post three, this last paragraph should be more than one line, but it doesn''t need to be as long as the first paragraph, so I''ll write just a little bit more.', 3, (SELECT id from posts WHERE slug='third-post'));