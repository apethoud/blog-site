import NextLink from "next/link"
import { latoBold } from "../fonts"

export default function Link({ children, ...rest }) {
  return (
    <NextLink {...rest}
      className={`${latoBold.className} text-lg text-violet-600 dark:text-violet-400`}>
        {children}
    </NextLink>
  )
}