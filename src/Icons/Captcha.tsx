import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCaptcha = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M11.526 1.775c.62-.072 1.25.013 1.85.172.773.204 1.523.48 2.279.735.914.313 1.83.622 2.739.95.478.174.956.352 1.422.556.357.16.714.331 1.027.57.223.167.413.383.529.639.181.398.239.838.283 1.27.071.784.076 1.573.084 2.36.006.81.004 1.618.004 2.427-.005.644.018 1.29-.034 1.933A10.2 10.2 0 0 1 21 16.44c-.552 1.366-1.427 2.59-2.495 3.6-1.133 1.073-2.468 1.921-3.886 2.568-.374.166-.748.34-1.141.456-.46.138-.944.176-1.422.179-.63.008-1.27-.053-1.86-.284a15.5 15.5 0 0 1-3.492-1.904c-1.135-.832-2.143-1.85-2.9-3.04a9.8 9.8 0 0 1-1.02-2.132 10.4 10.4 0 0 1-.516-2.72c-.03-.48-.017-.96-.02-1.439.003-1.267-.008-2.534.021-3.8.018-.595.038-1.192.135-1.78.068-.392.18-.797.445-1.106.263-.306.62-.509.977-.687.66-.32 1.352-.567 2.042-.816.98-.348 1.964-.68 2.947-1.017.586-.2 1.171-.405 1.77-.563.31-.081.622-.147.94-.18m.224 1.484c-.639.06-1.246.28-1.852.476-.774.26-1.545.527-2.317.791-.77.267-1.542.53-2.302.828a8 8 0 0 0-1.046.48c-.086.054-.18.104-.245.184-.048.092-.068.197-.09.298-.064.336-.086.679-.105 1.02-.044.907-.04 1.815-.044 2.723v2.272c-.02 1.268.2 2.546.707 3.711.562 1.307 1.471 2.447 2.56 3.356 1.098.92 2.367 1.622 3.695 2.151.49.198 1.027.203 1.547.19a3 3 0 0 0 1.043-.197c.87-.349 1.713-.77 2.501-1.28a10.8 10.8 0 0 0 2.39-2.067 8.5 8.5 0 0 0 1.744-3.298 9.3 9.3 0 0 0 .308-2.52c-.005-1.484.012-2.969-.021-4.453-.019-.534-.032-1.07-.126-1.598-.027-.111-.041-.233-.108-.328-.177-.158-.397-.258-.61-.361-.664-.305-1.356-.545-2.044-.79-.979-.343-1.96-.676-2.942-1.012-.477-.16-.953-.323-1.44-.45-.392-.1-.798-.162-1.203-.126"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M10.198 7.708a3.752 3.752 0 0 1 5.495 2.664c.131.768.013 1.575-.33 2.274a3.73 3.73 0 0 1-1.32 1.49 3.8 3.8 0 0 1-1.297.535v2.317a.75.75 0 0 1-1.474.202c-.032-.11-.026-.225-.026-.338V14.67a3.76 3.76 0 0 1-1.879-1 3.77 3.77 0 0 1-1.061-2.012 3.76 3.76 0 0 1 .366-2.394 3.73 3.73 0 0 1 1.526-1.556m1.465 1.064a2.25 2.25 0 0 0-1.907 2.031c-.073.755.273 1.53.879 1.984.42.321.957.486 1.486.455a2.26 2.26 0 0 0 1.733-.978 2.26 2.26 0 0 0 .383-1.464 2.26 2.26 0 0 0-.51-1.24 2.26 2.26 0 0 0-2.064-.788"
    />
  </svg>
);
export default SvgCaptcha;
