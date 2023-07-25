import { supabase } from "../../../supabaseClient"
import PostList from "./PostList";

export const revalidate = 0;

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
    `)
    .eq('deleted', false)
    .order('id', { ascending: false });
    if (error) {
      console.log("Error: ", error)
    }
  return posts;
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <PostList posts={posts} />
  )
}