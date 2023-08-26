import { supabase } from "../../supabaseClient"
import { H2 } from "./_UI-components/Headers";
import PostPreview from "./PostPreview";

async function getMostRecentPost() {
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
    .order('id', {ascending: false})
    .limit(1)
    if (error) {
      console.log("Error: ", error)
    }
  return posts[0];
}

export default async function FeaturedPost() {
  const mostRecentPost = await getMostRecentPost();

  return (
    <div className="flex justify-center">
      <div className={`md:w-3/4 p-4 rounded-2xl
        bg-slate-100
        dark:bg-[#1C1D4B]`}>
        <H2 noMargin>From the Blog</H2>
        <PostPreview post={mostRecentPost} />
      </div>
    </div>
  )
}