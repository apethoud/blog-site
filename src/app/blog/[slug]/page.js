import { supabase } from "../../../../supabaseClient"
import Post from "./Post";

export const revalidate = 0;

async function getPostBySlug(slug) {
  let { data, error } = await supabase
    .from('posts')
    .select(`*,
      paragraphs (
        post_id,
        id,
        ui_order,
        body
      ),
      images (
        post_id,
        id,
        ui_order,
        url
      )
    `)
    .eq('slug', slug);
  if (error) {
    console.log("Error: ", error)
  }
  return data?.[0];
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);
  return (
    <>
      {post && (
        <Post post={post} />
      )}
    </>
  )
}