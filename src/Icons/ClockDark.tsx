import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClockDark = ({
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
      d="M11.172 1.282a10.76 10.76 0 0 1 4.855.749 10.8 10.8 0 0 1 4.865 3.927 10.7 10.7 0 0 1 1.857 6.07 10.7 10.7 0 0 1-2.042 6.278 10.8 10.8 0 0 1-4.895 3.749 10.8 10.8 0 0 1-7.2.15 10.77 10.77 0 0 1-6.467-5.901 10.8 10.8 0 0 1-.15-8.246 10.8 10.8 0 0 1 4.756-5.442 10.7 10.7 0 0 1 4.421-1.334m.061 1.5a9.2 9.2 0 0 0-3.836 1.193 9.3 9.3 0 0 0-3.8 4.154 9.2 9.2 0 0 0-.847 3.873 9.2 9.2 0 0 0 2.74 6.568 9.22 9.22 0 0 0 5.369 2.61 9.231 9.231 0 0 0 6.805-1.867 9.27 9.27 0 0 0 3.177-4.585 9.3 9.3 0 0 0 .31-4.077 9.2 9.2 0 0 0-1.106-3.218 9.3 9.3 0 0 0-4.153-3.826 9.26 9.26 0 0 0-4.659-.825"
    />
    <path
      fill="currentColor"
      d="M7.957 15.769a.75.75 0 0 1-.768-.306.75.75 0 0 1 .026-.893c.1-.134.254-.208.395-.29l4.096-2.364q-.82-1.415-1.634-2.832a.753.753 0 0 1 .3-1.017.75.75 0 0 1 .997.267q1.006 1.74 2.01 3.481a.75.75 0 0 1-.068.85c-.102.132-.256.202-.395.284l-4.58 2.645c-.12.069-.24.149-.379.175"
      opacity={0.5}
    />
  </svg>
);
export default SvgClockDark;
