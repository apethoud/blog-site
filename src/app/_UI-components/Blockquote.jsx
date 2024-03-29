import { Children, isValidElement, ReactNode } from "react";
import Text from "./Text";

export default function Blockquote({ children }) {
  // This code is needed to extract the string from the Text element that's automatically passed
  // to the <blockquote> element by the Markdown renderer so that we can modify the text's 
  // styling directly

  let childElement = null;
  let childString = null;

  Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Text) {
      childElement = Children.only(child)
      childString = childElement.props?.node?.children?.[0]?.value
    }
  })

  if (!childString) {
    return null;
  }

  return (
    <blockquote className="my-8 border-l-4 pl-8 border-violet-500">
      <div className="font-sans italic text-3xl text-slate-100 antialiased">
        {childString}
      </div>
    </blockquote>
  )
}
