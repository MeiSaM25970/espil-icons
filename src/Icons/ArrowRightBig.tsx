import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowRightBig = ({
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
      d="M8.284 4.776a.752.752 0 0 1 1.28-.27q3.007 3.506 6.01 7.012a.75.75 0 0 1 0 .965q-2.998 3.499-5.996 6.996a.75.75 0 1 1-1.145-.969l5.58-6.51L8.43 5.49a.75.75 0 0 1-.147-.713"
    />
  </svg>
);
export default SvgArrowRightBig;
