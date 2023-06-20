import { supabase } from "../../../../supabaseClient"
import Post from "./Post";

async function getPostBySlug(slug) {
  let { data, error } = await supabase
    .from('posts')
    .select(`*,
      paragraphs (
        post_id,
        id,
        ui_order,
        body
      )`)
    .eq('slug', slug);
    if (error) {
      throw new Error(error);
    }
  return data[0];
}

export default async function BlogPost({ params }) {
  const posts = await getPostBySlug(params.slug);
  return (
    <Post post={posts} />
  )
}