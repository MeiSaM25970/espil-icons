import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloseCircleFill = ({
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
    <g clipPath="url(#CloseCircleFill_svg__a)">
      <mask
        id="CloseCircleFill_svg__b"
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
      <g mask="url(#CloseCircleFill_svg__b)">
        <mask
          id="CloseCircleFill_svg__c"
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
        <g fill="currentColor" mask="url(#CloseCircleFill_svg__c)">
          <path d="M11.71.254c1.605-.04 3.218.25 4.705.855 2.055.83 3.86 2.259 5.147 4.061a11.73 11.73 0 0 1 2.186 6.563 11.75 11.75 0 0 1-1.686 6.34 11.8 11.8 0 0 1-3.895 3.931 11.72 11.72 0 0 1-6.616 1.738 11.7 11.7 0 0 1-6.044-1.948A11.77 11.77 0 0 1 1.412 17.1a11.6 11.6 0 0 1-1.086-3.752 11.8 11.8 0 0 1 .318-4.373A11.7 11.7 0 0 1 1.85 6.08a11.8 11.8 0 0 1 4.1-4.154A11.7 11.7 0 0 1 11.71.254m.002 1.5A10.23 10.23 0 0 0 4.26 5.28a10.2 10.2 0 0 0-2.463 5.727 10.24 10.24 0 0 0 2.56 7.824 10.26 10.26 0 0 0 5.333 3.16c2.372.548 4.939.225 7.09-.92a10.3 10.3 0 0 0 4.184-4.096 10.25 10.25 0 0 0-4.687-14.292c-1.423-.657-3-.974-4.566-.929" />
          <path
            d="M11.354 2.572a9.46 9.46 0 0 1 4.749.913 9.444 9.444 0 0 1 5.217 6.943 9.446 9.446 0 0 1-3.134 8.717 9.5 9.5 0 0 1-2.81 1.685 9.5 9.5 0 0 1-7.006-.102 9.5 9.5 0 0 1-4.192-3.423 9.5 9.5 0 0 1-1.386-3.17 9.48 9.48 0 0 1 .823-6.497 9.5 9.5 0 0 1 4.158-4.092 9.4 9.4 0 0 1 3.58-.974M9.445 9.353a.64.64 0 0 0-.188.745c.05.137.164.231.263.332L11.09 12c-.567.57-1.137 1.135-1.703 1.705a.642.642 0 0 0 .909.909q.851-.853 1.704-1.704.853.851 1.705 1.704a.643.643 0 0 0 .895-.924L12.91 12l1.69-1.69a.64.64 0 0 0 .187-.533.64.64 0 0 0-.42-.53.65.65 0 0 0-.646.122L12 11.089q-.855-.852-1.708-1.706a.645.645 0 0 0-.848-.03"
            opacity={0.5}
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="CloseCircleFill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloseCircleFill;
