import { lato, latoItalic } from "../fonts"

export default function Text({ children, italic, faded }) {
  return (
    <div className={`${italic ? latoItalic.className : lato.className} text-xl ${faded ? "text-slate-400" : "text-slate-100"} antialiased my-6`}>
      {children}
    </div>
  )
}
