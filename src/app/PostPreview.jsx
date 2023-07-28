'use client';

import { H1 } from "./_UI-components/Headers";
import { Link } from "./_UI-components/Links";
import Paragraph from "./_UI-components/Paragraph";
import Text from "./_UI-components/Text";
import { formatDate } from "./utils";

export default function PostPreview({ post }) {
  const truncateText = text => {
    return text.slice(0, 300) + '...'
  }

  return (
    <div className="pb-6 border-b border-slate-300 dark:border-slate-700">
      <Link href={`blog/${post.slug}`}>
        <H1>{post.title}</H1>
      </Link>
      <Text italic faded>{formatDate(post.created_at)}</Text>
      <Paragraph body={truncateText(post.paragraphs[0].body)} />
      <Link href={`blog/${post.slug}`}>
        Read More
      </Link>
    </div>
  )
}