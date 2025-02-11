import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMinimizeSquare = ({
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
      d="M8.67 1.778c1.428-.038 2.857-.027 4.284-.028 1.097.003 2.194.006 3.289.067.91.055 1.827.146 2.706.404.69.202 1.352.53 1.894 1.01.515.449.92 1.019 1.188 1.646.312.723.462 1.503.553 2.28.1.874.128 1.754.145 2.633.02 1.274.013 2.549.013 3.823-.005 1.209-.007 2.418-.1 3.624-.072.878-.193 1.763-.497 2.594a4.66 4.66 0 0 1-1.236 1.872c-.564.52-1.265.87-1.999 1.08-.861.248-1.758.337-2.65.391-1.062.061-2.127.064-3.19.069a.752.752 0 0 1-.784-.99.75.75 0 0 1 .69-.51c1.067-.004 2.133-.005 3.198-.065.58-.035 1.16-.087 1.731-.196.671-.128 1.348-.347 1.881-.79.277-.228.513-.507.692-.818.237-.411.379-.87.477-1.333.171-.829.22-1.677.253-2.52.042-1.26.033-2.52.036-3.78-.002-.825 0-1.65-.016-2.475-.016-.85-.043-1.7-.147-2.545-.092-.713-.233-1.437-.586-2.072a3.04 3.04 0 0 0-1.489-1.317c-.49-.209-1.014-.319-1.538-.394-.906-.127-1.823-.155-2.736-.174-1.26-.02-2.518-.014-3.777-.014-.824.002-1.648.006-2.472.034-.829.032-1.661.08-2.476.242-.488.1-.972.246-1.404.498-.512.296-.93.751-1.19 1.284-.243.496-.37 1.04-.456 1.582-.125.818-.161 1.646-.184 2.471A90 90 0 0 0 2.75 11.5a.75.75 0 0 1-1.5 0c.002-.9.006-1.8.04-2.7.04-.945.105-1.896.316-2.82.183-.8.502-1.58 1.029-2.216.345-.422.768-.78 1.241-1.051.748-.43 1.6-.64 2.447-.76.778-.11 1.563-.15 2.348-.174"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M16.47 6.961a.754.754 0 0 1 .973-.064.753.753 0 0 1 .044 1.17l-3.68 3.68q.981-.001 1.961 0a.75.75 0 0 1 .717.628.753.753 0 0 1-.761.871h-3.758a.75.75 0 0 1-.72-.735V8.733c0-.343.269-.661.607-.72a.752.752 0 0 1 .893.742v1.931q1.862-1.861 3.725-3.724M4.398 13.767c.61-.027 1.222-.02 1.833-.022.57.003 1.143 0 1.713.044.434.036.873.104 1.276.277a2.3 2.3 0 0 1 1.28 1.394c.134.391.185.805.213 1.215.035.546.032 1.093.034 1.64-.001.524.003 1.048-.013 1.573-.014.398-.038.799-.115 1.191a2.8 2.8 0 0 1-.357.954c-.217.352-.534.64-.904.826-.35.177-.74.264-1.127.312-.642.075-1.289.068-1.933.072-.548 0-1.095.004-1.642-.012a8 8 0 0 1-1.204-.108 2.9 2.9 0 0 1-.978-.355 2.26 2.26 0 0 1-.825-.884c-.195-.373-.285-.79-.333-1.206a15 15 0 0 1-.065-1.532c-.002-.57-.004-1.139.004-1.708.009-.475.023-.951.102-1.42.064-.375.178-.746.381-1.07.225-.36.556-.654.94-.838.535-.255 1.136-.313 1.72-.343m-.09 1.507q-.22.012-.437.043c-.251.038-.518.089-.717.258-.177.15-.255.378-.3.598-.076.379-.087.766-.097 1.152-.012.622-.008 1.244-.006 1.867.005.48.005.964.071 1.442.035.225.08.459.213.65.116.167.304.267.497.32.33.089.672.107 1.011.123.578.021 1.155.015 1.733.017.608-.006 1.22.008 1.824-.068.257-.039.532-.087.738-.259.19-.158.267-.406.312-.64.077-.42.084-.847.092-1.272q.011-1 0-2c-.008-.428-.014-.858-.09-1.28-.04-.213-.102-.436-.256-.598a.94.94 0 0 0-.463-.25 4.3 4.3 0 0 0-.807-.107c-.547-.029-1.096-.023-1.643-.025-.558.003-1.117-.004-1.675.029"
    />
  </svg>
);
export default SvgMinimizeSquare;
