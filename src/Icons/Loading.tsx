import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLoading = ({
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
      d="M18.996 7.732c.429-.262.568-.826.265-1.227a9.105 9.105 0 1 0 .469 10.308c.265-.427.076-.976-.376-1.198-.45-.222-.992-.032-1.268.388a7.284 7.284 0 1 1-.39-8.543c.314.394.87.534 1.3.272"
      opacity={0.5}
    />
  </svg>
);
export default SvgLoading;
