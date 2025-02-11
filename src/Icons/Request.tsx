import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRequest = ({
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
      d="M11.699 1.346c.522-.124 1.065-.115 1.594-.045.563.074 1.117.206 1.668.344a170 170 0 0 1 2.7.72c.46.13.92.262 1.37.42.489.173.971.378 1.4.672.304.207.571.465.809.746.515.61.874 1.354 1.026 2.139.128.683.041 1.384-.093 2.059-.137.685-.32 1.36-.498 2.035-.316 1.175-.627 2.35-.947 3.525a22 22 0 0 1-.48 1.563c-.191.53-.426 1.051-.774 1.498a4.7 4.7 0 0 1-2.214 1.519c-.104.035-.212.06-.316.095-.583.138-1.191.131-1.78.037-.724-.106-1.43-.295-2.137-.478-.751-.2-1.502-.398-2.25-.607a17 17 0 0 1-1.53-.492c-.455-.177-.899-.394-1.284-.697a4.7 4.7 0 0 1-1.451-2.035 4 4 0 0 1-.262-1.363c-.006-.586.1-1.167.225-1.738.21-.931.47-1.85.714-2.773l.266-.992c.15-.556.297-1.113.452-1.668.234-.817.467-1.647.886-2.392.298-.534.735-.98 1.23-1.334a4.8 4.8 0 0 1 1.676-.758m.681 1.41c-.446.035-.875.197-1.26.42-.43.26-.82.611-1.057 1.06-.253.472-.41.988-.567 1.498-.304 1.037-.57 2.085-.854 3.128-.25.951-.522 1.897-.733 2.858-.105.525-.21 1.065-.132 1.601.08.462.27.903.54 1.285.224.311.495.596.83.789.41.239.862.39 1.311.535.893.276 1.8.505 2.702.75.73.19 1.457.391 2.202.508.418.062.852.092 1.263-.023a3.25 3.25 0 0 0 1.591-.973c.18-.206.314-.448.428-.695.144-.32.257-.653.363-.988.19-.616.355-1.24.524-1.864l.657-2.455c.193-.727.394-1.454.536-2.193.082-.457.152-.93.066-1.393a3.2 3.2 0 0 0-.529-1.217c-.22-.308-.488-.59-.817-.782-.388-.23-.816-.378-1.243-.517-.52-.166-1.047-.308-1.573-.45-.908-.241-1.811-.498-2.727-.704-.5-.106-1.008-.21-1.52-.178"
    />
    <path
      fill="currentColor"
      d="M11.641 9.261a.75.75 0 0 1 .335.017l4.824 1.293a.75.75 0 0 1-.2 1.472c-.133.003-.257-.046-.384-.077q-2.328-.623-4.654-1.247a.749.749 0 0 1 .08-1.458"
    />
    <path
      fill="currentColor"
      d="M5.172 6.578c.905-.27 1.82-.508 2.734-.75-.156.555-.302 1.112-.453 1.669-.673.187-1.351.36-2.018.57-.547.18-1.111.362-1.57.722a3.23 3.23 0 0 0-1.067 1.765c-.087.41-.043.832.022 1.241.096.576.243 1.142.389 1.706q.547 2.069 1.108 4.133c.151.535.302 1.07.504 1.59.139.347.301.693.551.976a3.24 3.24 0 0 0 1.779 1.006c.48.08.968.003 1.441-.086.778-.156 1.542-.37 2.308-.573.688-.185 1.378-.364 2.06-.57.497-.155.997-.315 1.451-.573.313-.175.572-.433.788-.717l-.037-.015c.589.094 1.197.1 1.78-.038l.012.027c-.104.19-.192.388-.31.57a4.6 4.6 0 0 1-1.059 1.19c-.404.309-.867.527-1.34.706-.504.188-1.021.339-1.538.484-.56.157-1.123.305-1.685.456-.646.172-1.292.346-1.946.485-.718.15-1.463.26-2.192.13a4.73 4.73 0 0 1-2.636-1.49c-.522-.589-.814-1.335-1.054-2.073-.3-.94-.54-1.898-.798-2.85-.242-.91-.492-1.817-.726-2.729-.156-.623-.31-1.249-.384-1.888-.064-.544-.05-1.104.1-1.634A4.75 4.75 0 0 1 2.709 7.81c.27-.257.581-.466.911-.637.495-.254 1.023-.432 1.553-.595"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M10.891 12.149a.75.75 0 0 1 .312.02l2.89.774a.751.751 0 0 1-.365 1.454q-1.457-.39-2.913-.78a.75.75 0 0 1-.521-.98.75.75 0 0 1 .597-.489"
      opacity={0.5}
    />
  </svg>
);
export default SvgRequest;
