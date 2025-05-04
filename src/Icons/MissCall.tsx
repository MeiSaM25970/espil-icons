import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMissCall = ({
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
      d="M2.677 7.453c-.006-.503.458-.94.954-.936q3.418-.002 6.835 0a.975.975 0 0 1 .934.693c.133.423-.065.93-.468 1.125-.246.154-.545.122-.822.123-1.356.001-2.713.002-4.07-.006-.475.019-.95-.013-1.425.015-.008.43.002.858-.006 1.287q.006 2.271.001 4.542a.97.97 0 0 1-.789.936c-.523.12-1.09-.298-1.14-.83-.009-2.315-.001-4.633-.004-6.95"
    />
    <path
      fill="currentColor"
      d="M4.615 8.467c.475-.029.95.004 1.426-.015 1.958 1.964 3.923 3.924 5.884 5.886a8 8 0 0 0 1.122.978c.226.144.496.303.776.223.31-.09.566-.3.804-.51 1.666-1.633 3.254-3.342 4.846-5.046.178-.205.379-.419.657-.474a.955.955 0 0 1 1.033.398.96.96 0 0 1-.064 1.15c-1.665 1.776-3.32 3.563-5.051 5.276-.704.67-1.627 1.257-2.641 1.136-1.076-.119-1.913-.883-2.664-1.595-2.05-2.035-4.08-4.09-6.134-6.12.009-.43-.001-.858.006-1.287"
      opacity={0.5}
    />
  </svg>
);
export default SvgMissCall;
