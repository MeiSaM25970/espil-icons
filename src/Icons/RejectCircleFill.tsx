import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRejectCircleFill = ({
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
    <g fill="currentColor" clipPath="url(#rejectCircleFill_svg__a)">
      <path d="M11.71.254c1.606-.04 3.22.25 4.707.855a11.8 11.8 0 0 1 5.094 3.99 11.754 11.754 0 0 1 .717 12.69 11.8 11.8 0 0 1-3.79 4.042 11.7 11.7 0 0 1-6.163 1.916 11.7 11.7 0 0 1-6.46-1.755 11.8 11.8 0 0 1-4.211-4.514 11.7 11.7 0 0 1-1.199-3.562 11.8 11.8 0 0 1 .828-6.626A11.79 11.79 0 0 1 8.065.926 11.7 11.7 0 0 1 11.71.254m0 1.5a10.22 10.22 0 0 0-7.735 3.87 10.2 10.2 0 0 0-2.202 5.684 10.22 10.22 0 0 0 2.586 7.524 10.26 10.26 0 0 0 5.179 3.121c1.381.341 2.833.388 4.235.145a10.2 10.2 0 0 0 5.292-2.672 10.24 10.24 0 0 0 2.957-9.585 10.2 10.2 0 0 0-1.155-2.989 10.3 10.3 0 0 0-4.588-4.168 10.24 10.24 0 0 0-4.57-.93" />
      <path
        d="M11.323 2.573a9.46 9.46 0 0 1 4.779.912 9.5 9.5 0 0 1 4.113 3.84 9.46 9.46 0 0 1-.309 9.853 9.5 9.5 0 0 1-4.557 3.661 9.5 9.5 0 0 1-7.126-.174 9.5 9.5 0 0 1-4.2-3.597 9.459 9.459 0 0 1-.205-9.798 9.5 9.5 0 0 1 4.2-3.842 9.4 9.4 0 0 1 3.305-.855M9.247 11.38a.647.647 0 0 0 .174 1.265q2.535.001 5.069.001a.75.75 0 0 0 .37-.066.644.644 0 0 0-.062-1.184c-.136-.053-.285-.035-.427-.038q-2.4-.003-4.802 0c-.107.003-.217-.005-.322.022"
        opacity={0.5}
      />
    </g>
    <defs>
      <clipPath id="rejectCircleFill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRejectCircleFill;
