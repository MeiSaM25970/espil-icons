import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDoubleAltArrowUp = ({
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
      d="M11.73 6.3a.76.76 0 0 1 .766.137l6.768 5.8c.115.105.246.195.341.32a.752.752 0 0 1-.44 1.175.75.75 0 0 1-.642-.154L12 7.988q-3.132 2.685-6.263 5.368c-.176.143-.337.332-.572.376a.755.755 0 0 1-.86-.451.76.76 0 0 1 .101-.74c.067-.084.153-.15.234-.22l6.768-5.801c.097-.086.197-.175.321-.22"
    />
    <path
      fill="currentColor"
      d="M11.652 10.336a.75.75 0 0 1 .838.096l6.832 5.857c.075.065.154.126.223.196a.748.748 0 0 1-.26 1.209.75.75 0 0 1-.718-.082c-.075-.054-.142-.118-.212-.177Q15.177 14.71 12 11.989l-6.5 5.57a.753.753 0 1 1-.985-1.132l6.705-5.746c.144-.115.27-.255.432-.345"
      opacity={0.5}
    />
  </svg>
);
export default SvgDoubleAltArrowUp;
