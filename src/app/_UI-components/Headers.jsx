import { latoBold } from "../fonts"

export function H1({ children, noMargin }) {
  return (
    <h1 className={`${latoBold.className} text-4xl text-violet-400 ${!noMargin && "my-6"}`}>
      {children}
    </h1>
  )
}

export function H2({ children, noMargin }) {
  return (
    <h2 className={`${latoBold.className} text-3xl text-slate-100 ${!noMargin && "mt-12"}`}>
      {children}
    </h2>
  )
}

export function H3({ children, noMargin }) {
  return (
    <h3 className={`${latoBold.className} text-2xl text-slate-100 ${!noMargin && "mt-10"}`}>
      {children}
    </h3>
  )
}