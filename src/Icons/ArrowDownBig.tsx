import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDownBig = ({
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
      d="M4.772 8.286a.75.75 0 0 1 .716.145L12 14.013l6.48-5.554a.754.754 0 0 1 1.256.389c.07.307-.086.625-.34.8l-6.912 5.926a.75.75 0 0 1-.966 0l-6.77-5.802c-.115-.106-.249-.194-.346-.318a.752.752 0 0 1 .37-1.167"
    />
  </svg>
);
export default SvgArrowDownBig;
