import { latoBold } from "../fonts"

export default function H1({ children }) {
  return (
    <div className={`${latoBold.className} text-3xl text-slate-900 dark:text-slate-100 my-4`}>
      {children}
    </div>
  )
}