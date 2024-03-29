import NextLink from "next/link"
import { latoBold } from "../fonts"

export function Link({ children, href, openInNewTab }) {
  return (
    <NextLink
      className={`${latoBold.className} text-lg text-violet-400 mt-6 mb-8`}
      href={href}
      target={openInNewTab ? "_blank" : "_self"}>
        {children}
    </NextLink>
  )
}

export function ExtractedLinkFromMarkdown(props) {
  return (
    <a 
      href={props.href} 
      target="_blank"
      className={`${latoBold.className} text-lg text-violet-400 antialiased`}>
        {props.children}
    </a>
  )
}
