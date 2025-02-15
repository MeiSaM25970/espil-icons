import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEyeClosed = ({
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
    <path
      fill="currentColor"
      d="M2.573 7.7a.75.75 0 0 1 1.294-.076 20 20 0 0 0 2.226 2.605c1.045 1.011 2.242 1.9 3.611 2.416a6.7 6.7 0 0 0 2.297.439c1.126.01 2.237-.305 3.233-.82 1.067-.549 2.014-1.306 2.863-2.15a20.4 20.4 0 0 0 2.138-2.54.75.75 0 0 1 .948-.192c.283.151.445.497.373.81-.03.183-.155.326-.26.471-.434.59-.892 1.164-1.38 1.71q-.5.56-1.043 1.078a13.7 13.7 0 0 1-2.255 1.755c-.438.267-.892.51-1.367.704a8.2 8.2 0 0 1-2.461.638 8 8 0 0 1-1.496 0 8.4 8.4 0 0 1-2.477-.641 10.6 10.6 0 0 1-1.336-.69 13.6 13.6 0 0 1-2.251-1.743c-.37-.343-.719-.708-1.057-1.082A24 24 0 0 1 2.63 8.475a.75.75 0 0 1-.058-.774"
    />
    <path
      fill="currentColor"
      d="M18.875 11.452a18 18 0 0 0 1.042-1.077c.313.3.616.613.924.918a.77.77 0 0 1 .243.526.75.75 0 0 1-.35.664.75.75 0 0 1-.892-.068c-.326-.317-.64-.645-.967-.963M3.246 11.313c.31-.306.614-.62.928-.922.339.373.687.74 1.057 1.082l-.05.028-.886.886a.76.76 0 0 1-.748.174.751.751 0 0 1-.3-1.249M15.25 13.907c.475-.194.93-.437 1.368-.704q.465.718.934 1.436a.75.75 0 0 1 .099.586.75.75 0 0 1-1.337.26c-.345-.52-.677-1.05-1.025-1.567zM7.486 13.219q.643.392 1.336.689c-.27.43-.553.851-.828 1.278-.081.12-.152.246-.242.359a.752.752 0 0 1-1.311-.426.75.75 0 0 1 .126-.49q.457-.707.919-1.41M11.291 14.547c.497.048.999.048 1.496 0 .01.51 0 1.02.002 1.531-.004.392-.368.736-.759.721-.383.003-.734-.334-.74-.719.001-.511-.004-1.022.001-1.533"
      opacity={0.5}
    />
  </svg>
);
export default SvgEyeClosed;
