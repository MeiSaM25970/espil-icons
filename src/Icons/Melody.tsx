import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMelody = ({
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
      d="M12.003 5.03c.02-.717.847-1.241 1.502-.946 1.138.556 2.268 1.13 3.4 1.698.45.223.694.78.557 1.264-.143.618-.882.991-1.463.743-.605-.287-1.197-.603-1.799-.894v8.486c-.004.556.027 1.121-.11 1.665a3.86 3.86 0 0 1-2.017 2.546 3.85 3.85 0 0 1-2.685.287 3.87 3.87 0 0 1-2.33-1.737 3.87 3.87 0 0 1-.496-2.692 3.857 3.857 0 0 1 5.436-2.8c.004-2.54-.005-5.08.005-7.62m-2.038 9.502a1.66 1.66 0 0 0-1.12.926 1.657 1.657 0 0 0 1.221 2.313 1.648 1.648 0 0 0 1.93-1.701 1.652 1.652 0 0 0-2.031-1.538"
    />
  </svg>
);
export default SvgMelody;
