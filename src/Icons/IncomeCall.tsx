import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIncomeCall = ({
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
      d="M18.5 4.158a.98.98 0 0 1 1.117-.199c.376.18.61.612.538 1.025a1.05 1.05 0 0 1-.314.578q-6.335 6.335-12.67 12.671c-.453-.004-.906.007-1.359-.007-.026-.456.005-.913-.013-1.37 4.236-4.23 8.467-8.466 12.701-12.698"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M3.865 12.355c-.01-.57.566-1.047 1.123-.94a.98.98 0 0 1 .815.942c.006 1.5 0 3-.005 4.5.019.456-.013.913.014 1.369.453.014.906.003 1.359.007h4.471c.472-.003.897.386.947.853.083.545-.395 1.097-.949 1.082H4.8c-.503.003-.945-.466-.937-.964 0-2.283-.003-4.566.002-6.85"
    />
  </svg>
);
export default SvgIncomeCall;
