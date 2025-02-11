import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgManagement = ({
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
      d="M5.41 1.417c.85-.12 1.711-.143 2.569-.158 1.49-.016 2.981-.005 4.472-.008 1.01.001 2.018-.003 3.028.002.82.008 1.641.019 2.46.09.694.062 1.392.169 2.046.42.766.285 1.44.815 1.88 1.507.303.473.493 1.01.613 1.558.135.622.19 1.258.224 1.893.04.76.044 1.52.047 2.28v2.878c-.006.76-.01 1.522-.088 2.28-.063.583-.177 1.172-.442 1.702-.216.437-.54.82-.936 1.104-.379.273-.82.449-1.272.556-.57.135-1.156.177-1.74.203-.76.03-1.52.025-2.281.027h-4.74c-1.45-.002-2.9.003-4.35-.003-.76-.008-1.523-.016-2.278-.112-.614-.082-1.235-.237-1.762-.574a3.05 3.05 0 0 1-1.224-1.533c-.282-.762-.332-1.583-.365-2.387-.028-.84-.02-1.68-.02-2.52 0-.89-.005-1.781.008-2.672.013-.762.035-1.525.124-2.283.077-.637.205-1.275.466-1.864a3.78 3.78 0 0 1 1.593-1.771c.603-.344 1.286-.516 1.968-.615m.442 1.455c-.467.057-.936.14-1.373.32a2.3 2.3 0 0 0-.893.634c-.35.404-.523.926-.624 1.442-.136.706-.168 1.426-.191 2.142-.028 1.01-.02 2.02-.02 3.03 0 .64-.004 1.28.004 1.92.006.5.017 1.002.06 1.5.042.42.098.848.264 1.24.135.32.38.595.69.757.393.205.839.27 1.274.318.877.084 1.758.07 2.638.076 3.12-.002 6.24.003 9.36-.003.812-.01 1.63-.005 2.434-.146.454-.081.924-.25 1.218-.624.361-.456.431-1.059.49-1.618.045-.498.055-1 .062-1.5q.01-2.04 0-4.08c-.011-.816-.024-1.632-.119-2.443-.065-.518-.16-1.042-.39-1.516a2.26 2.26 0 0 0-.996-1.026c-.511-.265-1.087-.363-1.653-.43-.746-.082-1.497-.098-2.246-.108-1.04-.011-2.08-.004-3.121-.006-1.441.002-2.882-.004-4.323.004-.85.01-1.7.02-2.545.117"
    />
    <path
      fill="currentColor"
      d="M15.899 4.826a.6.6 0 0 1 .537-.595.6.6 0 0 1 .655.502c.017.18.003.363.008.545h1.35a.602.602 0 0 1 .515.908.6.6 0 0 1-.517.291H17.1c-.007.196.016.394-.016.588a.601.601 0 0 1-1.184-.136zM5.534 5.298a1 1 0 0 1 .165-.016h8.223c.153.002.315-.016.457.054.22.097.368.336.351.578a.603.603 0 0 1-.599.568H5.849c-.143 0-.294.012-.426-.054a.602.602 0 0 1 .11-1.13M6.91 8.068a.6.6 0 0 1 .623-.504.6.6 0 0 1 .57.598v2.1a.598.598 0 0 1-.81.564.6.6 0 0 1-.389-.532c-.004-.18 0-.36-.001-.54H5.552a.6.6 0 0 1-.502-.272.602.602 0 0 1 .502-.928h1.35c.005-.162-.008-.325.009-.486M9.73 8.54a1 1 0 0 1 .169-.017l8.429.001a.6.6 0 0 1 .591.505.6.6 0 0 1-.364.65c-.128.056-.271.044-.408.045H9.866a.601.601 0 0 1-.137-1.185"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M2.758 12.36h18.49c-.006.5-.017 1-.06 1.5H2.817c-.043-.5-.054-1-.06-1.5"
      opacity={0.75}
    />
    <path
      fill="currentColor"
      d="M11.25 17.75h1.5v3.498q1.62.001 3.24 0a.752.752 0 0 1 .698 1.05.75.75 0 0 1-.67.45q-4.004.001-8.009.001a.75.75 0 0 1-.74-.915.75.75 0 0 1 .471-.538c.153-.061.321-.046.482-.047l3.028-.001z"
    />
  </svg>
);
export default SvgManagement;
