import { HeroContainer, HeroPic, HeroPicContainer, HeroText, HomeContainer, StyledImage } from "./styles";
import profilePic from '../assets/profile-pic.jpg';
import { H2 } from "./globalStyles";
import PostPreview from "./PostPreview";
import { supabase } from "../../supabaseClient"

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
      throw new Error(error);
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
        <div className="w-full md:w-3/4 text-2xl text-violet-600 dark:text-violet-500">
          Hey, I'm Andrew Pethoud! I'm a full-stack software engineer 💻 who loves building joyful digital experiences for humans 👫. I'm also passionate about walkable communities 🌳 and making cities safer for bikers and pedestrians 🚴, especially when they're my own kids 🧒.
        </div>
        <HeroPicContainer>
          <HeroPic>
            <StyledImage 
              src={profilePic}
              fill={true}
            />
          </HeroPic>
        </HeroPicContainer>
      </div>
      <div>
        <H2>From the Blog</H2>
        <PostPreview post={mostRecentPost} />
      </div>
    </div>
  )
}
