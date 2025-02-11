import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDownSmall = ({
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
      d="M15.493 9.588a.92.92 0 0 1 .495.68.94.94 0 0 1-.25.801c-1.025 1.052-2.055 2.098-3.081 3.15a.87.87 0 0 1-.78.269c-.235-.034-.428-.19-.605-.343q-1.506-1.537-3.01-3.075a.94.94 0 0 1-.226-.908.9.9 0 0 1 .775-.658.87.87 0 0 1 .718.285q1.236 1.26 2.47 2.523c.787-.807 1.578-1.609 2.364-2.415.098-.096.189-.203.307-.272a.86.86 0 0 1 .822-.037"
    />
  </svg>
);
export default SvgArrowDownSmall;
