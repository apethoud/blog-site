import { latoBold } from "../fonts"

export function H1({ children }) {
  return (
    <div className={`${latoBold.className} text-3xl text-violet-600 dark:text-violet-400 my-4`}>
      {children}
    </div>
  )
}

export function H2({ children }) {
  return (
    <div className={`${latoBold.className} text-2xl text-slate-900 dark:text-slate-100 my-4`}>
      {children}
    </div>
  )
}

export function H3({ children }) {
  return (
    <div className={`${latoBold.className} text-xl text-slate-900 dark:text-slate-100 my-4`}>
      {children}
    </div>
  )
}