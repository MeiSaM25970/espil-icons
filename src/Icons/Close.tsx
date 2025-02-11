import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClose = ({
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
      d="M7.082 7.727A1.153 1.153 0 0 1 8.96 7.33L12 10.37l2.854-2.855c.132-.13.256-.275.42-.365a1.16 1.16 0 0 1 1.21.043c.433.277.629.86.45 1.343-.07.215-.217.39-.38.54Q15.091 10.536 13.63 12l2.875 2.875c.116.116.242.227.326.37a1.158 1.158 0 0 1-.633 1.699 1.15 1.15 0 0 1-1.16-.276l-3.039-3.038-3.038 3.038a1.14 1.14 0 0 1-.747.33 1.16 1.16 0 0 1-1.058-.57c-.26-.434-.189-1.036.175-1.389l3.039-3.04-3.038-3.037a1.15 1.15 0 0 1-.25-1.235"
    />
  </svg>
);
export default SvgClose;
