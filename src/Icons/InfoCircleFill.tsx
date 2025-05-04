import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInfoCircleFill = ({
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
    <g clipPath="url(#InfoCircleFill_svg__a)">
      <mask
        id="InfoCircleFill_svg__b"
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
      <g mask="url(#InfoCircleFill_svg__b)">
        <mask
          id="InfoCircleFill_svg__c"
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
        <g fill="currentColor" mask="url(#InfoCircleFill_svg__c)">
          <path d="M11.709.254c1.606-.04 3.22.25 4.708.855 1.981.801 3.73 2.158 5.006 3.871a11.73 11.73 0 0 1 2.305 6.268 11.76 11.76 0 0 1-1.52 6.579c-1.001 1.75-2.46 3.235-4.191 4.268a11.73 11.73 0 0 1-6.496 1.646 11.7 11.7 0 0 1-6.177-2.056 11.8 11.8 0 0 1-3.942-4.606A11.6 11.6 0 0 1 .28 12.842 11.74 11.74 0 0 1 5.614 2.136 11.7 11.7 0 0 1 11.71.254m.003 1.5a10.2 10.2 0 0 0-5.43 1.739A10.3 10.3 0 0 0 2.4 8.399a10.3 10.3 0 0 0-.648 3.801 10.2 10.2 0 0 0 1.017 4.26c.458.95 1.064 1.826 1.79 2.59a10.245 10.245 0 0 0 12.202 2.03 10.3 10.3 0 0 0 4.214-4.123A10.26 10.26 0 0 0 20.9 6.91a10.3 10.3 0 0 0-4.622-4.227c-1.423-.657-3-.974-4.566-.929" />
          <path
            d="M11.325 2.573a9.46 9.46 0 0 1 4.716.882 9.5 9.5 0 0 1 4.12 3.776 9.46 9.46 0 0 1 .957 7.256 9.44 9.44 0 0 1-2.966 4.686A9.4 9.4 0 0 1 15.5 20.78a9.5 9.5 0 0 1-7.045-.018A9.5 9.5 0 0 1 4 17.03 9.4 9.4 0 0 1 2.71 13.74 9.47 9.47 0 0 1 3.7 7.48a9.5 9.5 0 0 1 4.259-4.024 9.4 9.4 0 0 1 3.366-.883m.477 5.155c-.451.094-.753.589-.639 1.034.096.466.625.77 1.078.628.443-.118.725-.632.584-1.068-.115-.426-.595-.709-1.023-.594m.03 2.79a.65.65 0 0 0-.428.376c-.061.14-.048.297-.049.447.002 1.66-.002 3.318.002 4.977a.643.643 0 0 0 1.1.43.65.65 0 0 0 .188-.489V11.16a.646.646 0 0 0-.813-.642"
            opacity={0.5}
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="InfoCircleFill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInfoCircleFill;
