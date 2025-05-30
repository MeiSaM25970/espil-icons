import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAddSquareFill = ({
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
    <g clipPath="url(#AddSquareFill_svg__a)">
      <mask
        id="AddSquareFill_svg__b"
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
      <g mask="url(#AddSquareFill_svg__b)">
        <mask
          id="AddSquareFill_svg__c"
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
        <g fill="currentColor" mask="url(#AddSquareFill_svg__c)">
          <path d="M9.699.578C11.056.566 12.414.57 13.77.574c1.481.014 2.97.018 4.44.236.97.146 1.946.425 2.764.986a4.8 4.8 0 0 1 1.732 2.165c.276.664.426 1.374.52 2.085.176 1.337.185 2.688.198 4.035.008 1.63.013 3.26-.011 4.89-.029 1.264-.069 2.538-.32 3.782-.181.882-.504 1.753-1.067 2.465a4.85 4.85 0 0 1-2.09 1.531c-1 .39-2.076.517-3.138.593-1.627.104-3.259.086-4.889.088-1.59-.002-3.183.013-4.772-.092-1.173-.087-2.371-.24-3.445-.75A4.78 4.78 0 0 1 1.62 20.7c-.532-.9-.754-1.942-.876-2.969-.091-.777-.127-1.56-.148-2.342-.03-1.19-.025-2.38-.026-3.57.002-1.37-.005-2.74.06-4.107.04-.838.111-1.677.283-2.498.149-.702.383-1.394.764-2.006a4.8 4.8 0 0 1 2.074-1.824C4.409 1.082 5.119.91 5.833.803 7.113.616 8.408.595 9.7.578M9.37 2.082c-1.21.023-2.426.045-3.62.255-.51.094-1.017.23-1.482.463A3.3 3.3 0 0 0 2.95 4c-.26.423-.424.896-.537 1.378-.115.498-.18 1.006-.226 1.515-.076.88-.096 1.764-.108 2.647-.014 1.36-.01 2.72-.007 4.081.015 1.42.01 2.848.203 4.259.086.592.218 1.184.465 1.732.236.515.601.972 1.06 1.305.409.297.884.49 1.37.619.605.16 1.229.237 1.852.289 1.456.111 2.918.103 4.378.105 1.42-.003 2.84.014 4.26-.034a21 21 0 0 0 2.25-.175c.543-.08 1.085-.2 1.593-.414.49-.2.928-.52 1.27-.923.593-.698.822-1.619.951-2.506.119-.814.155-1.636.178-2.458.035-1.44.03-2.88.028-4.32-.01-1.412.004-2.826-.12-4.233-.071-.744-.172-1.495-.435-2.199-.293-.822-.909-1.529-1.704-1.896-.575-.279-1.207-.41-1.836-.502-1.437-.192-2.89-.183-4.336-.198-1.376-.001-2.752-.007-4.128.01" />
          <path
            d="M9.698 2.65c1.307-.015 2.615-.01 3.922-.006.9.008 1.801.014 2.7.085.998.082 2.032.213 2.92.712.434.245.814.587 1.108.991.295.407.495.876.627 1.359.158.576.235 1.171.287 1.766.109 1.419.091 2.843.098 4.265-.008 1.407.013 2.815-.069 4.22-.042.615-.1 1.23-.232 1.833-.11.495-.274.984-.533 1.421a3.5 3.5 0 0 1-1.174 1.197c-.442.273-.939.445-1.443.56-.571.128-1.156.19-1.74.23-1.338.089-2.68.072-4.02.077-1.469-.003-2.94.016-4.407-.083-.633-.047-1.267-.12-1.883-.281a4.3 4.3 0 0 1-1.322-.574c-.444-.3-.821-.698-1.086-1.163-.265-.459-.426-.97-.533-1.487-.263-1.347-.255-2.726-.275-4.092q-.009-1.86.003-3.72a36 36 0 0 1 .081-2.282c.052-.653.13-1.307.31-1.938a4.2 4.2 0 0 1 .577-1.256A3.5 3.5 0 0 1 4.76 3.44c.458-.26.966-.42 1.481-.524 1.138-.225 2.302-.243 3.457-.266m1.874 6.222a.66.66 0 0 0-.23.516v1.955q-.994.001-1.986.001a.657.657 0 1 0 .034 1.314h1.951v1.801c.001.127-.01.258.036.38.056.167.18.31.34.385a.66.66 0 0 0 .71-.095.65.65 0 0 0 .229-.487v-1.983h1.955a.656.656 0 0 0 .206-1.288c-.116-.037-.238-.026-.357-.027h-1.804V9.358a.657.657 0 0 0-1.084-.487"
            opacity={0.5}
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="AddSquareFill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddSquareFill;
