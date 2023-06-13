import { supabase } from "../../../supabaseClient"
import PostList from "./PostList";
import { BlogContainer } from "./styles";

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
  return posts;
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <BlogContainer>
      <PostList posts={posts} />
    </BlogContainer>
  )
}