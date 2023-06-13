import { H1, LinkText, P } from "../globalStyles";
import { PostPreviewContainer } from "./styles";
import { Link } from "../globalStyles";

export default function PostPreview({ post }) {
  const truncateText = text => {
    return text.slice(0, 150) + '...'
  }

  return (
    <PostPreviewContainer>
      <Link href={`blog/${post.slug}`}>
        <H1>{post.title}</H1>
      </Link>
      <P>{truncateText(post.paragraphs[0].body)}</P>
      <Link href={`blog/${post.slug}`}>
        <LinkText>Read More</LinkText>
      </Link>
    </PostPreviewContainer>
  )
}