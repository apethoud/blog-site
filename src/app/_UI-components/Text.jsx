import { lato, latoItalic } from "../fonts"

export default function Text({ children, italic }) {
  return (
    <div className={`${italic ? latoItalic.className : lato.className} text-xl text-slate-900 dark:text-slate-100 antialiased my-6`}>
      {children}
    </div>
  )
}