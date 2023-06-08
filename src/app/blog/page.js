import { supabase } from "../../../supabaseClient"
import PostList from "./PostList";

async function getPosts() {
  let { data: posts, error } = await supabase.from('posts').select('*');
  return posts;
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <>
      <div>Blog Home</div>
      <PostList posts={posts} />
    </>
  )
}