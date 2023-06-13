import { Flex, NavButton, StyledNav } from "./globalStyles";

export default function Nav() {
  return (
    <StyledNav>
      <NavButton logo href="/">Andrew Pethoud</NavButton>
      <Flex>
        <NavButton href="/blog">Blog</NavButton>
        <NavButton href="/projects">Projects</NavButton>
      </Flex>
    </StyledNav>
  )
}