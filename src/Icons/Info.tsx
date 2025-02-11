import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInfo = ({
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
      d="M11.918 7.005c.5-.052.992.329 1.067.825.092.467-.204.967-.656 1.116a1.005 1.005 0 0 1-1.19-.434 1.002 1.002 0 0 1 .779-1.507M11.803 10.28c.425-.132.91.197.943.64.011.381.002.762.005 1.143v4.952a.753.753 0 0 1-.75.738.754.754 0 0 1-.75-.738v-5.851c0-.136-.008-.276.04-.405a.76.76 0 0 1 .512-.48"
    />
  </svg>
);
export default SvgInfo;
