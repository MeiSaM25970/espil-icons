import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpFill = ({
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
      d="M11.783 9.527a.91.91 0 0 1 .862.243l3.066 3.033c.252.245.351.641.25.985-.106.4-.471.709-.87.71-2.049.003-4.097 0-6.147.002a.93.93 0 0 1-.852-.567 1.01 1.01 0 0 1 .196-1.129l3.067-3.035a.9.9 0 0 1 .428-.242"
    />
  </svg>
);
export default SvgArrowUpFill;
