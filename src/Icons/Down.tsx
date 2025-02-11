import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDown = ({
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
      d="M11.58 3.382a.748.748 0 0 1 1.174.608v14.136l.02.048c-.264.244-.505.514-.77.755-.266-.24-.506-.51-.77-.755l.02-.048V3.988c0-.239.128-.472.325-.606"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M5.328 13.667a.75.75 0 0 1 1.238-.163c1.554 1.558 3.116 3.108 4.665 4.67.263.244.503.515.769.755.265-.24.506-.511.77-.755 1.549-1.563 3.11-3.112 4.664-4.67a.77.77 0 0 1 .594-.253.75.75 0 0 1 .527 1.254l-6.046 6.046a.754.754 0 0 1-1.02-.001l-5.91-5.91c-.083-.086-.177-.165-.233-.273a.75.75 0 0 1-.018-.7"
    />
  </svg>
);
export default SvgDown;
