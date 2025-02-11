import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBackSingleColor = ({
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
      d="M9.48 5.46a.75.75 0 0 1 .764-.169.753.753 0 0 1 .264 1.26L5.81 11.25c-.249.25-.501.497-.747.75.245.254.498.5.747.75l4.729 4.73a.752.752 0 0 1-.415 1.26.75.75 0 0 1-.644-.198L3.45 12.51a.753.753 0 0 1-.002-1.019z"
    />
    <path
      fill="currentColor"
      d="M5.063 12c.246-.253.498-.5.747-.75h14.2a.75.75 0 0 1 0 1.5H5.81c-.249-.25-.502-.496-.747-.75"
    />
  </svg>
);
export default SvgBackSingleColor;
