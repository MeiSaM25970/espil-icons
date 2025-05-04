import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoon = ({
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
      d="M19.615 15.139c-.128-.216-.488-.551-1.382-.392a6.8 6.8 0 0 1-1.502.104 6.72 6.72 0 0 1-4.721-2.253c-1.038-1.158-1.678-2.668-1.685-4.297 0-.91.175-1.79.535-2.62.351-.807.104-1.23-.072-1.406-.184-.184-.615-.44-1.462-.088a8.24 8.24 0 0 0-5.048 8.156c.24 3.299 2.556 6.119 5.623 7.181.735.256 1.51.407 2.309.44q.19.014.383.016a8.39 8.39 0 0 0 6.766-3.411c.535-.743.391-1.215.256-1.43"
    />
  </svg>
);
export default SvgMoon;
