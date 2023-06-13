import { Flex, StyledNav } from "./globalStyles";

export default function Nav() {
  return (
    <StyledNav>
      <div>andrewpethoud.dev</div>
      <Flex>
        <div>Blog</div>
        <div>Projects</div>
      </Flex>
    </StyledNav>
  )
}