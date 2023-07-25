export const metadata = {
  title: 'Blog',
  description: "Thoughts on software development and urban walkable infrastructure.",
}

export default function Layout({ children }) {
  return (
    <div className="p-4 w-full xl:w-3/4">
      {children}
    </div>
  )
}