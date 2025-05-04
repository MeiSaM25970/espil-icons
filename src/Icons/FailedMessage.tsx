import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFailedMessage = ({
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
      fill="#F64C4C"
      stroke="#fff"
      d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z"
    />
    <path
      fill="#fff"
      stroke="#fff"
      d="M11.977 15.883a.51.51 0 0 1 .511.39l.004.02c.03.14-.018.31-.128.43l-.05.049-.005.004a.5.5 0 0 1-.16.084l-.062.016a.52.52 0 0 1-.41-.11l-.045-.043a.5.5 0 0 1-.126-.26l-.005-.098v-.008a.5.5 0 0 1 .077-.244l.053-.068.002-.002c.064-.07.15-.12.24-.145l.092-.014zM11.75 7.36c-.001-.083.065-.181.154-.22l.04-.012.015-.004c.082-.02.203.034.259.123l.02.04.002.009.003.014.004.052.001.095.002.134-.001 5.805c-.002.11-.129.23-.238.226h-.026c-.097.001-.204-.093-.23-.187l-.005-.04z"
    />
  </svg>
);
export default SvgFailedMessage;
