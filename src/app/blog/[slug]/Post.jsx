'use client';

import { H1 } from "@/app/_UI-components/Headers";
import Text from "@/app/_UI-components/Text";
import { formatDate } from "@/app/utils";
import Paragraph from "@/app/_UI-components/Paragraph";
import Image from "next/image";
import { Link } from '@/app/_UI-components/Links'

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function Post({ post }) {
  const postElements = [...post.paragraphs, ...post.images]
  postElements.sort((a, b) => (a.ui_order > b.ui_order) ? 1 : -1)

  return (
    <>
      <H1>{post.title}</H1>
      <Text italic faded>{formatDate(post.created_at)}</Text>
      {postElements.map((element, index) => (
          <div key={index}>
            {element.body && (
              <Paragraph body={element.body} />
            )}
            {element.url && (
              <Image 
                loader={imageLoader}
                src={element.url}
                width={800}
                height={600}
                className="my-6"
                alt={element.alt_text}
              />
            )}
          </div>
        ))}
      <div className="mt-8 border-t border-violet-500 pt-6 font-sans italic text-lg text-slate-100 antialiased">
        Hey, I'm Andrew Pethoud! I'm a full-stack software engineer <span className="not-italic">💻</span> who loves building joyful digital experiences for humans <span className="not-italic">👫</span>. I'm also passionate about walkable communities <span className="not-italic">🌳</span> and making cities safer for bikers and pedestrians <span className="not-italic">🚴</span>, especially when they're my own kids <span className="not-italic">🧒</span>.
      </div>
      <div className="flex items-center">
        <Text>Connect with me:&nbsp;</Text>
        <Link 
          href="https://twitter.com/AndrewPethoud" 
          openInNewTab>
            Twitter
        </Link>
        <Text>&nbsp;|&nbsp;</Text>
        <Link 
          href="https://www.linkedin.com/in/andrew-pethoud-abb81967/" 
          openInNewTab>
            LinkedIn
        </Link>
      </div>
    </>
  )
}
