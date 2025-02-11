import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSearch = ({
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
      d="M10.693 1.282a10.26 10.26 0 0 1 5.134.924 10.3 10.3 0 0 1 4.386 3.893c.597.96 1.033 2.02 1.283 3.124.518 2.268.24 4.712-.794 6.798a10.3 10.3 0 0 1-4.073 4.356c-.848.491-1.768.86-2.721 1.09a10.3 10.3 0 0 1-6.88-.74A10.3 10.3 0 0 1 2.725 16.8a10.2 10.2 0 0 1-1.395-4.015 10.3 10.3 0 0 1 .323-4.14c.296-1.024.754-2 1.352-2.882A10.3 10.3 0 0 1 6.7 2.441a10.2 10.2 0 0 1 3.992-1.16m.06 1.5A8.7 8.7 0 0 0 6.83 4.1a8.8 8.8 0 0 0-3.451 4.138 8.77 8.77 0 0 0 .806 8.066 8.8 8.8 0 0 0 4.209 3.38 8.77 8.77 0 0 0 7.382-.547 8.8 8.8 0 0 0 3.793-4.246c.9-2.122.908-4.602.021-6.73a8.8 8.8 0 0 0-3.827-4.304 8.75 8.75 0 0 0-5.01-1.075"
    />
    <path
      fill="currentColor"
      d="M19.809 19.274a.75.75 0 0 1 .714.191l2.024 2.025a.75.75 0 0 1-.018 1.04.753.753 0 0 1-1.039.02q-1.02-1.02-2.04-2.041a.752.752 0 0 1 .359-1.235"
      opacity={0.5}
    />
  </svg>
);
export default SvgSearch;
