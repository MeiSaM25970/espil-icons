import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpBig = ({
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
      d="M11.518 8.424a.75.75 0 0 1 .965.002l7.013 6.01a.752.752 0 0 1-.373 1.303.75.75 0 0 1-.614-.173L12 9.987l-6.51 5.58a.752.752 0 0 1-.984-1.133z"
    />
  </svg>
);
export default SvgArrowUpBig;
