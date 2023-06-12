import { Title } from "./styles";

export default function PostPreview({ post }) {
  return (
    <div>
      <Title className="title">{post.title}</Title>
    </div>
  )
}