import Text from "./Text"

export function Ol({ children }) {
  return (
    <ol className="list-decimal">
      {children}
    </ol>
  )
}

export function Ul({ children }) {
  return (
    <ul className="list-disc">
      {children}
    </ul>
  )
}

export function Li({ children }) {
  return (
    <li className="ml-8 text-lg text-violet-400 antialiased">
      <Text noMargin>
        {children}
      </Text>
    </li>
  )
}