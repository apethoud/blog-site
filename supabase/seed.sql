INSERT INTO posts (title)
VALUES 
  ('Initial Post');

INSERT INTO paragraphs (body, ui_order, post_id)
VALUES
  ('This is the first paragraph. I''ll make sure this is long enought to force a text wrap onto another line, so I guess I''ll have to just keep typing for a while and hope what I write is long enough. That should be good.', 1, (SELECT id from posts WHERE title='Initial Post')),
  ('This is the second paragraph. It doesn''t need to be as long.', 2, (SELECT id from posts WHERE title='Initial Post')),
  ('This last paragraph should be more than one line, but it doesn''t need to be as long as the first paragraph, so I''ll write just a little bit more.', 3, (SELECT id from posts WHERE title='Initial Post'));