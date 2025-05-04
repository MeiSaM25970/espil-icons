import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuVerticalDotsFill = ({
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
      d="M12 20.4a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2"
    />
    <path
      fill="currentColor"
      d="M12 14.1a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M12 7.8a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2"
    />
  </svg>
);
export default SvgMenuVerticalDotsFill;
