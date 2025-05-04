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
    <path
      fill="currentColor"
      d="M18.75 5.527H5.25a1.25 1.25 0 1 0 0 2.5h13.5a1.25 1.25 0 1 0 0-2.5"
    />
    <path
      fill="currentColor"
      d="M14.75 10.75h-9.5a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M18.75 15.973H5.25a1.25 1.25 0 1 0 0 2.5h13.5a1.25 1.25 0 1 0 0-2.5"
    />
  </svg>
);
export default SvgMenuHamburger;
