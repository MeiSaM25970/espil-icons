import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUp = ({
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
      d="M11.487 3.45a.753.753 0 0 1 1.036.014l6.015 6.014a.75.75 0 1 1-1.09 1.033c-1.56-1.564-3.127-3.12-4.683-4.688-.263-.245-.503-.515-.77-.755-.26.247-.504.51-.766.756-1.504 1.518-3.021 3.024-4.53 4.537-.113.108-.214.235-.358.304a.748.748 0 0 1-.897-1.172z"
    />
    <path
      fill="currentColor"
      d="M11.234 5.826c.262-.245.506-.51.767-.756.266.24.507.51.77.755l-.018.051v14.135a.75.75 0 0 1-1.5-.002V5.876z"
      opacity={0.5}
    />
  </svg>
);
export default SvgUp;
