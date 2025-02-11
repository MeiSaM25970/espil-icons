import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftBig = ({
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
      d="M14.435 4.506a.752.752 0 0 1 1.193.085c.18.27.156.656-.06.899L9.988 12l5.579 6.51a.75.75 0 0 1-1.132.985L8.423 12.48a.75.75 0 0 1 .002-.963z"
    />
  </svg>
);
export default SvgArrowLeftBig;
