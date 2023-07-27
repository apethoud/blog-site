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
    <li className="font-sans text-lg text-slate-900 dark:text-slate-100 antialiased ml-8">
      {children}
    </li>
  )
}