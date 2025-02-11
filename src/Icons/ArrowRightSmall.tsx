import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowRightSmall = ({
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
      d="M9.588 8.508a.92.92 0 0 1 .68-.496.94.94 0 0 1 .801.25c1.052 1.025 2.098 2.055 3.15 3.081.213.199.319.498.269.78-.034.235-.19.428-.343.605q-1.537 1.506-3.075 3.01a.94.94 0 0 1-.908.226.9.9 0 0 1-.658-.775.87.87 0 0 1 .285-.718q1.26-1.236 2.523-2.47c-.807-.787-1.609-1.578-2.415-2.364-.096-.098-.203-.189-.272-.307a.86.86 0 0 1-.037-.822"
    />
  </svg>
);
export default SvgArrowRightSmall;
