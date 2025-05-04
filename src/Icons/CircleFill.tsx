import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCircleFill = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#CircleFill_svg__a)">
      <mask
        id="CircleFill_svg__b"
        width={24}
        height={25}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M24 0H0v25h24z" />
      </mask>
      <g mask="url(#CircleFill_svg__b)">
        <mask
          id="CircleFill_svg__c"
          width={24}
          height={25}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path fill="#fff" d="M24 .5H0v24h24z" />
        </mask>
        <g fill="currentColor" mask="url(#CircleFill_svg__c)">
          <path d="M11.68.754a11.75 11.75 0 0 1 5.159 1.038 11.8 11.8 0 0 1 3.99 2.96 11.7 11.7 0 0 1 1.986 3.163 11.77 11.77 0 0 1 .837 6.055 11.7 11.7 0 0 1-1.72 4.795 11.8 11.8 0 0 1-3.475 3.543 11.7 11.7 0 0 1-4.848 1.826c-2.043.283-4.16.02-6.068-.765a11.8 11.8 0 0 1-3.35-2.094 11.75 11.75 0 0 1-2.828-3.784A11.7 11.7 0 0 1 .25 12.398c.013-1.469.299-2.937.85-4.299a11.78 11.78 0 0 1 6.944-6.666 11.7 11.7 0 0 1 3.635-.679m-.397 1.52a10.23 10.23 0 0 0-6.567 3.012 10.23 10.23 0 0 0-2.94 7.967c.116 1.61.622 3.19 1.463 4.567a10.3 10.3 0 0 0 3.262 3.326 10.2 10.2 0 0 0 4.022 1.493 10.4 10.4 0 0 0 3.851-.172 10.266 10.266 0 0 0 7.12-6.118c.834-2.041.977-4.356.407-6.486a10.2 10.2 0 0 0-1.792-3.628 10.3 10.3 0 0 0-3.878-3.072 10.26 10.26 0 0 0-4.949-.89" />
          <path
            d="M11.703 3.053a9.45 9.45 0 0 1 4.746 1.11 9.5 9.5 0 0 1 3.343 2.994 9.44 9.44 0 0 1 1.576 4.139 9.46 9.46 0 0 1-1.365 6.216 9.5 9.5 0 0 1-3.16 3.094 9.4 9.4 0 0 1-2.204.963 9.5 9.5 0 0 1-4 .277 9.35 9.35 0 0 1-3.845-1.463 9.5 9.5 0 0 1-3.044-3.276 9.4 9.4 0 0 1-1.201-4.572 9.5 9.5 0 0 1 .821-3.899 9.5 9.5 0 0 1 2.869-3.63 9.43 9.43 0 0 1 5.464-1.953"
            opacity={0.5}
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="CircleFill_svg__a">
        <path fill="#fff" d="M0 0h24v25H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircleFill;
