import { H1, P } from "../globalStyles";
import { PostPreviewContainer } from "./styles";
import { Link } from "../globalStyles";

export default function PostPreview({ post }) {
  const truncateText = text => {
    return text.slice(0, 150) + '...'
  }

  return (
    <PostPreviewContainer>
      <H1>{post.title}</H1>
      <P>{truncateText(post.paragraphs[0].body)}</P>
      <Link href={`blog/${post.slug}`}>Read More</Link>
    </PostPreviewContainer>
  )
}