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
    .range(0, 0);
  return posts[0];
}

export default async function Home() {
  const mostRecentPost = await getMostRecentPost();


  return (
    <HomeContainer>
      <HeroContainer>
        <HeroText>Driven Frontend Software Engineer with 5+ years of work experience building frontend applications, managing a team of 10+ developers and QA reps, coordinating technical project management for complex mobile applications, presenting client demos, and mentoring junior developers.</HeroText>
        <HeroPicContainer>
          <HeroPic>
            <StyledImage 
              src={profilePic}
              fill={true}
            />
          </HeroPic>
        </HeroPicContainer>
      </HeroContainer>
      <div>
        <H2>From the Blog</H2>
        <PostPreview post={mostRecentPost} />
        <H2>Most Recent Project</H2>
      </div>
    </HomeContainer>
  )
}
