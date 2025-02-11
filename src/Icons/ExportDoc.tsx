import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExportDoc = ({
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
      d="M7.653 1.265c.913-.02 1.826-.014 2.739-.016.589.003 1.18-.002 1.766.06.46.05.92.154 1.34.351.689.32 1.261.83 1.826 1.327q1.859 1.67 3.715 3.343c.551.498 1.108.991 1.655 1.495.478.445.955.903 1.32 1.448.32.468.52 1.01.61 1.567.109.646.113 1.305.118 1.959 0 1.237.01 2.474-.018 3.711-.03.981-.071 1.973-.319 2.927-.183.712-.525 1.395-1.053 1.915-.51.518-1.178.858-1.876 1.043-.923.247-1.883.294-2.833.326-1.214.032-2.428.02-3.641.022q-2.148.002-4.297-.002c-.848-.006-1.698-.014-2.544-.082-.685-.057-1.374-.153-2.025-.383a3.9 3.9 0 0 1-1.698-1.142c-.48-.558-.765-1.259-.918-1.973-.197-.922-.231-1.869-.255-2.808-.025-1.305-.013-2.61-.016-3.916.003-1.499-.007-2.998.01-4.497.021-1.024.044-2.056.251-3.062.156-.755.457-1.497.977-2.075a3.8 3.8 0 0 1 1.016-.806c.463-.253.973-.408 1.489-.509.876-.167 1.771-.2 2.661-.223M6.436 2.817c-.455.034-.91.083-1.355.185-.347.081-.69.198-.992.389a2.25 2.25 0 0 0-.797.869c-.192.37-.294.78-.364 1.188-.09.541-.125 1.09-.147 1.637-.035.922-.03 1.845-.032 2.767.001 1.86-.004 3.72.003 5.579.01.936.015 1.876.13 2.807.065.482.159.968.368 1.41.16.341.405.643.71.866.287.212.625.348.969.44.673.175 1.372.22 2.064.254.848.035 1.696.033 2.544.036h4.477c1.02-.003 2.04.005 3.059-.04a12 12 0 0 0 1.577-.158c.395-.074.79-.181 1.142-.377a2.25 2.25 0 0 0 .852-.833c.186-.32.296-.676.372-1.035a10 10 0 0 0 .17-1.39c.061-1.027.054-2.056.058-3.084-.002-.742.005-1.484-.014-2.226-.016-.456-.034-.918-.16-1.359l-.02.001.02-.001a2.5 2.5 0 0 0-.324-.672c-.21-.304-.47-.566-.733-.823-.702-.671-1.435-1.31-2.154-1.962l-2.212-1.991c-.633-.564-1.251-1.142-1.9-1.685a6 6 0 0 0-.483-.365 2.5 2.5 0 0 0-1.018-.411 8 8 0 0 0-1.068-.076c-.697-.012-1.394-.007-2.092-.007-.883.004-1.768.006-2.65.067"
    />
    <path
      fill="currentColor"
      d="M5.009 13.588q.903-.005 1.807 0c.474.007.952.136 1.346.406.335.225.587.567.718.948.12.359.146.747.087 1.12a2 2 0 0 1-.65 1.184c-.429.375-1.007.541-1.57.538q-.869.002-1.738-.001.002-2.097 0-4.195M6.215 14.6c.003.718 0 1.435.001 2.152.36-.002.75.039 1.076-.15a.9.9 0 0 0 .433-.564c.07-.262.06-.545-.025-.803a.95.95 0 0 0-.617-.575c-.28-.089-.578-.06-.868-.06M11.595 13.604c.484-.058.99.021 1.418.262.355.193.649.497.832.858.173.333.237.714.217 1.087a2.04 2.04 0 0 1-.33 1.027 2.07 2.07 0 0 1-.936.77 2.4 2.4 0 0 1-1.652.056 2.13 2.13 0 0 1-.951-.64c-.483-.555-.593-1.374-.358-2.06.134-.38.388-.717.714-.954.306-.223.67-.362 1.046-.406m.023 1.056a.86.86 0 0 0-.48.301c-.184.23-.233.54-.214.827.012.249.098.501.274.68a.9.9 0 0 0 .592.255c.208.014.427-.01.61-.117a.9.9 0 0 0 .402-.496c.078-.225.082-.47.043-.703a.93.93 0 0 0-.476-.672c-.23-.117-.502-.126-.75-.075M15.403 14.143a2.13 2.13 0 0 1 1.263-.545c.347-.03.703-.002 1.036.104.377.124.719.361.955.68.162.218.267.474.327.738H17.7a.86.86 0 0 0-.456-.421 1 1 0 0 0-.71.012.87.87 0 0 0-.474.54c-.075.239-.079.496-.033.74.044.22.154.436.337.572.206.157.483.195.733.15a.84.84 0 0 0 .602-.462c.428-.003.856.001 1.284-.002-.066.32-.213.622-.428.868a1.9 1.9 0 0 1-.839.548 2.65 2.65 0 0 1-1.118.1 2.1 2.1 0 0 1-1.046-.407 1.9 1.9 0 0 1-.635-.873 2.5 2.5 0 0 1-.091-1.26c.074-.408.27-.798.576-1.082"
    />
    <path
      fill="currentColor"
      d="M12.246 2.833a2.5 2.5 0 0 1 1.018.411c.168.112.327.237.482.365v1.97c.003.525.003 1.051.037 1.576.032.41.068.83.229 1.213.115.277.343.503.62.617.362.15.756.188 1.141.22.634.044 1.27.04 1.906.043l2.334-.001c.262.257.523.52.733.823.142.205.25.434.324.672l-.02.001c-.396.008-.793.002-1.19.004-1.004-.002-2.008.004-3.013-.004-.54-.008-1.082-.02-1.619-.085-.433-.053-.866-.146-1.264-.33a2.64 2.64 0 0 1-1.267-1.232c-.2-.404-.3-.85-.358-1.295a15 15 0 0 1-.089-1.638c-.008-1.11-.001-2.22-.004-3.33"
      opacity={0.5}
    />
  </svg>
);
export default SvgExportDoc;
