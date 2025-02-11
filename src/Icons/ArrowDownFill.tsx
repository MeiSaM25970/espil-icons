import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDownFill = ({
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
      d="M8.648 9.547a1 1 0 0 1 .335-.047c2.037.002 4.074-.001 6.11.001.501 0 .924.489.906 1.008 0 .269-.12.53-.308.71q-1.532 1.515-3.064 3.03a.91.91 0 0 1-1.255 0q-1.541-1.526-3.084-3.051a1 1 0 0 1-.276-.855c.05-.361.303-.687.636-.796"
    />
  </svg>
);
export default SvgArrowDownFill;
