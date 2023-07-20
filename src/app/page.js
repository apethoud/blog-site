import profilePic from '../assets/profile-pic.jpg';
import Image from "next/image";
import H2 from "./_UI-components/H2";
import PostPreview from "./PostPreview";
import { supabase } from "../../supabaseClient"
import { lalezar, lato } from './fonts';

const textShadow = "2px 1px 1px #a855f7, 1px 2px 1px #312e81, 3px 2px 1px #a855f7, 2px 3px 1px #312e81, 4px 3px 1px #a855f7, 3px 4px 1px #312e81";

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
    .order('id', {ascending: false})
    .limit(1)
    if (error) {
      console.log("Error: ", error)
    }
  return posts[0];
}

//             const transaction = Sentry.startTransaction({
//               name: "Example Frontend Transaction",
//             });

//             Sentry.configureScope((scope) => {
//               scope.setSpan(transaction);
//             });

//             try {
//               const res = await fetch("/sentry-test/api.js");
//               if (!res.ok) {
//                 throw new Error("Sentry Example Frontend Error");
//               }
//             } finally {
//               transaction.finish();
//             }
//           }}

export default async function Home() {
  const mostRecentPost = await getMostRecentPost();


  return (
    <div className="m-4">
      <div className="flex flex-col md:flex-row my-8">
        <div>
          <div 
            className={`w-full md:w-3/4 text-7xl text-violet-600 dark:text-violet-50 font-bold mb-6 ${lalezar.className}`}
            style={{ textShadow: textShadow }}>
            Hey, I'm Andrew Pethoud!
          </div>
          <div className={`w-full md:w-3/4 text-4xl text-violet-600 dark:text-violet-400 ${lato.className}`}>
            I'm a full-stack software developer passionate about making digital and physical spaces healthy and enjoyable for everyone.
          </div>
        </div>
        <div className="w-full md:w-1/4 flex justify-center">
          <Image
            src={profilePic}
            className="rounded-full" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="md:w-3/4">
          <H2>From the Blog</H2>
          <PostPreview post={mostRecentPost} />
        </div>
      </div>
    </div>
  )
}
