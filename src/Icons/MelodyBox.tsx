import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMelodyBox = ({
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
    <g clipPath="url(#MelodyBox_svg__a)">
      <mask
        id="MelodyBox_svg__b"
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
      <g mask="url(#MelodyBox_svg__b)">
        <mask
          id="MelodyBox_svg__c"
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
        <g fill="currentColor" mask="url(#MelodyBox_svg__c)">
          <path d="M6.442.784C9.714.762 12.986.78 16.258.774c.601.008 1.205-.028 1.803.057a5.96 5.96 0 0 1 3.482 1.77 5.97 5.97 0 0 1 1.63 3.373c.07.493.05.992.053 1.488-.001 3.29.003 6.581-.002 9.872a5.99 5.99 0 0 1-5.984 5.892H7.37c-.437-.001-.877.013-1.313-.042a6 6 0 0 1-2.74-1.05 6 6 0 0 1-2.226-2.972 6 6 0 0 1-.316-1.967v-5.2a.75.75 0 0 1 .745-.742c.4-.013.759.347.75.746.003 1.762 0 3.524.002 5.287a4.489 4.489 0 0 0 3.601 4.354c.523.115 1.061.086 1.592.09h9.773a4.5 4.5 0 0 0 2.455-.73 4.5 4.5 0 0 0 1.958-2.925c.103-.505.075-1.024.079-1.536V6.904a4.51 4.51 0 0 0-1.683-3.647 4.47 4.47 0 0 0-2.24-.95c-.344-.046-.692-.034-1.038-.036H7.651c-.655.007-1.323-.042-1.964.132a4.5 4.5 0 0 0-2.794 2.079 4.46 4.46 0 0 0-.62 2.188c-.006.546.004 1.093-.004 1.639a.75.75 0 0 1-.65.691.76.76 0 0 1-.792-.467C.744 8.327.784 8.1.775 7.885c.01-.734-.043-1.476.097-2.202A5.98 5.98 0 0 1 3 2.106 5.98 5.98 0 0 1 6.442.784" />
          <path d="M12.002 7.27c.014-.486.576-.843 1.022-.642.774.377 1.543.767 2.313 1.152.306.152.472.53.38.858-.099.42-.601.673-.996.504-.412-.194-.815-.41-1.225-.607v5.76c-.002.377.02.76-.075 1.13a2.623 2.623 0 0 1-3.198 1.922 2.62 2.62 0 0 1-.7-4.778 2.63 2.63 0 0 1 2.475-.128c.003-1.724-.003-3.447.004-5.17m-1.387 6.448a1.124 1.124 0 1 0 .981 1.953 1.125 1.125 0 0 0-.024-1.742 1.13 1.13 0 0 0-.957-.211" />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="MelodyBox_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMelodyBox;
