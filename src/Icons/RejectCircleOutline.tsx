import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRejectCircleOutline = ({
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
      d="M11.174 1.281a10.8 10.8 0 0 1 4.855.75 10.8 10.8 0 0 1 4.778 3.803 10.7 10.7 0 0 1 1.943 6.164 10.7 10.7 0 0 1-1.797 5.955 10.8 10.8 0 0 1-4.795 3.964 10.8 10.8 0 0 1-6.95.467 10.75 10.75 0 0 1-5.06-3.042 10.73 10.73 0 0 1-2.841-6.23 10.8 10.8 0 0 1 .285-3.81c.293-1.136.775-2.221 1.42-3.2a10.8 10.8 0 0 1 5.69-4.336c.8-.258 1.633-.42 2.472-.485m.06 1.5a9.2 9.2 0 0 0-4.01 1.296 9.3 9.3 0 0 0-3.618 4.031 9.2 9.2 0 0 0-.855 3.773 9.2 9.2 0 0 0 1.004 4.316 9.3 9.3 0 0 0 4.416 4.226 9.3 9.3 0 0 0 6.757.355A9.272 9.272 0 0 0 20.85 14.7a9.3 9.3 0 0 0 .293-4.115 9.2 9.2 0 0 0-1.117-3.188 9.3 9.3 0 0 0-4.155-3.8 9.26 9.26 0 0 0-4.636-.816"
    />
    <path
      fill="currentColor"
      d="M8.886 11.26c.477-.02.955-.003 1.432-.009h4.684a.751.751 0 0 1 0 1.5H8.998a.75.75 0 0 1-.113-1.491"
      opacity={0.5}
    />
  </svg>
);
export default SvgRejectCircleOutline;
