'use client';

import PostPreview from "../PostPreview";

export default function PostList({ posts }) {
  console.log("posts is: ", posts);
  return (
    <>
      {posts.map(post => (
        <div className="pb-6 border-b border-slate-700" key={post.id}>
          <PostPreview post={post} />
        </div>
      ))}
    </>
  )
}