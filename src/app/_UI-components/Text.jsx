import { lato } from "../fonts"

export default function Text({ children, italic }) {
  return (
    <div className={`${lato.className} text-lg text-slate-900 dark:text-slate-100 antialiased my-4 ${italic ? "italic" : ""}`}>
      {children}
    </div>
  )
}