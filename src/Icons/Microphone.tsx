import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicrophone = ({
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
      fillRule="evenodd"
      d="M20.33 11.674a8.33 8.33 0 1 1-16.66-.001v-.925a.926.926 0 1 1 1.852 0v.925a6.479 6.479 0 0 0 12.957 0v-.925a.926.926 0 1 1 1.851 0z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.628 11.675a4.628 4.628 0 0 1-9.255 0V5.503a4.628 4.628 0 0 1 9.255 0zM12 2.726a2.777 2.777 0 0 0-2.776 2.776v6.172a2.777 2.777 0 0 0 5.553 0V5.503A2.777 2.777 0 0 0 12 2.727"
      clipRule="evenodd"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 18.189c.511 0 .926.311.926.696v3.543c0 .385-.415.697-.926.697-.51 0-.925-.312-.925-.697v-3.543c0-.385.414-.697.925-.697"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMicrophone;
