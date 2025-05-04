import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDeliveryMessage = ({
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
      d="M13.623 7.523a1.014 1.014 0 0 1 1.433 1.434l-6.53 6.53c-.166.162-.319.351-.54.441-.375.17-.845.079-1.13-.217q-1.33-1.328-2.658-2.657a1.05 1.05 0 0 1-.312-.542 1.014 1.014 0 0 1 1.684-.954l2.01 2.008q3.022-3.02 6.043-6.043M18.409 8.28a1.014 1.014 0 0 1 1.433 1.434l-6.53 6.53c-.166.163-.32.352-.54.442a1.02 1.02 0 0 1-1.13-.218c-.888-.884-.168-.168-1.055-1.053-.152-.146.01.016-.388-.445-.251-.251-.445-.223.447-1.115.684-.684.97-.275 1.313.064l.407.405q3.022-3.02 6.043-6.044"
    />
  </svg>
);
export default SvgDeliveryMessage;
