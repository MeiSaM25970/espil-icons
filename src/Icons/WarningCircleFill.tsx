import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWarningCircleFill = ({
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
    <g clipPath="url(#WarningCircleFill_svg__a)">
      <mask
        id="WarningCircleFill_svg__b"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M24 0H0v24h24z" />
      </mask>
      <g mask="url(#WarningCircleFill_svg__b)">
        <mask
          id="WarningCircleFill_svg__c"
          width={24}
          height={24}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path fill="#fff" d="M24 0H0v24h24z" />
        </mask>
        <g fill="currentColor" mask="url(#WarningCircleFill_svg__c)">
          <path d="M11.724.253c1.72-.04 3.448.3 5.02.996a11.8 11.8 0 0 1 3.967 2.871c.906 1 1.64 2.158 2.15 3.407a11.76 11.76 0 0 1-1.142 11.064 11.9 11.9 0 0 1-3.424 3.323 11.761 11.761 0 0 1-10.943.876A11.8 11.8 0 0 1 3.9 20.505 11.733 11.733 0 0 1 .27 11.292a11.7 11.7 0 0 1 1.26-4.634A11.8 11.8 0 0 1 4.554 2.91a11.7 11.7 0 0 1 7.17-2.656m-.442 1.52A10.219 10.219 0 0 0 5.31 4.232a10.3 10.3 0 0 0-2.752 3.77 10.25 10.25 0 0 0-.805 4.235c.034 1.66.484 3.307 1.295 4.755a10.3 10.3 0 0 0 3.305 3.559 10.2 10.2 0 0 0 3.773 1.523 10.3 10.3 0 0 0 6.436-.899 10.3 10.3 0 0 0 3.643-3.04 10.2 10.2 0 0 0 1.906-4.48 10.3 10.3 0 0 0-.19-4.217 10.15 10.15 0 0 0-1.83-3.726 10.3 10.3 0 0 0-3.827-3.034 10.3 10.3 0 0 0-4.98-.903" />
          <path
            d="M11.705 2.553a9.4 9.4 0 0 1 4.67 1.069 9.5 9.5 0 0 1 3.508 3.171 9.4 9.4 0 0 1 1.464 3.848 9.434 9.434 0 0 1-2.74 8.102 9.4 9.4 0 0 1-3.735 2.253A9.45 9.45 0 1 1 10.416 2.68a10 10 0 0 1 1.289-.127m.135 4.524a.64.64 0 0 0-.459.435c-.043.13-.027.27-.03.405v4.948a.65.65 0 0 0 .362.569c.28.143.652.041.82-.224.12-.165.112-.375.108-.568q.001-2.363-.001-4.724c-.005-.162.019-.333-.057-.482a.65.65 0 0 0-.743-.36m.019 7.503c-.486.065-.833.604-.694 1.072.106.436.597.731 1.031.615.444-.093.75-.587.64-1.026-.084-.432-.548-.735-.977-.661"
            opacity={0.5}
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="WarningCircleFill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWarningCircleFill;
