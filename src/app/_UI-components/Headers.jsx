import { latoBold } from "../fonts"

export function H1({ children }) {
  return (
    <h1 className={`${latoBold.className} text-3xl text-violet-600 dark:text-violet-400 my-6`}>
      {children}
    </h1>
  )
}

export function H2({ children }) {
  return (
    <h2 className={`${latoBold.className} text-2xl text-slate-900 dark:text-slate-100 mt-12`}>
      {children}
    </h2>
  )
}

export function H3({ children }) {
  return (
    <h3 className={`${latoBold.className} text-xl text-slate-900 dark:text-slate-100 mt-10`}>
      {children}
    </h3>
  )
}