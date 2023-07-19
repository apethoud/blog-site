import { BlogContainer } from "./styles";

export default function Layout({ children }) {
  return (
    <div className="p-4">
      {children}
    </div>
  )
}