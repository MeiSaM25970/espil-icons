import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDoubleAltArrowLeft = ({
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
      d="M12.416 4.528a.752.752 0 0 1 1.22.074.755.755 0 0 1-.058.876L7.988 12l5.55 6.474a.755.755 0 0 1-.195 1.195.75.75 0 0 1-.911-.18l-5.856-6.831c-.096-.116-.21-.223-.267-.366a.76.76 0 0 1 .127-.786z"
    />
    <path
      fill="currentColor"
      d="M16.549 4.4a.751.751 0 0 1 1.025 1.082Q14.78 8.74 11.989 12q2.792 3.258 5.583 6.516a.75.75 0 0 1-.932 1.142c-.129-.065-.22-.18-.311-.288l-5.897-6.88a.75.75 0 0 1-.002-.978l5.9-6.882c.069-.08.134-.166.219-.23"
      opacity={0.5}
    />
  </svg>
);
export default SvgDoubleAltArrowLeft;
