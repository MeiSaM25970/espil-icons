import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDoubleAltArrowRight = ({
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
      d="M6.491 4.45a.75.75 0 0 1 .87-.107c.135.069.228.192.325.305l5.883 6.863c.24.268.24.71 0 .977l-6.01 7.013c-.272.322-.819.331-1.1.018a.75.75 0 0 1-.032-1.003Q9.218 15.26 12.01 12q-2.73-3.186-5.46-6.371c-.094-.11-.2-.216-.25-.354a.75.75 0 0 1 .19-.826"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M10.77 4.286a.75.75 0 0 1 .799.226l5.857 6.832c.095.116.208.222.265.363a.76.76 0 0 1-.127.788l-5.87 6.849c-.065.075-.127.154-.2.221a.753.753 0 0 1-1.162-.225.75.75 0 0 1-.015-.65c.052-.122.147-.215.23-.314L16.013 12l-5.578-6.507a.75.75 0 0 1 .336-1.207"
    />
  </svg>
);
export default SvgDoubleAltArrowRight;
