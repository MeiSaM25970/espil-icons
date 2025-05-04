import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGroupChat = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.493 5.027a2.75 2.75 0 0 1 2.75-2.75h12a2.75 2.75 0 0 1 2.75 2.75v7.989a2.653 2.653 0 0 1-2.378 2.639v2.743c0 1.05-1.216 1.632-2.034.974l-2.38-2.265v-1.618l2.914 2.387v-2.482c0-.677.549-1.226 1.226-1.226.636 0 1.152-.516 1.152-1.152V5.027c0-.69-.56-1.25-1.25-1.25h-12c-.69 0-1.25.56-1.25 1.25v4.227h-1.5z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.25 10.75a.75.75 0 0 0-.75.75v5.691c0 .415.336.75.75.75h.329c.69 0 1.25.56 1.25 1.25v1.012l2.787-2.023a1.25 1.25 0 0 1 .734-.239h3.595a.75.75 0 0 0 .75-.75V11.5a.75.75 0 0 0-.75-.75zM2 11.5a2.25 2.25 0 0 1 2.25-2.25h8.695a2.25 2.25 0 0 1 2.25 2.25v5.691a2.25 2.25 0 0 1-2.25 2.25H9.431l-3.118 2.265a1.25 1.25 0 0 1-1.984-1.012v-1.253H4.25A2.25 2.25 0 0 1 2 17.191z"
      clipRule="evenodd"
      opacity={0.5}
    />
  </svg>
);
export default SvgGroupChat;
