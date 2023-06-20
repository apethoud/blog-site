import { supabase } from "../../../supabaseClient"
import PostList from "./PostList";

async function getPosts() {
  let { data: posts, error } = await supabase
    .from('posts')
    .select(`
      *,
      paragraphs (
        post_id,
        id,
        ui_order,
        body
      )
    `);
    if (error) {
      throw new Error(error);
    }
  return posts;
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <PostList posts={posts} />
  )
}