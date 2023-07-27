'use client';

import { H1 } from "@/app/_UI-components/Headers";
import Text from "@/app/_UI-components/Text";
import { formatDate } from "@/app/utils";
import Paragraph from "@/app/_UI-components/Paragraph";

export default function Post({ post }) {
  return (
    <>
      <H1>{post.title}</H1>
      <Text italic faded>{formatDate(post.created_at)}</Text>
      {post.paragraphs.map(paragraph => (
        <Paragraph body={paragraph.body} />
      ))}
    </>
  )
}