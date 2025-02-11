import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowRightFill = ({
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
      d="M10.278 8.023c.24-.052.503-.015.714.11.128.069.226.175.326.276q1.466 1.482 2.93 2.964a.91.91 0 0 1 .003 1.252Q12.726 14.17 11.2 15.71a1 1 0 0 1-.73.29c-.505-.002-.968-.42-.967-.907q-.004-3.092 0-6.184c0-.422.346-.802.776-.886"
    />
  </svg>
);
export default SvgArrowRightFill;
