'use client';

import { H1, P } from "@/app/globalStyles";
import Timestamp from "../Timestamp";

export default function Post({ post }) {
  console.log("*** post is: ", post);
  return (
    <>
      <H1>{post.title}</H1>
      <Timestamp date={post.created_at} />
      {post.paragraphs.map(paragraph => (
        <P>{paragraph.body}</P>
      ))}
    </>
  )
}