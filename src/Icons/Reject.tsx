import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReject = ({
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
      d="M8.887 11.26c.398-.02.796-.003 1.194-.009h4.92a.75.75 0 0 1 .209 1.47c-.127.04-.26.03-.39.03H9.208c-.148-.001-.301.013-.444-.037a.75.75 0 0 1-.514-.712.754.754 0 0 1 .637-.742"
    />
  </svg>
);
export default SvgReject;
