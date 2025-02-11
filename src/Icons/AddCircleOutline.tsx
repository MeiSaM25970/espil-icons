import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAddCircleOutline = ({
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
      d="M11.175 1.282c1.685-.13 3.401.14 4.961.792a10.8 10.8 0 0 1 4.745 3.865 10.7 10.7 0 0 1 1.87 6.06 10.7 10.7 0 0 1-1.88 6.078 10.8 10.8 0 0 1-4.735 3.85 10.8 10.8 0 0 1-6.975.444 10.76 10.76 0 0 1-5.226-3.264A10.754 10.754 0 0 1 2.647 6.7a10.8 10.8 0 0 1 5.672-4.802 10.7 10.7 0 0 1 2.856-.616m.06 1.5a9.2 9.2 0 0 0-4.76 1.8 9.28 9.28 0 0 0-3.287 4.602 9.3 9.3 0 0 0-.343 4.137 9.2 9.2 0 0 0 1.165 3.34 9.3 9.3 0 0 0 4.39 3.862 9.3 9.3 0 0 0 6.662.209 9.268 9.268 0 0 0 5.858-6.268 9.3 9.3 0 0 0 .173-4.174A9.2 9.2 0 0 0 19.97 7.3a9.3 9.3 0 0 0-4.116-3.711 9.26 9.26 0 0 0-4.62-.807"
    />
    <path
      fill="currentColor"
      d="M11.791 8.28a.75.75 0 0 1 .959.72v2.25h2.07c.14 0 .283-.01.417.038.3.096.518.396.513.712a.75.75 0 0 1-.514.712c-.133.047-.277.038-.415.038H12.75V15a.75.75 0 0 1-1.47.207c-.04-.125-.03-.258-.03-.388V12.75H9.18c-.14 0-.283.01-.417-.038A.75.75 0 0 1 8.25 12a.75.75 0 0 1 .718-.749c.76-.003 1.521 0 2.282-.001V9.18c0-.129-.009-.262.03-.388a.75.75 0 0 1 .511-.512"
      opacity={0.5}
    />
  </svg>
);
export default SvgAddCircleOutline;
