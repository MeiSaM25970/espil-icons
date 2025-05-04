import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicrophoneMute = ({
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
      fillRule="evenodd"
      d="M16.537 4.618a4.623 4.623 0 0 0-9.158.893v6.164c0 .621.123 1.214.345 1.756l1.514-1.514q-.01-.12-.01-.242V5.51a2.773 2.773 0 1 1 5.546 0v.87zm-5.314 9.72q.372.108.778.11a2.773 2.773 0 0 0 2.773-2.773v-.888l1.849-1.849v2.737a4.622 4.622 0 0 1-6.81 4.072z"
      clipRule="evenodd"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 18.18c.51 0 .924.311.924.695v3.54c0 .384-.414.695-.924.695s-.925-.311-.925-.695v-3.54c0-.384.414-.695.925-.695M21.44 1.917a.924.924 0 0 1 0 1.308L3.869 20.795A.924.924 0 0 1 2.56 19.49L20.133 1.917a.924.924 0 0 1 1.307 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.34 14.814a6.44 6.44 0 0 1-.813-3.14v-.925a.924.924 0 1 0-1.848 0v.924a8.3 8.3 0 0 0 1.313 4.489zm.795 3.61a8.32 8.32 0 0 0 13.183-6.75v-.925a.924.924 0 1 0-1.849 0v.925a6.47 6.47 0 0 1-10.004 5.421z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMicrophoneMute;
