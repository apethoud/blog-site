import NextLink from "next/link"
import { latoBold } from "../fonts"

export function Link({ children, ...rest }) {
  return (
    <NextLink {...rest}
      className={`${latoBold.className} text-lg text-violet-600 dark:text-violet-400`}>
        {children}
    </NextLink>
  )
}

export function ExtractedLinkFromMarkdown(props) {
  return (
    <a 
      href={props.href} 
      target="_blank"
      className="font-sans font-bold text-lg text-violet-600 dark:text-violet-500 antialiased">
        {props.children}
    </a>
  )
}