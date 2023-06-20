import { FlexWrapper, HeroPic, HeroPicContainer, HeroText, HomeWrapper, StyledImage } from "./styles";
import profilePic from '../assets/profile-pic.jpg';
import { H2 } from "./globalStyles";

export default function Home() {

  return (
    <HomeWrapper>
      <FlexWrapper>
        <HeroText>Driven Frontend Software Engineer with 5+ years of work experience building frontend applications, managing a team of 10+ developers and QA reps, coordinating technical project management for complex mobile applications, presenting client demos, and mentoring junior developers.</HeroText>
        <HeroPicContainer>
          <HeroPic>
            <StyledImage 
              src={profilePic}
              fill={true}
            />
          </HeroPic>
        </HeroPicContainer>
      </FlexWrapper>
      <div>
        <H2>From the Blog</H2>
      </div>
    </HomeWrapper>
  )
}
