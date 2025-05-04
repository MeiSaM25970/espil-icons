import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVoice = ({
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
      d="M18.75 11a6.75 6.75 0 0 1-13.5 0v-.75a.75.75 0 1 1 1.5 0V11a5.25 5.25 0 1 0 10.5 0v-.75a.75.75 0 1 1 1.5 0z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.75 11a3.75 3.75 0 0 1-7.5 0V6a3.75 3.75 0 0 1 7.5 0zM12 3.75A2.25 2.25 0 0 0 9.75 6v5a2.25 2.25 0 1 0 4.5 0V6A2.25 2.25 0 0 0 12 3.75"
      clipRule="evenodd"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 16.432a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-3.818a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.875 21a.75.75 0 0 1 .75-.75h6.75a.75.75 0 0 1 0 1.5h-6.75a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVoice;
