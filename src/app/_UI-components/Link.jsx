import NextLink from "next/link"

export default function Link({ children, ...rest }) {
  return (
    <NextLink {...rest}
      className="font-bold text-lg text-violet-600 dark:text-violet-500">
        {children}
    </NextLink>
  )
}