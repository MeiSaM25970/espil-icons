import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSendMessage = ({
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
      d="M16.016 7.904a1.014 1.014 0 0 1 1.433 1.434l-6.53 6.53c-.166.162-.319.352-.54.441-.374.17-.844.079-1.13-.217q-1.33-1.328-2.658-2.657a1.05 1.05 0 0 1-.312-.542 1.014 1.014 0 0 1 1.684-.954l2.01 2.009q3.022-3.022 6.043-6.044"
    />
  </svg>
);
export default SvgSendMessage;
