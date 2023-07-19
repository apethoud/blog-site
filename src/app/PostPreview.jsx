'use client';

import { LinkText, P } from "./globalStyles";
import H1 from "./_UI-components/H1";
import { PostPreviewContainer } from "./blog/styles";
import Link from "./_UI-components/Link";
import Timestamp from "./blog/Timestamp";
import Text from "./_UI-components/Text";
import { formatDate } from "./utils";

export default function PostPreview({ post }) {
  console.log("post is: ", post);
  const truncateText = text => {
    return text.slice(0, 300) + '...'
  }

  return (
    <div className="pb-6 border-b border-slate-300 dark:border-slate-700">
      <Link href={`blog/${post.slug}`}>
        <H1>{post.title}</H1>
      </Link>
      <Text italic>{formatDate(post.created_at)}</Text>
      <Text>{truncateText(post.paragraphs[0].body)}</Text>
      <Link href={`blog/${post.slug}`}>
        Read More
      </Link>
    </div>
  )
}