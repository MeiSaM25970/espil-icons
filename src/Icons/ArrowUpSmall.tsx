import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpSmall = ({
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
      d="M11.365 9.76c.201-.205.5-.3.777-.245.227.038.413.19.585.338 1.01 1.033 2.024 2.062 3.032 3.098.328.339.32.948-.017 1.279a.863.863 0 0 1-1.23.02Q13.253 12.971 12 11.688c-.799.819-1.601 1.633-2.4 2.452-.09.09-.179.187-.292.248a.86.86 0 0 1-.824.013.92.92 0 0 1-.478-.706.94.94 0 0 1 .254-.764q1.551-1.586 3.104-3.17"
    />
  </svg>
);
export default SvgArrowUpSmall;
