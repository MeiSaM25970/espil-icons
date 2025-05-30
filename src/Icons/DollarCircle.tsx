import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDollarCircle = ({
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
      d="M11.173 1.281a10.76 10.76 0 0 1 4.898.766 10.8 10.8 0 0 1 4.71 3.751 10.7 10.7 0 0 1 1.969 6.173 10.7 10.7 0 0 1-1.772 5.944 10.8 10.8 0 0 1-4.652 3.93 10.8 10.8 0 0 1-6.757.63 10.74 10.74 0 0 1-5.185-2.889A10.73 10.73 0 0 1 1.41 13.86a10.77 10.77 0 0 1 1.13-6.97 10.8 10.8 0 0 1 5.347-4.825 10.7 10.7 0 0 1 3.286-.784m.06 1.5a9.2 9.2 0 0 0-4.76 1.801 9.28 9.28 0 0 0-3.257 4.512 9.3 9.3 0 0 0-.392 4.078 9.2 9.2 0 0 0 1.231 3.567 9.3 9.3 0 0 0 4.237 3.737 9.3 9.3 0 0 0 6.705.278 9.273 9.273 0 0 0 5.846-6.03 9.3 9.3 0 0 0 .3-4.138 9.2 9.2 0 0 0-1.086-3.134 9.3 9.3 0 0 0-4.164-3.845 9.26 9.26 0 0 0-4.66-.826"
    />
    <path
      fill="currentColor"
      d="M11.516 7.646a.6.6 0 0 1 1.051.158c.04.104.033.216.034.324.588.126 1.15.43 1.532.902.303.369.476.844.467 1.322a.6.6 0 0 1-1.199-.004c0-.408-.306-.753-.66-.92a1.8 1.8 0 0 0-1.178-.11c-.375.091-.733.331-.892.693a.78.78 0 0 0 .01.668c.224.468.757.712 1.257.72a2.9 2.9 0 0 1 1.797.578c.363.278.65.662.78 1.103.17.566.083 1.205-.243 1.7-.373.577-1.007.951-1.671 1.092.006.16-.006.331-.104.465a.6.6 0 0 1-.556.26.6.6 0 0 1-.5-.378c-.046-.11-.042-.23-.041-.347-.582-.124-1.137-.423-1.519-.884a2.05 2.05 0 0 1-.48-1.307.603.603 0 0 1 .618-.614c.233.005.454.16.538.377.06.131.029.281.07.418.074.275.275.502.515.647.354.214.79.265 1.193.195.35-.063.692-.245.898-.543a.83.83 0 0 0 .153-.636c-.063-.312-.293-.569-.565-.722A1.66 1.66 0 0 0 12 12.6a2.88 2.88 0 0 1-1.68-.536 2.23 2.23 0 0 1-.806-1.053 2.06 2.06 0 0 1 .18-1.734c.367-.609 1.02-1.003 1.706-1.149-.008-.167.008-.346.116-.482"
      opacity={0.5}
    />
  </svg>
);
export default SvgDollarCircle;
