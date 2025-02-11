import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWarning = ({
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
      d="M11.839 7.01c.356-.086.749.142.868.485.052.143.034.297.04.446v5.826a.755.755 0 0 1-.759.726.756.756 0 0 1-.74-.726v-6.03a.756.756 0 0 1 .59-.727M11.929 15.755c.483-.043.963.324 1.048.802a1.01 1.01 0 0 1-.804 1.182 1.02 1.02 0 0 1-.909-.302 1 1 0 0 1 .665-1.682"
    />
  </svg>
);
export default SvgWarning;
