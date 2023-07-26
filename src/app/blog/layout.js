export const metadata = {
  title: 'Blog',
  description: "Thoughts on software development and urban walkable infrastructure.",
}

export default function Layout({ children }) {
  return (
    <div className="p-4 w-full lg:w-2/3">
      {children}
    </div>
  )
}