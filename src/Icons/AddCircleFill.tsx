import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAddCircleFill = ({
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
    <g clipPath="url(#AddCircleFill_svg__a)">
      <mask
        id="AddCircleFill_svg__b"
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
      <g mask="url(#AddCircleFill_svg__b)">
        <mask
          id="AddCircleFill_svg__c"
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
        <g fill="currentColor" mask="url(#AddCircleFill_svg__c)">
          <path d="M11.711.254c1.605-.04 3.218.25 4.705.855a11.8 11.8 0 0 1 5.057 3.939 11.757 11.757 0 0 1 .69 12.854 11.8 11.8 0 0 1-3.796 3.976 11.7 11.7 0 0 1-6.095 1.87A11.7 11.7 0 0 1 5.78 21.97a11.8 11.8 0 0 1-4.177-4.492A11.7 11.7 0 0 1 .386 13.8a11.8 11.8 0 0 1 .929-6.694A11.8 11.8 0 0 1 8.062.927a11.7 11.7 0 0 1 3.65-.673m0 1.5a10.2 10.2 0 0 0-5.679 1.912A10.3 10.3 0 0 0 2.283 8.73c-.429 1.27-.6 2.626-.51 3.963a10.23 10.23 0 0 0 2.786 6.358 10.247 10.247 0 0 0 16.417-2.094 10.25 10.25 0 0 0-.243-10.327 10.236 10.236 0 0 0-9.022-4.875" />
          <path
            d="M11.326 2.574a9.47 9.47 0 0 1 4.493.78 9.443 9.443 0 0 1 5.361 10.893 9.44 9.44 0 0 1-2.869 4.786 9.5 9.5 0 0 1-2.703 1.704 9.5 9.5 0 0 1-6.934.112 9.5 9.5 0 0 1-4.435-3.457 9.4 9.4 0 0 1-1.448-3.26 9.48 9.48 0 0 1 .794-6.434 9.437 9.437 0 0 1 7.741-5.124m.032 6.817c-.007.654 0 1.309-.003 1.964-.644.002-1.289-.001-1.933.001a.65.65 0 0 0-.598.407.647.647 0 0 0 .597.882h1.934q0 .968.001 1.935a.65.65 0 0 0 .407.597.646.646 0 0 0 .881-.598q.001-.968.001-1.934c.655-.002 1.31.003 1.964-.002a.644.644 0 0 0 0-1.285c-.655-.006-1.31 0-1.964-.003-.002-.655.003-1.31-.002-1.964A.646.646 0 0 0 12 8.778a.645.645 0 0 0-.642.613"
            opacity={0.5}
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="AddCircleFill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddCircleFill;
