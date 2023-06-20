'use client';

import { H1, LinkText, P } from "./globalStyles";
import { PostPreviewContainer } from "./blog/styles";
import { Link } from "./globalStyles";
import Timestamp from "./blog/Timestamp";

export default function PostPreview({ post }) {
  console.log("post is: ", post);
  const truncateText = text => {
    return text.slice(0, 300) + '...'
  }

  return (
    <PostPreviewContainer>
      <Link href={`blog/${post.slug}`}>
        <H1>{post.title}</H1>
      </Link>
      <Timestamp date={post.created_at} />
      <P>{truncateText(post.paragraphs[0].body)}</P>
      <Link href={`blog/${post.slug}`}>
        <LinkText>Read More</LinkText>
      </Link>
    </PostPreviewContainer>
  )
}