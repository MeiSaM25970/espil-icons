import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSend = ({
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
      d="m15.45 4.467-7.525 2.5c-5.058 1.691-5.058 4.45 0 6.133l2.233.742.742 2.233c1.683 5.058 4.45 5.058 6.133 0l2.509-7.517c1.116-3.375-.717-5.216-4.092-4.091m.267 4.483-3.167 3.183a.62.62 0 0 1-.442.184.62.62 0 0 1-.441-.184.63.63 0 0 1 0-.883l3.166-3.183a.63.63 0 0 1 .884 0 .63.63 0 0 1 0 .883"
    />
  </svg>
);
export default SvgSend;
