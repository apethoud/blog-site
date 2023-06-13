import { BlogContainer } from "./styles";

export default function Layout({ children }) {
  return (
    <BlogContainer>
      {children}
    </BlogContainer>
  )
}