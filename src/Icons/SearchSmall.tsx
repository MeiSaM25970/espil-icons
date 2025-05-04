import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSearchSmall = ({
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
      d="M9.541 1.278a9 9 0 0 1 4.508.811A9.04 9.04 0 0 1 17.9 5.507a9 9 0 0 1 1.127 2.744 9.03 9.03 0 0 1-.698 5.969 9.05 9.05 0 0 1-3.576 3.824 9 9 0 0 1-2.39.956 9.03 9.03 0 0 1-6.04-.65 9.04 9.04 0 0 1-3.778-3.446A8.95 8.95 0 0 1 1.32 11.38a9.1 9.1 0 0 1 .284-3.636 9 9 0 0 1 1.187-2.53 9.04 9.04 0 0 1 3.245-2.917 9 9 0 0 1 3.505-1.018m.054 1.317a7.65 7.65 0 0 0-3.446 1.157 7.7 7.7 0 0 0-3.03 3.634 7.7 7.7 0 0 0 .708 7.081 7.7 7.7 0 0 0 3.695 2.968 7.7 7.7 0 0 0 6.482-.48 7.72 7.72 0 0 0 3.33-3.728c.79-1.863.798-4.04.02-5.908a7.685 7.685 0 0 0-7.759-4.723"
    />
    <path
      fill="currentColor"
      d="M18.113 17.295c.392-.106.709.144.995.435q1.59 1.59 3.18 3.182c.433.436.545 1.077.101 1.5-.421.444-1.067.333-1.505-.096q-1.606-1.603-3.207-3.208c-.432-.438-.542-1.086-.098-1.508.146-.148.333-.254.534-.305"
      opacity={0.5}
    />
  </svg>
);
export default SvgSearchSmall;
