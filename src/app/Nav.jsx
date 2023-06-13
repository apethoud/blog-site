import { Flex, NavButton, StyledNav } from "./globalStyles";

export default function Nav() {
  return (
    <StyledNav>
      <NavButton bold logo>Andrew Pethoud</NavButton>
      <Flex>
        <NavButton>Blog</NavButton>
        <NavButton>Projects</NavButton>
      </Flex>
    </StyledNav>
  )
}