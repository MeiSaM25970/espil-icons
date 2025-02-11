import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuHorizontalDots = ({
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
      d="M7.77 12a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0m-3.964 0a1.234 1.234 0 1 0 2.468 0 1.234 1.234 0 0 0-2.468 0"
    />
    <path
      fill="currentColor"
      d="M14.73 12a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0m-3.964 0a1.234 1.234 0 1 0 2.468 0 1.234 1.234 0 0 0-2.468 0"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M21.69 12a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0m-3.964 0a1.234 1.234 0 1 0 2.468 0 1.234 1.234 0 0 0-2.468 0"
    />
  </svg>
);
export default SvgMenuHorizontalDots;
