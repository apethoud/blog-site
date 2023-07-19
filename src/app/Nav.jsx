import { Flex, NavButton, StyledNav } from "./globalStyles";
import Link from "next/link";

export default function Nav() {
  return (
    // <StyledNav>
    //   <NavButton logo href="/">Andrew Pethoud</NavButton>
    //   <Flex>
    //     <NavButton href="/blog">Blog</NavButton>
    //     <NavButton href="/projects">Projects</NavButton>
    //   </Flex>
    // </StyledNav>
    <div className="flex justify-between items-baseline border-b border-slate-300 dark:border-slate-700 py-3">
      <Link href="/" className="text-lg mx-4">
        <span className="font-bold text-slate-900 dark:text-slate-100">Andrew Pethoud</span>
      </Link>
      <span className="text-md text-slate-900 dark:text-slate-100">
      <Link href="/blog">
        <span className="font-bold text-slate-900 dark:text-slate-100 mx-4">Blog</span>
      </Link>
      <Link href="/projects">
        <span className="font-bold text-slate-900 dark:text-slate-100 mx-4">Projects</span>
      </Link>
      </span>
    </div>
  )
}