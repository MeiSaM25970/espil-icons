import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDirection = ({
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
      d="M3.77 6.258a.99.99 0 0 1 1.047-.616.99.99 0 0 1 .857.92c.007.891-.008 1.785.103 2.67.075.573.198 1.154.49 1.658.217.378.55.683.939.875.581.29 1.237.385 1.88.418.552.02 1.104.005 1.657.01h6.18c.328.33.66.656.986.988-.332.339-.671.67-1.004 1.008l-.02-.021q-3.471.002-6.942 0c-.717.009-1.439-.01-2.144-.148-.934-.175-1.852-.565-2.537-1.237a4.35 4.35 0 0 1-.968-1.43c-.257-.598-.397-1.24-.479-1.882-.105-.847-.113-1.701-.115-2.552.003-.222-.02-.452.07-.66"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M14.805 8.053a.99.99 0 0 1 1.003.231q2.111 2.111 4.223 4.224a.993.993 0 0 1-.006 1.352l-4.223 4.223a.99.99 0 0 1-1.243.105.99.99 0 0 1-.139-1.517c.83-.827 1.654-1.657 2.484-2.482.333-.338.672-.67 1.004-1.008-.326-.332-.658-.659-.986-.988l-2.51-2.51a.99.99 0 0 1 .393-1.63"
    />
  </svg>
);
export default SvgDirection;
