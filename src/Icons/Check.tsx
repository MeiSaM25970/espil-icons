import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheck = ({
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
      d="M14.971 8.969a.748.748 0 0 1 1.205.205.75.75 0 0 1-.144.856L11.2 14.86c-.123.12-.236.26-.4.327a.75.75 0 0 1-.836-.16L8 13.06a.78.78 0 0 1-.23-.401.75.75 0 0 1 1.245-.706L10.5 13.44z"
    />
  </svg>
);
export default SvgCheck;
