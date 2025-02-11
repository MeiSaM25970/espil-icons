import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHalfArrowLeft = ({
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
      d="M19.671 13.861a.77.77 0 0 0-.768-.768H5.097a.768.768 0 0 0 0 1.536h13.806a.77.77 0 0 0 .768-.768"
    />
    <path
      fill="currentColor"
      d="M9.39 9.598c-.3-.3-.786-.3-1.086 0l-3.718 3.718a.768.768 0 1 0 1.087 1.086l3.717-3.718c.3-.3.3-.786 0-1.086"
    />
  </svg>
);
export default SvgHalfArrowLeft;
