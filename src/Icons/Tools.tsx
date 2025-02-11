import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTools = ({
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
      d="M4.338 2.367c1.127-.207 2.29-.117 3.432-.11 1.488-.062 2.918 1.213 2.957 2.713a31 31 0 0 1 0 3.065c-.055 1.395-1.3 2.653-2.7 2.692a30 30 0 0 1-3.054 0c-1.4-.052-2.665-1.3-2.7-2.707-.05-1.018-.053-2.04.002-3.058.04-1.187.95-2.245 2.063-2.595m.457 1.445c-.51.163-1.015.613-1.012 1.188-.058 1.062-.095 2.135.027 3.195.16.51.602 1.022 1.175 1.022 1.07.055 2.15.098 3.218-.03.507-.16 1.017-.607 1.015-1.18.057-1.067.095-2.147-.028-3.21-.165-.5-.6-1.007-1.165-1.012-1.075-.06-2.16-.1-3.23.027M15.338 13.368c1.124-.208 2.284-.118 3.422-.11 1.492-.068 2.925 1.207 2.967 2.712.05 1.015.053 2.035 0 3.05-.047 1.398-1.292 2.665-2.695 2.707-1.017.05-2.035.053-3.05 0-1.402-.047-2.672-1.294-2.71-2.702a30 30 0 0 1 0-3.032c.03-1.2.943-2.273 2.066-2.626m.467 1.442c-.51.16-1.02.607-1.02 1.18-.06 1.065-.098 2.143.025 3.205.157.512.607 1.025 1.185 1.023 1.068.057 2.145.095 3.21-.03.503-.16 1.01-.6 1.01-1.168.06-1.067.098-2.148-.025-3.21-.158-.513-.605-1.025-1.178-1.027-1.067-.058-2.145-.095-3.207.027"
    />
    <path
      fill="currentColor"
      d="M17.103 2.38c.37-.297.97-.072 1.08.377.445 1.128 1.154 2.256 2.337 2.708.45.265 1.215.388 1.23 1.035.005.66-.79.74-1.225 1.02-1.172.47-1.885 1.57-2.322 2.7-.12.522-.898.742-1.22.29-.433-.73-.663-1.6-1.318-2.177-.547-.618-1.355-.858-2.057-1.24-.478-.203-.47-1.003.01-1.19.755-.398 1.607-.675 2.167-1.358.645-.587.76-1.532 1.317-2.165M15.8 6.513A7.2 7.2 0 0 1 17.515 8.2a7.8 7.8 0 0 1 1.688-1.715 7.2 7.2 0 0 1-1.708-1.695A7.1 7.1 0 0 1 15.8 6.513M4.335 13.368c1.13-.213 2.293-.108 3.438-.11 1.492-.063 2.92 1.222 2.957 2.725q.068 1.531-.003 3.062c-.05 1.182-.95 2.232-2.06 2.585-1.13.215-2.294.11-3.437.113-1.025.035-2.01-.535-2.543-1.398-.714-1.15-.36-2.585-.44-3.862-.122-1.366.778-2.716 2.088-3.116m.485 1.435c-.875.204-1.185 1.132-1.075 1.94.09 1.137-.395 2.717.832 3.395 1.05.21 2.143.107 3.21.102.673.018 1.408-.515 1.43-1.22.048-1.067.095-2.148-.022-3.213-.165-.507-.605-1.027-1.183-1.027-1.062-.047-2.132-.09-3.192.023"
      opacity={0.5}
    />
  </svg>
);
export default SvgTools;
