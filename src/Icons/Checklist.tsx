import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChecklist = ({
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
      d="M8.832 1.274c1.486-.036 2.973-.02 4.459-.024 1.462.013 2.93.005 4.382.202 1.056.146 2.13.446 2.98 1.117.775.596 1.32 1.458 1.599 2.39.378 1.244.43 2.556.473 3.848.026 1.013.024 2.028.024 3.042-.003 1.541.017 3.084-.08 4.623-.072 1.022-.195 2.057-.575 3.016a4.57 4.57 0 0 1-1.722 2.146c-.82.545-1.796.792-2.76.923-1.313.172-2.64.178-3.963.19-1.6 0-3.202.015-4.802-.02-1.204-.038-2.422-.088-3.594-.39-.594-.156-1.172-.391-1.68-.74a4.58 4.58 0 0 1-1.667-2.109c-.42-1.064-.53-2.217-.595-3.35-.052-.988-.056-1.978-.06-2.968.002-1.38-.01-2.762.018-4.142.02-.84.053-1.682.158-2.516.094-.74.247-1.48.549-2.166.328-.76.865-1.43 1.543-1.906.515-.364 1.106-.61 1.715-.772 1.173-.305 2.392-.357 3.598-.394m.03 1.5c-.59.015-1.18.04-1.768.097-.594.06-1.19.146-1.758.33a3.4 3.4 0 0 0-1.201.662 3.05 3.05 0 0 0-.764 1.038c-.219.48-.336.998-.417 1.517-.112.745-.151 1.5-.175 2.253-.04 1.37-.026 2.74-.029 4.11.002.96.004 1.92.04 2.88.03.705.076 1.413.195 2.11.094.527.23 1.054.485 1.528.23.429.565.801.969 1.073.424.285.915.454 1.411.567.64.143 1.297.204 1.951.244 1.559.085 3.12.061 4.68.066 1.389-.004 2.78.008 4.166-.098.649-.054 1.3-.135 1.926-.324.464-.14.91-.357 1.277-.678.327-.282.588-.637.769-1.029.229-.494.349-1.03.43-1.567.109-.727.147-1.461.17-2.195.03-.94.03-1.879.03-2.818-.004-1.5.016-3.002-.053-4.5-.037-.703-.092-1.407-.237-2.097-.105-.493-.26-.983-.529-1.413a3 3 0 0 0-1.132-1.06c-.476-.256-1.006-.393-1.535-.486a16 16 0 0 0-1.985-.189 69 69 0 0 0-2.638-.044c-1.427.003-2.853-.012-4.279.023"
    />
    <path
      fill="currentColor"
      d="M9.456 6.484a.75.75 0 0 1 .758-.203.752.752 0 0 1 .318 1.249l-2.854 2.996a.75.75 0 0 1-1.056.012c-.388-.402-.771-.81-1.158-1.213a.753.753 0 0 1 .287-1.233.76.76 0 0 1 .789.187q.302.317.603.635zM12.878 8.261c.386-.022.774-.003 1.161-.01H18a.748.748 0 0 1 .668 1.09.75.75 0 0 1-.667.41h-4.983a.75.75 0 0 1-.14-1.49M9.46 13.48a.75.75 0 1 1 1.075 1.047Q9.109 16.024 7.68 17.52a.75.75 0 0 1-.852.16c-.14-.06-.243-.176-.345-.286L5.459 16.32a.75.75 0 1 1 1.105-1.015q.288.306.58.608 1.157-1.216 2.316-2.431M12.913 15.257c.476-.014.952-.002 1.429-.006h3.63a.754.754 0 0 1 .758.93.75.75 0 0 1-.73.57h-5.01a.75.75 0 0 1-.078-1.494"
      opacity={0.5}
    />
  </svg>
);
export default SvgChecklist;
