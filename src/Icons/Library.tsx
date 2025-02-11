import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLibrary = ({
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
      d="M7.923 1.305c.226-.05.459-.053.69-.055H15.3c.23.002.463-.002.691.038.63.102 1.223.432 1.637.919.403.459.633 1.057.668 1.665.54.164 1.031.489 1.39.926.415.5.655 1.144.66 1.795a7.4 7.4 0 0 0-1.326-.246 1 1 0 0 0-.178.002l-.05-.098c-.155-.568-.709-1-1.3-.999q-5.475-.002-10.95 0a1.37 1.37 0 0 0-.946.373 1.4 1.4 0 0 0-.407.704 7.7 7.7 0 0 0-1.525.26c-.008-.635.233-1.264.627-1.758.363-.458.87-.79 1.425-.967.02-.564.232-1.116.58-1.56a2.73 2.73 0 0 1 1.627-1m-.691 2.444q4.77.006 9.54 0a1.261 1.261 0 0 0-1.29-.998q-3.51-.002-7.02.001c-.58-.014-1.117.43-1.23.997"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M6.962 6.256c1.38-.01 2.76-.002 4.139-.005h5.458c.732.01 1.465.011 2.194.074l.037-.075q.023.049.05.098.088-.009.177-.003c.448.049.895.116 1.327.246.546.162 1.07.435 1.468.847.384.377.65.866.786 1.386.155.585.168 1.197.14 1.799-.04.792-.146 1.579-.251 2.364l-.597 4.236c-.09.626-.177 1.252-.297 1.872-.098.496-.218.99-.415 1.457a3.25 3.25 0 0 1-.93 1.284c-.364.303-.799.514-1.254.641-.571.16-1.165.213-1.756.242-.646.03-1.292.028-1.938.032H9.72c-.78 0-1.56.002-2.34-.012-.703-.017-1.411-.044-2.1-.193-.567-.123-1.119-.355-1.56-.737-.426-.353-.732-.832-.934-1.344-.269-.684-.394-1.412-.512-2.134-.22-1.439-.41-2.882-.618-4.322-.156-1.147-.341-2.293-.397-3.451-.035-.819.017-1.678.406-2.416.2-.38.487-.709.824-.972.348-.27.753-.455 1.173-.582a7.7 7.7 0 0 1 1.525-.26c.59-.049 1.183-.063 1.775-.072m.01 1.5c-.796.015-1.597.025-2.385.156-.441.08-.898.2-1.247.498-.286.239-.458.59-.524.952-.105.564-.065 1.14-.02 1.708.088.966.235 1.925.368 2.885l.33 2.34c.121.84.226 1.684.387 2.519.107.521.223 1.059.512 1.514.254.402.697.64 1.152.74.77.17 1.563.163 2.347.18 2.51.008 5.02 0 7.53.003.81-.01 1.624.005 2.432-.083.498-.06 1.025-.151 1.425-.476.337-.267.522-.673.644-1.074.184-.608.278-1.238.375-1.863.128-.868.246-1.736.37-2.604.176-1.291.38-2.579.518-3.874.058-.667.122-1.349-.022-2.009a1.55 1.55 0 0 0-.772-1.043c-.51-.276-1.1-.342-1.668-.4-.92-.075-1.844-.072-2.765-.074-2.996.003-5.991-.007-8.987.005"
    />
    <path
      fill="currentColor"
      d="M8.885 17.26c.408-.02.818-.003 1.226-.009 1.64.001 3.28-.001 4.92.002.4.006.746.378.719.778a.754.754 0 0 1-.751.72H9a.752.752 0 0 1-.116-1.491"
    />
  </svg>
);
export default SvgLibrary;
