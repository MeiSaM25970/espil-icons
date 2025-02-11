import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftSmall = ({
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
      d="M12.913 8.277a.94.94 0 0 1 .745-.273.92.92 0 0 1 .742.482.86.86 0 0 1-.173 1.027q-1.269 1.245-2.54 2.487c.819.799 1.633 1.6 2.452 2.4.285.23.438.614.322.963a.91.91 0 0 1-.665.612.94.94 0 0 1-.866-.236q-1.458-1.426-2.914-2.853c-.102-.101-.21-.198-.306-.306a.85.85 0 0 1-.188-.75c.043-.214.19-.39.329-.554q1.53-1.5 3.062-2.999"
    />
  </svg>
);
export default SvgArrowLeftSmall;
