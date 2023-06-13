'use client';

import { H1, P } from "@/app/globalStyles";

export default function Post({ post }) {
  console.log("*** post is: ", post);
  return (
    <>
      <H1>{post.title}</H1>
      {post.paragraphs.map(paragraph => (
        <P>{paragraph.body}</P>
      ))}
    </>
  )
}