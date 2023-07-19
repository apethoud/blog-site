'use client';

import H1 from "@/app/_UI-components/H1";
import Text from "@/app/_UI-components/Text";
import { formatDate } from "@/app/utils";

export default function Post({ post }) {
  console.log("*** post is: ", post);
  return (
    <>
      <H1>{post.title}</H1>
      <Text italic>{formatDate(post.created_at)}</Text>
      {post.paragraphs.map(paragraph => (
        <Text>{paragraph.body}</Text>
      ))}
    </>
  )
}