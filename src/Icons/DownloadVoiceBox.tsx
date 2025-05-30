import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownloadVoiceBox = ({
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
    <g clipPath="url(#DownloadVoiceBox_svg__a)">
      <mask
        id="DownloadVoiceBox_svg__b"
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
      <g mask="url(#DownloadVoiceBox_svg__b)">
        <mask
          id="DownloadVoiceBox_svg__c"
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
        <g fill="currentColor" mask="url(#DownloadVoiceBox_svg__c)">
          <path
            d="M6.519 3.107c.655-.131 1.325-.104 1.987-.104 2.772.013 5.547-.025 8.317.019 2.233.083 4.154 2.09 4.165 4.32q.024 4.704-.001 9.41c-.048 2.181-1.92 4.136-4.107 4.24-3.23.014-6.458.007-9.688.003-2.206-.06-4.145-2.023-4.188-4.229-.007-3.15-.003-6.3-.001-9.449.007-1.998 1.563-3.83 3.516-4.21"
            opacity={0.2}
          />
          <path d="M6.07.828C9.732.72 13.396.832 17.058.788c1.94-.07 3.889.873 5.014 2.457a6.02 6.02 0 0 1 1.147 3.492c.015 3.444.002 6.89.006 10.335.01.993-.2 1.993-.65 2.88-.98 1.968-3.113 3.292-5.315 3.275-3.632-.011-7.265.019-10.897-.015C3.447 23.096.91 20.535.788 17.625c-.03-1.883-.022-3.767-.005-5.65-.05-.84 1.322-.965 1.46-.142.087 1.957-.024 3.922.051 5.88.18 2.21 2.226 4.06 4.444 4.014 3.574-.004 7.15.006 10.723-.004 2.239-.05 4.206-2.041 4.254-4.275.028-3.376-.002-6.753.013-10.13.014-.765-.03-1.555-.352-2.263-.65-1.645-2.353-2.792-4.125-2.775q-5.246-.018-10.494-.002c-1.93-.02-3.773 1.344-4.298 3.204-.34 1.007-.073 2.083-.25 3.11-.288.64-1.342.507-1.419-.205-.048-1.272-.093-2.597.394-3.8.769-2.03 2.728-3.535 4.886-3.759" />
          <path d="M11.686 6.359a3.8 3.8 0 0 1 2.683.58 3.737 3.737 0 0 1 1.617 2.42c.62.263 1.167.695 1.566 1.238a3.7 3.7 0 0 1 .673 1.612 3.71 3.71 0 0 1-1.387 3.508c-.404.318-.874.55-1.37.68-.119.03-.241.07-.363.038a.438.438 0 0 1 .01-.853 2.9 2.9 0 0 0 1.524-.867 2.83 2.83 0 0 0 .346-3.393 2.9 2.9 0 0 0-1.346-1.16 2.94 2.94 0 0 0-2.098-.068.44.44 0 0 1-.423-.755c.078-.062.177-.086.27-.116a3.85 3.85 0 0 1 1.622-.132 2.89 2.89 0 0 0-2.187-1.852 2.95 2.95 0 0 0-1.657.167A2.9 2.9 0 0 0 9.81 8.549a2.83 2.83 0 0 0-.32 2.272c.287.084.564.21.813.377a.436.436 0 0 1-.018.733.44.44 0 0 1-.48-.013 2.08 2.08 0 0 0-2.607.268 2.014 2.014 0 0 0-.262 2.534 2.07 2.07 0 0 0 1.686.925.46.46 0 0 1 .337.113.438.438 0 0 1-.284.763 2.94 2.94 0 0 1-2.68-1.698 2.89 2.89 0 0 1 .33-2.967 2.95 2.95 0 0 1 2.24-1.15 3.7 3.7 0 0 1 .168-1.937A3.74 3.74 0 0 1 9.83 7.206a3.8 3.8 0 0 1 1.857-.848" />
          <path d="M11.751 13.974a.437.437 0 0 1 .663.216c.03.083.023.173.024.26v2.327q.217-.219.438-.436a.439.439 0 0 1 .718.421.45.45 0 0 1-.125.223l-1.156 1.155a.44.44 0 0 1-.465.104.6.6 0 0 1-.222-.165l-1.102-1.102a.439.439 0 0 1 .619-.619l.42.42v-2.45c0-.14.073-.276.188-.354" />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="DownloadVoiceBox_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDownloadVoiceBox;
