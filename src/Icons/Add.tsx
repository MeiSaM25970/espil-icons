import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAdd = ({
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
      d="M11.519 7.145a.877.877 0 0 1 1.356.725v3.255h3.044c.15.001.305-.01.451.035a.878.878 0 0 1 .487 1.32.87.87 0 0 1-.723.394q-1.63.001-3.259.001v3.047c0 .16.01.324-.043.477a.878.878 0 0 1-1.314.457.88.88 0 0 1-.393-.724v-3.257H7.868a.878.878 0 0 1-.75-1.314.88.88 0 0 1 .751-.435q1.629-.002 3.256 0V7.866c0-.286.153-.568.393-.722"
    />
  </svg>
);
export default SvgAdd;
