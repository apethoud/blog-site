import { lato, latoItalic } from "../fonts"

export default function Text({ children, italic, faded, noMargin }) {
  return (
    <div className={`${italic ? latoItalic.className : lato.className} text-xl ${faded ? "text-slate-400" : "text-slate-100"} antialiased ${!noMargin && "mt-6 mb-8"}`}>
      {children}
    </div>
  )
}
