import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuHamburger = ({
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
    <rect
      width={16}
      height={2.5}
      x={4}
      y={5.527}
      fill="currentColor"
      rx={1.25}
    />
    <rect
      width={12}
      height={2.5}
      x={4}
      y={10.75}
      fill="currentColor"
      opacity={0.5}
      rx={1.25}
    />
    <rect
      width={16}
      height={2.5}
      x={4}
      y={15.973}
      fill="currentColor"
      rx={1.25}
    />
  </svg>
);
export default SvgMenuHamburger;
