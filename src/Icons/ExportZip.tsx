import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExportZip = ({
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
      d="M7.65 1.265c1.019-.02 2.038-.015 3.057-.015.556.004 1.115.008 1.666.087a4 4 0 0 1 1.205.36c.667.33 1.226.833 1.78 1.321q2.072 1.863 4.143 3.728c.516.467 1.04.925 1.541 1.408.483.47.95.978 1.244 1.592.248.51.36 1.073.407 1.634.056.659.048 1.32.05 1.98-.003 1.23.012 2.46-.037 3.69-.045.948-.116 1.912-.432 2.814a3.87 3.87 0 0 1-1.194 1.735c-.585.485-1.316.757-2.054.901-.94.183-1.9.21-2.855.232-1.304.019-2.608.008-3.913.011-1.38-.002-2.76.006-4.14-.007-.848-.012-1.699-.032-2.541-.137-.703-.09-1.41-.249-2.039-.584A3.76 3.76 0 0 1 1.99 20.48c-.407-.755-.559-1.616-.64-2.461-.104-1.152-.095-2.31-.1-3.464V10.66c.001-1.072-.007-2.144.02-3.215.03-.965.072-1.94.314-2.88.181-.706.516-1.384 1.035-1.903.274-.281.594-.516.943-.698.5-.262 1.052-.414 1.608-.51.819-.138 1.651-.17 2.48-.19M6.421 2.818a8.6 8.6 0 0 0-1.417.203 3 3 0 0 0-.983.414 2.25 2.25 0 0 0-.736.838c-.19.373-.291.783-.36 1.193-.098.602-.13 1.213-.151 1.821-.035 1.207-.022 2.415-.025 3.623v3.96c.006 1.004.003 2.01.094 3.01.044.455.109.912.244 1.35.11.354.279.697.53.974.24.269.546.472.879.606.439.177.909.258 1.376.314.784.09 1.573.103 2.361.114 1.005.009 2.01.005 3.014.006 1.417-.002 2.833.003 4.25-.004.953-.011 1.91-.017 2.855-.146.464-.067.93-.167 1.35-.378.346-.173.647-.435.863-.756.214-.317.342-.685.428-1.056.109-.475.157-.962.19-1.447.066-1.064.057-2.13.06-3.196-.001-.735.006-1.47-.014-2.205-.016-.44-.037-.887-.16-1.314l-.018.001.019-.002a2.5 2.5 0 0 0-.334-.685c-.208-.298-.465-.557-.724-.81-.705-.674-1.442-1.315-2.164-1.971l-2.153-1.937c-.648-.578-1.283-1.171-1.949-1.73a6 6 0 0 0-.453-.344c-.311-.22-.67-.371-1.047-.431-.382-.062-.771-.07-1.158-.078-.674-.01-1.35-.005-2.024-.005-.881.004-1.763.006-2.643.068"
    />
    <path
      fill="currentColor"
      d="M7.393 13.586h3.148c-.004.286.005.571-.003.856.005.047-.036.078-.06.113q-.867 1.14-1.733 2.282h1.795v.947c-1.049 0-2.098.003-3.147-.002q-.002-.423 0-.847a.09.09 0 0 1 .025-.07q.876-1.169 1.754-2.338H7.393zM11.262 13.587c.399-.003.798 0 1.198-.001q.002 2.1 0 4.199c-.4-.002-.8.002-1.2-.003.003-1.398 0-2.796.002-4.195M13.184 13.586c.63.002 1.258-.001 1.887.002.388.009.788.115 1.09.369.267.222.414.566.434.91.03.37-.083.757-.34 1.03-.238.253-.572.4-.913.446-.317.041-.637.02-.955.024-.008.472-.001.944-.003 1.416-.4.003-.801 0-1.202.002 0-1.4-.004-2.8.002-4.199m1.198.944c.003.303 0 .606.002.908h.506c.128-.002.264-.03.361-.118a.44.44 0 0 0 .121-.316c.003-.124-.023-.257-.113-.348-.096-.097-.238-.125-.369-.128-.17 0-.339-.004-.508.002"
    />
    <path
      fill="currentColor"
      d="M12.246 2.833c.377.06.736.211 1.047.43q.235.163.453.346v1.947c.003.53.003 1.062.037 1.592.032.413.067.836.23 1.221.117.283.353.511.638.623.368.148.768.185 1.16.216.622.04 1.246.036 1.869.04q1.166 0 2.332-.002c.259.253.516.512.724.81.147.209.257.442.334.685l-.02.002c-.186.009-.373.002-.56.004-1.138-.001-2.277.002-3.416-.002-.559-.005-1.12-.013-1.676-.068-.452-.046-.905-.126-1.326-.301a2.65 2.65 0 0 1-1.32-1.175c-.229-.415-.343-.882-.406-1.349a14 14 0 0 1-.095-1.598c-.01-1.14-.002-2.28-.005-3.421"
      opacity={0.5}
    />
  </svg>
);
export default SvgExportZip;
