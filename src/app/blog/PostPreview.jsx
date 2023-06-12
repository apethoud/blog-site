import { H1 } from "../globalStyles";

export default function PostPreview({ post }) {
  return (
    <div>
      <H1>{post.title}</H1>
    </div>
  )
}