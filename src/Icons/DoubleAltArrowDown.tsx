import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDoubleAltArrowDown = ({
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
      d="M4.598 6.366a.75.75 0 0 1 .886.06Q8.742 9.22 12 12.012q3.258-2.791 6.516-5.584a.75.75 0 0 1 1.132.951c-.073.133-.198.223-.31.32l-6.799 5.828a.76.76 0 0 1-.944.105c-.082-.055-.154-.124-.229-.187l-6.85-5.872a.752.752 0 0 1 .082-1.206"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M4.287 10.768a.75.75 0 0 1 1.19-.347q3.26 2.796 6.523 5.59 3.254-2.786 6.506-5.576a.752.752 0 0 1 1.24.487.75.75 0 0 1-.274.661l-6.993 5.993a.75.75 0 0 1-.956.002l-7.01-6.008a.75.75 0 0 1-.226-.802"
    />
  </svg>
);
export default SvgDoubleAltArrowDown;
