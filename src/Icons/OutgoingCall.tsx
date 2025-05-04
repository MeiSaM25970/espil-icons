import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOutgoingCall = ({
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
      d="M11.436 5c-.13-.556.35-1.162.922-1.153h6.845c.5-.009.957.454.943.954-.003 2.3 0 4.6-.001 6.9-.015.487-.456.917-.947.908-.524.026-.997-.444-.987-.965 0-1.497-.004-2.994.005-4.49-.014-.456.004-.912-.013-1.367-.45-.011-.9.002-1.35-.009-1.479.008-2.957.002-4.435.004A.975.975 0 0 1 11.436 5"
    />
    <path
      fill="currentColor"
      d="M16.852 5.778c.45.01.9-.003 1.351.009.017.455-.001.91.013 1.367-4.22 4.227-8.448 8.448-12.671 12.673-.225.237-.564.37-.889.31a.98.98 0 0 1-.781-.726.97.97 0 0 1 .268-.926c4.237-4.235 8.47-8.474 12.71-12.707"
      opacity={0.5}
    />
  </svg>
);
export default SvgOutgoingCall;
