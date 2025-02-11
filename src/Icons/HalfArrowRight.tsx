import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHalfArrowRight = ({
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
      d="M4.329 13.861c0-.424.343-.768.768-.768h13.806a.768.768 0 0 1 0 1.536H5.097a.77.77 0 0 1-.768-.768"
    />
    <path
      fill="currentColor"
      d="M14.61 9.598c.3-.3.786-.3 1.086 0l3.718 3.718a.768.768 0 0 1-1.087 1.086l-3.717-3.718c-.3-.3-.3-.786 0-1.086"
    />
  </svg>
);
export default SvgHalfArrowRight;
