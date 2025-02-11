import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWarningCircleOutline = ({
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
      d="M11.191 1.28c1.705-.128 3.44.152 5.012.824 1.53.65 2.902 1.664 3.98 2.929a10.7 10.7 0 0 1 1.976 3.462c.738 2.13.778 4.495.115 6.65a10.773 10.773 0 0 1-6.296 6.837 10.8 10.8 0 0 1-6.146.543 10.7 10.7 0 0 1-3.65-1.49 10.8 10.8 0 0 1-3.392-3.491 10.7 10.7 0 0 1-1.496-4.564 10.725 10.725 0 0 1 2.53-7.963A10.75 10.75 0 0 1 7.529 2.22c1.152-.527 2.399-.85 3.663-.94m.535 1.473a9.2 9.2 0 0 0-4.131 1.109 9.3 9.3 0 0 0-3.409 3.182 9.2 9.2 0 0 0-1.38 3.922 9.223 9.223 0 0 0 2.241 7.132 9.3 9.3 0 0 0 3.58 2.513c1.511.594 3.18.77 4.782.526a9.23 9.23 0 0 0 4.529-2.054 9.3 9.3 0 0 0 2.747-3.912 9.3 9.3 0 0 0 .52-4.017A9.2 9.2 0 0 0 19.905 7.2a9.24 9.24 0 0 0-8.178-4.446"
    />
    <path
      fill="currentColor"
      d="M11.842 7.009c.438-.108.922.271.902.727.007 2.01.001 4.02.002 6.03 0 .386-.351.73-.736.726a.755.755 0 0 1-.762-.726V7.713a.76.76 0 0 1 .594-.704M11.886 15.76c.512-.071 1.031.327 1.099.838a1 1 0 0 1-.244.821 1 1 0 0 1-.616.328 1.02 1.02 0 0 1-.913-.37 1.004 1.004 0 0 1 .675-1.617"
      opacity={0.5}
    />
  </svg>
);
export default SvgWarningCircleOutline;
