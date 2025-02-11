import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChat = ({
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
      d="M2 5a2.75 2.75 0 0 1 2.75-2.75h14.5A2.75 2.75 0 0 1 22 5v9.75a2.75 2.75 0 0 1-2.75 2.75h-7.006l-5.51 4a1.25 1.25 0 0 1-1.984-1.012V17.5A2.75 2.75 0 0 1 2 14.75zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v9.75c0 .69.56 1.25 1.25 1.25H5c.69 0 1.25.559 1.25 1.25v2.748l5.178-3.76a1.25 1.25 0 0 1 .734-.239h7.088c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.696 8.3a.75.75 0 0 1 .75-.75h8.175a.75.75 0 0 1 0 1.5H6.446a.75.75 0 0 1-.75-.75M5.696 11.7a.75.75 0 0 1 .75-.75H11a.75.75 0 0 1 0 1.5H6.446a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.5}
    />
  </svg>
);
export default SvgChat;
