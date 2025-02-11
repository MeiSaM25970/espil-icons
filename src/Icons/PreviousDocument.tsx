import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPreviousDocument = ({
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
      d="M3.601.497a.752.752 0 0 1 1.237.29.75.75 0 0 1-.165.759l-.733.733c.9.002 1.802-.002 2.704.002.47.01.966.026 1.388.26.362.197.627.552.733.949.132.49.106 1.002.113 1.504a.752.752 0 0 1-1.051.721.75.75 0 0 1-.448-.654c-.004-.293.003-.586-.016-.878a1.3 1.3 0 0 0-.057-.334c-.23-.07-.476-.06-.715-.068-.883-.004-1.767-.001-2.65-.002q.369.37.738.74c.247.257.266.691.043.968a.753.753 0 0 1-1.123.072L1.606 3.567a.755.755 0 0 1-.008-1.068zM9.85 2.293a.8.8 0 0 1 .294-.052q1.8-.004 3.599 0a22 22 0 0 1 1.755.056c.462.04.927.112 1.363.279.564.209 1.057.61 1.362 1.13.22.37.345.788.418 1.209.085.498.108 1.004.122 1.509.012.507.011 1.015.011 1.522v1.858a.75.75 0 0 1-.665.713.753.753 0 0 1-.834-.754V7.895c-.002-.615.002-1.23-.026-1.846-.026-.45-.053-.911-.204-1.341a1.17 1.17 0 0 0-.573-.667c-.325-.161-.69-.208-1.047-.245-.56-.05-1.122-.052-1.683-.056q-1.81-.004-3.62 0a.77.77 0 0 1-.726-.66.744.744 0 0 1 .455-.787M5.32 6.429a.73.73 0 0 1 .664-.494.76.76 0 0 1 .632.293.8.8 0 0 1 .167.473c-.01 1.02-.003 2.04-.005 3.06a.75.75 0 0 1-1.027.708.75.75 0 0 1-.472-.685V7.96q-.002-.639.005-1.278-.002-.128.037-.252"
    />
    <path
      fill="currentColor"
      d="M9.952 6.245c.325-.016.653-.003.98-.007h3.08a.753.753 0 0 1 .793.78.753.753 0 0 1-.723.719q-1.947.002-3.892 0c-.105 0-.212.006-.314-.021a.752.752 0 0 1 .076-1.47M9.209 9.256c.085-.02.173-.02.26-.019h5.286c.394 0 .74.357.73.75a.753.753 0 0 1-.73.75H9.672c-.147-.005-.297.011-.443-.015a.753.753 0 0 1-.02-1.466"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M3.536 7c.55-.306 1.166-.474 1.785-.571a.8.8 0 0 0-.037.252q-.008.639-.006 1.278c-.367.078-.732.187-1.058.377-.33.19-.609.467-.802.794a3.4 3.4 0 0 0-.373 1.013c-.124.577-.167 1.167-.196 1.754-.047 1.08-.038 2.16-.04 3.24.003 1.05-.006 2.101.05 3.15.028.473.07.945.159 1.41.073.374.178.745.363 1.08.197.357.493.66.847.862.332.193.705.302 1.08.378.792.154 1.602.18 2.407.201 1.342.025 2.684.012 4.026.015 1.275 0 2.55.004 3.824-.003.59-.005 1.182-.014 1.772-.046.468-.027.935-.067 1.396-.153.383-.073.765-.178 1.108-.367.35-.19.646-.475.85-.817.19-.317.302-.673.38-1.032.099-.466.144-.94.175-1.415.06-1.012.054-2.026.058-3.038q.002-1.08-.007-2.16a27 27 0 0 0-.08-2.013 7.6 7.6 0 0 0-.2-1.26 3 3 0 0 0-.392-.908 2.24 2.24 0 0 0-.776-.71c-.333-.186-.704-.289-1.075-.365 0-.507 0-1.015-.011-1.522.767.118 1.536.346 2.173.802.55.39.988.933 1.261 1.549.334.749.455 1.57.523 2.381.086 1.107.079 2.219.083 3.329-.003 1.2.011 2.4-.039 3.598-.045.938-.12 1.891-.434 2.783a3.87 3.87 0 0 1-1.21 1.739c-.576.472-1.293.739-2.018.882-.904.178-1.829.21-2.748.232-1.185.021-2.37.011-3.555.014-1.35-.001-2.7.002-4.05-.003a36 36 0 0 1-2.454-.076c-.721-.056-1.448-.154-2.131-.4a3.87 3.87 0 0 1-1.64-1.102c-.459-.52-.745-1.17-.906-1.839-.206-.854-.254-1.736-.284-2.611-.035-1.23-.022-2.46-.024-3.69.007-1.086.006-2.176.121-3.257.09-.796.254-1.602.65-2.307A3.75 3.75 0 0 1 3.535 7"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M4.528 10.375a.75.75 0 0 1 .617.159l2.6 2.167c.586.487 1.17.977 1.77 1.446.362.281.73.556 1.124.791.315.187.65.352 1.01.426.352.072.72.047 1.06-.065.42-.138.8-.371 1.164-.618.585-.403 1.134-.856 1.683-1.306q1.714-1.425 3.425-2.852a.75.75 0 0 1 .977.043c.249.225.309.624.14.914-.081.154-.23.251-.36.363-1.178.98-2.352 1.966-3.535 2.941-.566.46-1.136.917-1.75 1.311-.546.35-1.141.644-1.785.756a3.56 3.56 0 0 1-1.66-.105c-.658-.2-1.25-.565-1.806-.96-.65-.466-1.266-.979-1.883-1.489L4.18 11.68a.75.75 0 0 1-.194-.876.75.75 0 0 1 .543-.428"
      opacity={0.5}
    />
  </svg>
);
export default SvgPreviousDocument;
