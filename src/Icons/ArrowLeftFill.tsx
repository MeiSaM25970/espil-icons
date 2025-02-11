import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftFill = ({
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
      d="M13.264 8.032c.582-.16 1.24.296 1.235.878q.002 3.09 0 6.183c0 .441-.382.833-.837.894a1 1 0 0 1-.862-.278l-3.052-3.083a.91.91 0 0 1 .021-1.271l2.894-2.923c.161-.178.353-.347.601-.4"
    />
  </svg>
);
export default SvgArrowLeftFill;
