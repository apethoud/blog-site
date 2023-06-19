import { ContentWrapper, HeroButton, HeroPic, HeroPicContainer, HeroText, StyledImage } from "./styles";
import profilePic from '../assets/profile-pic.jpg';

export default function Home() {

  return (
    <div>
      <ContentWrapper>
        <HeroText>Driven Frontend Software Engineer with 5+ years of work experience building frontend applications, managing a team of 10+ developers and QA reps, coordinating technical project management for complex mobile applications, presenting client demos, and mentoring junior developers.</HeroText>
        <HeroPicContainer>
          <HeroPic>
            <StyledImage 
              src={profilePic}
              fill={true}
            />
          </HeroPic>
        </HeroPicContainer>
      </ContentWrapper>
      <ContentWrapper>
        <HeroButton>blog</HeroButton>
        <HeroButton>projects</HeroButton>
      </ContentWrapper>
    </div>
  )
}
