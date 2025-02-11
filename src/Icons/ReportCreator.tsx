import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReportCreator = ({
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
      d="M8.65 1.279c1.12-.033 2.24-.029 3.36-.03a.75.75 0 0 1 .735.708.75.75 0 0 1-.712.79c-1.493.009-2.988-.015-4.479.084-.573.041-1.146.103-1.707.229a4.5 4.5 0 0 0-1.173.423 3 3 0 0 0-1.23 1.265c-.247.48-.38 1.01-.47 1.539-.134.82-.173 1.654-.198 2.485-.037 1.364-.022 2.729-.026 4.093.002 1.088.005 2.177.063 3.263.03.53.076 1.06.163 1.584.088.518.217 1.034.454 1.505.27.54.705.996 1.235 1.287.44.243.928.382 1.42.477.852.162 1.722.202 2.588.233 1.352.04 2.705.024 4.058.028 1.2 0 2.401-.001 3.6-.075.55-.036 1.102-.09 1.644-.2a5 5 0 0 0 1.225-.396 3 3 0 0 0 1.31-1.254c.252-.46.392-.97.486-1.482.15-.837.192-1.69.22-2.538.03-1.08.027-2.16.027-3.239a.78.78 0 0 1 .163-.528.752.752 0 0 1 1.3.231c.052.145.035.3.037.451-.003 1.29.007 2.582-.06 3.87-.046.873-.122 1.75-.338 2.6a6 6 0 0 1-.437 1.201 4.54 4.54 0 0 1-1.806 1.906c-.729.413-1.553.624-2.376.743-.932.133-1.873.17-2.813.193-1.215.023-2.43.013-3.645.017-.809 0-1.619-.002-2.428-.024a25 25 0 0 1-2.238-.141c-.748-.09-1.497-.238-2.193-.533A4.6 4.6 0 0 1 2.72 20.83c-.538-.611-.88-1.374-1.075-2.16-.21-.842-.288-1.71-.337-2.575-.056-1.158-.054-2.317-.058-3.476q-.001-.99.002-1.98c.005-1.02.011-2.04.076-3.058.052-.786.136-1.575.338-2.339a5.4 5.4 0 0 1 .727-1.656A4.55 4.55 0 0 1 4.402 1.95c.839-.356 1.749-.499 2.65-.582a26 26 0 0 1 1.598-.09"
    />
    <path
      fill="currentColor"
      d="M7.972 6.132c.168-.027.34-.01.51-.013a.57.57 0 0 1 .545.562v10.458c0 .09.006.18-.015.269a.57.57 0 0 1-.376.408c-.115.04-.238.027-.358.028-.131-.001-.27.013-.394-.04a.57.57 0 0 1-.356-.53V6.838c0-.112-.009-.228.03-.336a.57.57 0 0 1 .414-.37M11.685 9.192c.151-.029.307-.009.461-.015a.573.573 0 0 1 .6.585v7.513a.57.57 0 0 1-.36.53c-.126.053-.264.038-.397.04-.137 0-.28.01-.407-.05a.57.57 0 0 1-.335-.518V9.739a.57.57 0 0 1 .438-.547M15.373 12.5c.165-.043.338-.016.507-.024a.57.57 0 0 1 .54.346.8.8 0 0 1 .045.337v4.117a.57.57 0 0 1-.32.511c-.18.09-.387.047-.58.058a.575.575 0 0 1-.574-.402c-.033-.098-.025-.202-.026-.304v-4.094a.57.57 0 0 1 .408-.546M17.802 1.272c.32-.06.671.096.838.377.051.084.072.181.11.271.276.676.626 1.33 1.106 1.885.4.464.902.846 1.475 1.07.3.165.63.268.924.444.175.104.34.246.42.438a.74.74 0 0 1-.103.755c-.177.208-.435.316-.68.421a5 5 0 0 0-.566.267c-.637.26-1.184.711-1.607 1.25a6.8 6.8 0 0 0-1.03 1.918c-.152.31-.513.49-.851.454a.65.65 0 0 1-.474-.274c-.42-.705-.663-1.516-1.198-2.152-.113-.142-.253-.257-.376-.39a3.4 3.4 0 0 0-.73-.55c-.518-.3-1.082-.51-1.602-.805-.352-.248-.386-.812-.105-1.126.082-.098.204-.144.315-.201.653-.335 1.354-.597 1.93-1.064a3.4 3.4 0 0 0 .43-.423c.187-.176.343-.385.472-.607.339-.579.525-1.245.955-1.768a.6.6 0 0 1 .347-.19m-1.768 4.785a8.2 8.2 0 0 1 1.93 1.897 8.8 8.8 0 0 1 1.9-1.928 8.2 8.2 0 0 1-1.922-1.905 8 8 0 0 1-1.908 1.936"
      opacity={0.5}
    />
  </svg>
);
export default SvgReportCreator;
