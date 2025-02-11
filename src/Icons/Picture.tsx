import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPicture = ({
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
      d="M19.293 5.022a2.4 2.4 0 0 1 1.451.259c.407.225.75.57.956.989.222.44.3.951.224 1.439a2.34 2.34 0 0 1-2.04 1.938c-.59.065-1.206-.101-1.673-.47-.717-.535-1.057-1.508-.853-2.376.206-.91 1.004-1.663 1.935-1.78"
      opacity={0.25}
    />
    <path
      fill="currentColor"
      d="M8.79 9.152a.43.43 0 0 1 .45-.056c.171.087.29.247.405.396.31.426.6.866.9 1.298a3179 3179 0 0 1 3.802 5.549c-1.147 1.439-2.308 2.866-3.441 4.316-.1.11-.07.304.069.367-2.779-.01-5.557-.003-8.336-.005-.346-.002-.696.01-1.04-.038-.163-.027-.348-.072-.448-.216-.093-.13-.081-.303-.027-.445.092-.243.242-.457.382-.674 2.27-3.314 4.546-6.624 6.816-9.938.142-.195.276-.404.468-.554"
    />
    <path
      fill="currentColor"
      d="M16.218 14c.161-.18.346-.415.617-.39.27.04.437.286.605.476q1.882 2.37 3.773 4.73c.278.352.565.696.83 1.057.134.19.28.39.312.625.026.198-.124.381-.31.43-.366.109-.752.083-1.128.09-1.167 0-2.334-.005-3.5.003-1.232.017-2.464.03-3.695.02h-2.473c-.091 0-.188.02-.274-.019-.139-.063-.168-.257-.07-.367 1.134-1.45 2.295-2.878 3.442-4.316.626-.778 1.243-1.562 1.87-2.338"
      opacity={0.6}
    />
  </svg>
);
export default SvgPicture;
