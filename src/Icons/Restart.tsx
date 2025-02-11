import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRestart = ({
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
      d="M17.9 3.712a.751.751 0 0 1 1.207.588v4.253a.747.747 0 0 1-.753.745h-4.25a.75.75 0 0 1-.189-1.473c.12-.036.246-.026.369-.027h2.187c.38-.001.758.002 1.137-.002V4.304a.75.75 0 0 1 .293-.59"
    />
    <path
      fill="currentColor"
      d="M11.182 4.787a8.76 8.76 0 0 1 5.416 1.268q.531.33 1.01.731v1.01c-.379.004-.758 0-1.137.002-1.394-1.116-3.22-1.664-5-1.53a7.23 7.23 0 0 0-5.64 3.414 7.2 7.2 0 0 0-.981 2.604 7.254 7.254 0 0 0 6.782 8.449 7.25 7.25 0 0 0 3.881-.9 7.3 7.3 0 0 0 2.561-2.388 7.2 7.2 0 0 0 1.148-3.382 7.3 7.3 0 0 0-.233-2.482.753.753 0 0 1 .527-.879.753.753 0 0 1 .919.489 8.77 8.77 0 0 1-.136 5.062 8.76 8.76 0 0 1-2.988 4.19 8.73 8.73 0 0 1-5.074 1.795 8.76 8.76 0 0 1-4.26-.972 8.8 8.8 0 0 1-3.395-3.126 8.75 8.75 0 0 1-1.309-5.295 8.74 8.74 0 0 1 4.21-6.846 8.7 8.7 0 0 1 3.699-1.214"
      opacity={0.5}
    />
  </svg>
);
export default SvgRestart;
