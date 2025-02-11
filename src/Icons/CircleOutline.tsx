import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCircleOutline = ({
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
      d="M11.193 1.28a10.76 10.76 0 0 1 5.09.859 10.8 10.8 0 0 1 3.9 2.893 10.7 10.7 0 0 1 2.083 3.787c.662 2.131.637 4.47-.074 6.585a10.7 10.7 0 0 1-2.608 4.203A10.8 10.8 0 0 1 15.7 22.09a10.8 10.8 0 0 1-6.262.348 10.775 10.775 0 0 1-6.821-5.192 10.7 10.7 0 0 1-1.353-4.692 10.8 10.8 0 0 1 .6-4.145 10.7 10.7 0 0 1 2.612-4.086 10.72 10.72 0 0 1 6.717-3.043m.556 1.472a9.2 9.2 0 0 0-3.66.862 9.27 9.27 0 0 0-3.63 3.025 9.2 9.2 0 0 0-1.603 3.955 9.228 9.228 0 0 0 1.996 7.274 9.3 9.3 0 0 0 3.57 2.659 9.3 9.3 0 0 0 4.89.624 9.2 9.2 0 0 0 4.66-2.097 9.3 9.3 0 0 0 2.749-3.98 9.3 9.3 0 0 0 .482-3.961 9.2 9.2 0 0 0-1.282-3.886 9.239 9.239 0 0 0-8.172-4.475"
    />
  </svg>
);
export default SvgCircleOutline;
