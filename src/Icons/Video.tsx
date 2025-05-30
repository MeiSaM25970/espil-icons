import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideo = ({
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
    <g clipPath="url(#Video_svg__a)">
      <mask
        id="Video_svg__b"
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
      <g mask="url(#Video_svg__b)">
        <mask
          id="Video_svg__c"
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
        <g fill="currentColor" mask="url(#Video_svg__c)">
          <path d="M3.927 1.774A6.73 6.73 0 0 1 7.502.75H16.5A6.73 6.73 0 0 1 20.1 1.79a6.78 6.78 0 0 1 2.78 3.506c.206.589.316 1.207.365 1.827.008.72.002 1.438.005 2.158a.78.78 0 0 1-.272.668.74.74 0 0 1-.93.022.74.74 0 0 1-.298-.591c-.003-.502 0-1.004 0-1.505H2.25c-.002 1.502.001 3.004-.002 4.505a.755.755 0 0 1-.75.744c-.397.008-.76-.348-.748-.748q-.002-2.392 0-4.783a6.7 6.7 0 0 1 .407-2.408 6.76 6.76 0 0 1 2.769-3.41m2.541.577 1.547 4.024h3.973L10.22 2.25H7.5q-.52.001-1.032.101m5.384-.1c.588 1.374 1.18 2.748 1.766 4.123q1.81.002 3.62 0L15.47 2.25zm5.266.034c.582 1.363 1.169 2.725 1.75 4.088q1.38.003 2.762.001a5.26 5.26 0 0 0-4.512-4.089M2.371 6.375h4.037q-.676-1.76-1.354-3.52a5.27 5.27 0 0 0-2.683 3.52M22.368 12.386c.44-.093.893.288.881.736q.003 1.736-.001 3.473a6.74 6.74 0 0 1-1.771 4.462 6.73 6.73 0 0 1-3.922 2.11c-.643.107-1.296.079-1.945.083H7.499a6.757 6.757 0 0 1-6.51-4.97 7.2 7.2 0 0 1-.232-2.25.75.75 0 0 1 .837-.65c.402.042.701.444.657.84-.05 1.168.277 2.353.96 3.306a5.26 5.26 0 0 0 3.408 2.149c.538.098 1.087.07 1.63.075h8.157a5.3 5.3 0 0 0 2.504-.586 5.27 5.27 0 0 0 2.627-3.184 5.3 5.3 0 0 0 .213-1.526v-3.335a.75.75 0 0 1 .618-.733" />
          <path
            d="M10.776 10.673c.365-.072.756.017 1.06.232.189.135.38.267.568.405a.47.47 0 0 1-.533.773c-.206-.136-.4-.29-.608-.424a.47.47 0 0 0-.57.076.48.48 0 0 0-.136.365v4.333a.47.47 0 0 0 .76.376q1.533-1.087 3.065-2.175c.244-.163.262-.556.033-.74-.223-.17-.46-.323-.685-.493a.475.475 0 0 1-.06-.657.47.47 0 0 1 .63-.09c.229.162.46.322.686.49.383.296.587.8.523 1.28a1.4 1.4 0 0 1-.587.983q-1.533 1.09-3.07 2.178c-.27.194-.61.294-.942.262a1.406 1.406 0 0 1-1.294-1.413V12.07a1.4 1.4 0 0 1 .382-.975 1.45 1.45 0 0 1 .777-.423"
            opacity={0.5}
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="Video_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVideo;
