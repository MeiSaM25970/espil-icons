import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClockCircle = ({
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
      d="M11.66 1.27a10.73 10.73 0 0 1 8.698 3.99 10.7 10.7 0 0 1 1.91 3.58c.654 2.117.633 4.439-.065 6.543a10.74 10.74 0 0 1-2.423 4.037 10.8 10.8 0 0 1-4.02 2.66c-1.853.696-3.9.858-5.842.477A10.7 10.7 0 0 1 6.105 21a10.8 10.8 0 0 1-3.278-3.38 10.7 10.7 0 0 1-1.507-4.368 10.9 10.9 0 0 1 .17-3.515A10.7 10.7 0 0 1 3.5 5.432a10.8 10.8 0 0 1 3.424-2.897A10.7 10.7 0 0 1 11.66 1.27m-.137 1.506A9.214 9.214 0 0 0 6.2 4.806a9.3 9.3 0 0 0-2.8 3.789 9.239 9.239 0 0 0 2.053 9.951 9.24 9.24 0 0 0 3.783 2.293 9.3 9.3 0 0 0 4.462.263 9.2 9.2 0 0 0 4.331-2.083 9.3 9.3 0 0 0 2.646-3.81c.504-1.36.674-2.84.506-4.281a9.2 9.2 0 0 0-1.474-4.023 9.233 9.233 0 0 0-8.184-4.129"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M11.325 7.679a.753.753 0 0 1 1.25-.144c.109.13.17.3.17.47V11.7l2.286 2.286a.751.751 0 0 1-1.062 1.06l-2.496-2.496a.76.76 0 0 1-.227-.537V8.075a.8.8 0 0 1 .079-.396"
    />
  </svg>
);
export default SvgClockCircle;
