import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExportJpg = ({
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
      d="M7.653 1.265c.913-.02 1.826-.014 2.74-.016.583.003 1.169-.002 1.75.059.455.047.908.148 1.325.338.667.302 1.225.788 1.77 1.266C16.498 4.038 17.75 5.17 19.007 6.3c.59.534 1.186 1.06 1.77 1.6.51.482 1.02.982 1.375 1.593.294.498.45 1.067.516 1.639.082.702.073 1.41.076 2.116-.003 1.267.013 2.535-.037 3.802-.045.948-.116 1.911-.432 2.814a3.87 3.87 0 0 1-1.219 1.755c-.58.473-1.3.739-2.028.881-.918.178-1.855.209-2.787.23-1.2.02-2.398.01-3.598.013-1.334 0-2.67.003-4.004-.002-.9-.007-1.8-.017-2.697-.102-.738-.072-1.482-.2-2.163-.506a3.8 3.8 0 0 1-1.592-1.33c-.469-.692-.679-1.52-.786-2.34-.135-1.058-.139-2.127-.148-3.192-.005-1.933-.002-3.867-.003-5.8.005-1.134-.003-2.27.092-3.4.074-.822.208-1.656.57-2.404A3.76 3.76 0 0 1 3.534 1.98c.76-.404 1.623-.553 2.471-.633a24 24 0 0 1 1.649-.083m-.816 1.528a11 11 0 0 0-1.62.18c-.378.078-.754.192-1.087.392-.33.198-.608.484-.797.82A3.6 3.6 0 0 0 2.97 5.22c-.09.44-.133.889-.162 1.337-.038.594-.048 1.19-.054 1.786-.01 2.025-.003 4.05-.005 6.075.004 1.05-.004 2.101.068 3.15.036.487.09.977.21 1.451.087.338.213.669.411.957.2.291.471.534.783.703.35.19.74.295 1.13.367.49.09.989.128 1.487.154.884.042 1.77.04 2.655.043 2.01-.002 4.019.004 6.028-.004.974-.012 1.954-.017 2.92-.159.444-.07.89-.172 1.292-.38.344-.179.641-.446.852-.77.202-.31.324-.666.407-1.024.11-.477.158-.965.191-1.452.064-1.033.057-2.07.06-3.105-.001-.757.007-1.514-.013-2.271-.017-.449-.036-.903-.16-1.337l-.019.001h.02a2.5 2.5 0 0 0-.326-.674c-.209-.303-.47-.565-.732-.822a30 30 0 0 0-.615-.574c-1.264-1.144-2.533-2.281-3.8-3.422-.615-.55-1.22-1.113-1.852-1.642a6 6 0 0 0-.496-.374 2.5 2.5 0 0 0-1.004-.402 7 7 0 0 0-.821-.07c-.531-.017-1.063-.013-1.594-.014-.998.003-1.997-.004-2.994.044"
    />
    <path
      fill="currentColor"
      d="M7.813 13.586h1.2l-.001 2.811c-.005.359-.11.735-.372.992-.264.268-.647.383-1.015.393-.427.018-.88-.072-1.217-.348-.352-.279-.496-.747-.485-1.184q.591.001 1.184.001c.007.15.028.322.154.422a.38.38 0 0 0 .437 0c.098-.083.115-.222.115-.343zM9.733 13.586q.936-.002 1.872.001c.39.006.795.11 1.1.363.272.223.421.57.441.918.03.361-.079.74-.324 1.012a1.5 1.5 0 0 1-.855.45c-.341.06-.688.03-1.033.037v1.418H9.732zm1.201.94v.91q.247.002.492.002c.13-.001.268-.025.368-.112.093-.08.127-.206.13-.323.002-.127-.026-.265-.12-.354-.1-.095-.245-.12-.378-.122zM14.937 13.836c.324-.17.69-.246 1.055-.25.502-.009 1.026.102 1.43.415.316.236.525.597.6.981-.424.009-.848 0-1.273.005a.77.77 0 0 0-.51-.324 1.1 1.1 0 0 0-.664.08.84.84 0 0 0-.39.402c-.106.22-.121.472-.101.713.02.223.093.45.246.619a.97.97 0 0 0 .594.28c.245.032.51.02.731-.102a.97.97 0 0 0 .392-.427c-.399-.003-.797 0-1.195-.001v-.825q1.108-.002 2.217 0c-.001.354.002.708 0 1.063a.2.2 0 0 1-.017.083 2.1 2.1 0 0 1-1.517 1.191 2.7 2.7 0 0 1-1.19-.043 1.98 1.98 0 0 1-1.048-.682 2.04 2.04 0 0 1-.415-1.087c-.038-.425.018-.865.213-1.247.18-.363.481-.662.842-.844"
    />
    <path
      fill="currentColor"
      d="M12.246 2.833c.36.058.704.197 1.004.402.173.114.336.242.496.374v1.946c.002.53.003 1.062.037 1.593.031.412.067.835.229 1.22.117.283.353.511.637.624.376.15.785.187 1.185.217.615.04 1.23.036 1.846.039h2.333c.262.256.523.518.732.821.143.206.25.434.325.673l-.019.001c-.254.009-.508.002-.763.004-1.083-.001-2.165.002-3.248-.002a19 19 0 0 1-1.642-.068c-.463-.047-.927-.13-1.357-.314a2.64 2.64 0 0 1-1.306-1.193c-.218-.407-.327-.864-.39-1.319-.072-.552-.086-1.11-.094-1.666-.009-1.118-.002-2.235-.005-3.352"
      opacity={0.5}
    />
  </svg>
);
export default SvgExportJpg;
