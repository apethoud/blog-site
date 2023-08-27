import Link from "next/link";
import { lalezar, latoBold } from "./fonts";

export default function Nav() {
  return (
    <div className="flex justify-between items-baseline border-b border-slate-700 py-3">
      <Link href="/" className="mx-4">
        <span className={`text-xl text-slate-100 ${latoBold.className}`}>Andrew Pethoud</span>
      </Link>
      <div className={`text-md font-bold text-slate-100 ${latoBold.className}`}>
        <Link href="/blog">
          <span className="mx-4">Blog</span>
        </Link>
        <Link href="/projects">
          <span className="mx-4">Projects</span>
        </Link>
      </div>
    </div>
  )
}