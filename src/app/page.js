import profilePic from '../assets/profile-pic.jpg';
import Image from "next/image";
import H2 from "./_UI-components/H2";
import PostPreview from "./PostPreview";
import { supabase } from "../../supabaseClient"
import { lalezar, lato } from './fonts';

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
      <div className="flex flex-col md:flex-row mt-12 mb-24">
        <div className="md:my-12 md:pr-24 w-full md:w-3/4">
          <div className={`text-7xl text-violet-800 dark:text-violet-50 font-bold mb-6 ${lalezar.className} custom-shadow-effect`}>
            Hey, I'm Andrew Pethoud!
          </div>
          <div className={`text-4xl text-violet-500 dark:text-violet-400 ${lato.className}`}>
            I'm a full-stack software developer passionate about making digital and physical spaces healthy and enjoyable for everyone.
          </div>
        </div>
        <div className="w-full md:w-1/4 flex items-center mt-12 md:mt-0">
          <Image
            src={profilePic}
            className="rounded-full"
            style={{ objectFit: "contain" }} />
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
