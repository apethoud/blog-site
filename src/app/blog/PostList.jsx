'use client';

import PostPreview from "../PostPreview";

export default function PostList({ posts }) {
  console.log("posts is: ", posts);
  return (
    <>
      {posts.map(post => (
        <PostPreview 
          key={post.id}
          post={post} 
        />
      ))}
    </>
  )
}