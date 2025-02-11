import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckCircleFill = ({
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
    <g fill="currentColor" clipPath="url(#checkCircleFill_svg__a)">
      <path d="M11.711.254c1.605-.04 3.219.25 4.706.855a11.8 11.8 0 0 1 5.095 3.99 11.753 11.753 0 0 1 .695 12.727 11.8 11.8 0 0 1-3.894 4.086 11.7 11.7 0 0 1-6.495 1.837 11.7 11.7 0 0 1-6.294-1.944 11.8 11.8 0 0 1-3.972-4.426A11.753 11.753 0 0 1 8.064.927 11.7 11.7 0 0 1 11.71.254m-.001 1.5c-2.033.051-4.046.73-5.693 1.923a10.28 10.28 0 0 0-3.733 5.05 10.3 10.3 0 0 0-.518 3.842A10.23 10.23 0 0 0 4.56 19.05a10.244 10.244 0 0 0 12.202 2.03 10.3 10.3 0 0 0 4.213-4.124A10.253 10.253 0 0 0 11.71 1.754" />
      <path
        d="M11.326 2.574a9.45 9.45 0 0 1 4.774.91 9.5 9.5 0 0 1 4.06 3.746 9.476 9.476 0 0 1 .958 7.26 9.44 9.44 0 0 1-2.932 4.654 9.4 9.4 0 0 1-2.791 1.678 9.5 9.5 0 0 1-7.004-.085 9.5 9.5 0 0 1-4.345-3.632 9.5 9.5 0 0 1-1.336-3.363A9.48 9.48 0 0 1 3.72 7.44a9.5 9.5 0 0 1 3.817-3.774 9.4 9.4 0 0 1 3.788-1.093m3.383 6.706c-.115.058-.2.16-.29.25q-1.854 1.852-3.708 3.705c-.428-.424-.852-.854-1.282-1.278a.642.642 0 0 0-1.08.46.66.66 0 0 0 .202.484l1.695 1.694c.245.265.708.26.944-.015l4.154-4.155c.096-.096.206-.188.255-.32a.645.645 0 0 0-.89-.825"
        opacity={0.5}
      />
    </g>
    <defs>
      <clipPath id="checkCircleFill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheckCircleFill;
