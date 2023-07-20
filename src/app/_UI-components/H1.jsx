import { latoBold } from "../fonts"

export default function H1({ children }) {
  return (
    <div className={`${latoBold.className} text-3xl text-violet-600 dark:text-violet-400 my-4`}>
      {children}
    </div>
  )
}