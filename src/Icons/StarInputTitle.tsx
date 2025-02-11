import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStarInputTitle = ({
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
      d="M10.203 4.049a.94.94 0 0 1 .667.027.98.98 0 0 1 .585.905V6.3l1.008-.598c.067-.04.134-.083.205-.114a.93.93 0 0 1 .643-.04.95.95 0 0 1 .527.396 1 1 0 0 1 .154.669.98.98 0 0 1-.455.716L12.409 8l1.082.642a.98.98 0 0 1 .488.668 1 1 0 0 1-.112.698.96.96 0 0 1-.493.422.93.93 0 0 1-.797-.066L11.455 9.7v1.204c0 .083.003.166-.009.247a1 1 0 0 1-.353.638.936.936 0 0 1-1.2-.012 1 1 0 0 1-.347-.742V9.698l-1.02.604c-.067.04-.133.084-.206.113a.93.93 0 0 1-.617.04.95.95 0 0 1-.54-.398A1 1 0 0 1 7.46 8.67L8.59 8l-1.112-.66a.97.97 0 0 1-.373-.402 1 1 0 0 1-.082-.661.99.99 0 0 1 .406-.605.94.94 0 0 1 .978-.045q.57.337 1.139.675V4.967a1 1 0 0 1 .206-.595.95.95 0 0 1 .45-.323"
    />
  </svg>
);
export default SvgStarInputTitle;
