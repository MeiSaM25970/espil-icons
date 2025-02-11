import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInfoCircleOutline = ({
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
      d="M11.172 1.282a10.76 10.76 0 0 1 4.857.75 10.8 10.8 0 0 1 4.802 3.835A10.7 10.7 0 0 1 22.75 12c.007 2.141-.65 4.278-1.859 6.044a10.8 10.8 0 0 1-4.755 3.882 10.8 10.8 0 0 1-6.93.458 10.75 10.75 0 0 1-5.073-3.058 10.72 10.72 0 0 1-2.799-5.974 10.8 10.8 0 0 1 .308-4.237 10.78 10.78 0 0 1 3.98-5.769 10.7 10.7 0 0 1 5.55-2.064m.06 1.5a9.2 9.2 0 0 0-4.76 1.8 9.3 9.3 0 0 0-3.234 4.446 9.3 9.3 0 0 0-.425 4.052 9.2 9.2 0 0 0 1.183 3.56 9.3 9.3 0 0 0 4.362 3.866 9.3 9.3 0 0 0 6.681.233 9.27 9.27 0 0 0 5.854-6.184 9.3 9.3 0 0 0 .25-3.97 9.2 9.2 0 0 0-1.107-3.17 9.3 9.3 0 0 0-4.143-3.808 9.26 9.26 0 0 0-4.66-.825"
    />
    <path
      fill="currentColor"
      d="M11.918 7.005c.498-.052.99.328 1.067.823.092.468-.204.97-.656 1.118a1.005 1.005 0 0 1-1.212-.474 1.005 1.005 0 0 1 .248-1.243 1 1 0 0 1 .553-.224M11.801 10.28c.426-.132.91.196.944.64.012.36.002.722.005 1.083v5.012a.753.753 0 0 1-.748.738.754.754 0 0 1-.751-.74v-6a.754.754 0 0 1 .55-.734"
      opacity={0.5}
    />
  </svg>
);
export default SvgInfoCircleOutline;
