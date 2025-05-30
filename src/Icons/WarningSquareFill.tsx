import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWarningSquareFill = ({
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
    <g clipPath="url(#WarningSquareFill_svg__a)">
      <mask
        id="WarningSquareFill_svg__b"
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
      <g mask="url(#WarningSquareFill_svg__b)">
        <mask
          id="WarningSquareFill_svg__c"
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
        <g fill="currentColor" mask="url(#WarningSquareFill_svg__c)">
          <path d="M10.58.572q1.785-.007 3.57.006c1.17.011 2.345.026 3.511.16.88.1 1.765.269 2.574.644a4.8 4.8 0 0 1 1.778 1.391c.39.49.668 1.062.86 1.657.247.765.357 1.566.43 2.364.123 1.443.11 2.893.12 4.34 0 1.26.007 2.52-.017 3.78-.022 1.065-.053 2.134-.206 3.19-.123.82-.319 1.643-.71 2.38a4.76 4.76 0 0 1-1.594 1.763c-.591.394-1.27.638-1.959.799-.906.209-1.837.277-2.763.323-1.252.058-2.506.053-3.76.053-1.25.001-2.502.008-3.753-.024a28 28 0 0 1-2.36-.143c-.672-.08-1.343-.2-1.985-.419a5.2 5.2 0 0 1-1.617-.882 4.86 4.86 0 0 1-1.402-1.906c-.295-.712-.449-1.474-.543-2.236-.127-1.059-.159-2.126-.172-3.192C.566 13.324.57 12.027.57 10.73.575 9.8.581 8.87.619 7.94c.037-.862.1-1.727.263-2.576.143-.733.373-1.458.76-2.1A4.8 4.8 0 0 1 3.89 1.322C4.772.946 5.729.79 6.679.7c1.297-.118 2.6-.12 3.9-.129M9.479 2.08c-.943.014-1.887.034-2.826.13-.75.08-1.509.202-2.206.504-.413.18-.79.44-1.1.769-.487.506-.764 1.174-.924 1.85-.218.923-.27 1.876-.312 2.822-.051 1.412-.039 2.826-.042 4.239.003 1.305-.002 2.61.063 3.914.047.843.116 1.692.332 2.511.099.368.228.731.418 1.063.218.38.51.719.858.985.54.412 1.2.63 1.86.762.807.161 1.631.214 2.452.25.772.03 1.545.04 2.318.043 1.289.001 2.578.004 3.867-.004 1.058-.011 2.118-.034 3.17-.142a8.6 8.6 0 0 0 1.594-.298 4.1 4.1 0 0 0 1.017-.448c.314-.201.596-.455.826-.748.453-.58.677-1.3.809-2.014.198-1.092.228-2.204.253-3.31.024-1.388.019-2.774.016-4.16-.003-.744-.005-1.487-.026-2.23-.024-.825-.064-1.652-.181-2.47-.1-.665-.253-1.336-.575-1.932a3.27 3.27 0 0 0-1.513-1.413c-.823-.383-1.74-.491-2.635-.575-1.087-.093-2.18-.094-3.27-.105-1.415-.004-2.83-.008-4.243.007" />
          <path
            d="M10.422 2.643c1.302-.002 2.604-.011 3.906.008 1.031.018 2.067.041 3.087.202.7.115 1.401.308 2.001.696.59.384 1.057.948 1.329 1.596.32.742.432 1.552.506 2.35.073.851.087 1.706.097 2.56.007.772.006 1.544.005 2.316 0 1.268.005 2.537-.077 3.803-.066.892-.168 1.8-.512 2.632a3.55 3.55 0 0 1-1.285 1.595c-.614.417-1.343.624-2.07.74-1.025.16-2.066.185-3.102.203-1.365.015-2.73.011-4.093.005-.961-.009-1.923-.021-2.88-.113-.746-.074-1.498-.195-2.19-.49a3.55 3.55 0 0 1-1.69-1.484c-.41-.713-.573-1.535-.67-2.343-.115-1.032-.13-2.071-.14-3.108a480 480 0 0 1-.001-3.645c.01-1.012.03-2.026.135-3.034.064-.583.167-1.166.365-1.72a3.64 3.64 0 0 1 1.2-1.697c.598-.463 1.334-.701 2.07-.833.874-.155 1.764-.195 2.65-.221q.68-.015 1.359-.018m1.396 4.34a.66.66 0 0 0-.478.618c0 1.755-.003 3.51-.001 5.266a.656.656 0 0 0 1.313.022q.003-2.622.002-5.242a.67.67 0 0 0-.12-.41.66.66 0 0 0-.716-.254m.046 7.65a.88.88 0 0 0-.646 1.276.878.878 0 0 0 1.599-.72.89.89 0 0 0-.953-.556"
            opacity={0.5}
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="WarningSquareFill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWarningSquareFill;
