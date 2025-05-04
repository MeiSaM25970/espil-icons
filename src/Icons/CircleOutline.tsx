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
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M11.193 1.78a10.76 10.76 0 0 1 5.09.859 10.8 10.8 0 0 1 3.9 2.893 10.7 10.7 0 0 1 2.082 3.787c.663 2.131.638 4.47-.073 6.585a10.7 10.7 0 0 1-2.608 4.204 10.8 10.8 0 0 1-3.884 2.481 10.8 10.8 0 0 1-6.262.348 10.775 10.775 0 0 1-6.821-5.192 10.7 10.7 0 0 1-1.353-4.692 10.8 10.8 0 0 1 .6-4.145 10.7 10.7 0 0 1 2.612-4.086 10.72 10.72 0 0 1 6.717-3.043m.556 1.473a9.2 9.2 0 0 0-3.66.86A9.27 9.27 0 0 0 4.46 7.14a9.2 9.2 0 0 0-1.603 3.954 9.227 9.227 0 0 0 1.996 7.273 9.3 9.3 0 0 0 3.569 2.66 9.3 9.3 0 0 0 4.89.624 9.2 9.2 0 0 0 4.662-2.097 9.3 9.3 0 0 0 2.748-3.98 9.3 9.3 0 0 0 .481-3.961 9.2 9.2 0 0 0-1.28-3.886 9.239 9.239 0 0 0-8.172-4.475"
    />
  </svg>
);
export default SvgCircleOutline;
