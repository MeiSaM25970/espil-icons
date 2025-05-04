import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgForwardSingleColor = ({
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
      d="M13.713 5.307a.75.75 0 0 1 .791.137l6.046 6.046c.261.268.265.73.014 1.006q-3.022 3.022-6.043 6.044a.75.75 0 0 1-1.046-1.077l2.445-2.445c.752-.749 1.497-1.506 2.255-2.25.244-.261.511-.503.754-.767-.24-.265-.51-.506-.754-.768-1.562-1.55-3.113-3.112-4.671-4.667A.77.77 0 0 1 13.25 6a.75.75 0 0 1 .463-.693"
    />
    <path
      fill="currentColor"
      d="M18.176 11.234c.244.263.514.504.754.769-.243.263-.51.505-.755.767l-.05-.018H3.988a.749.749 0 0 1-.208-1.467c.126-.043.26-.033.39-.033h13.957z"
    />
  </svg>
);
export default SvgForwardSingleColor;
