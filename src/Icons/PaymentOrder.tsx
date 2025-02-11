import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaymentOrder = ({
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
      d="M4.68 2.748c.276-.061.561-.08.842-.05.072.01.143-.015.215-.013h10.574c.484 0 .968 0 1.45.025.457.026.92.077 1.351.236a3.56 3.56 0 0 1 1.96 1.875c.187.435.253.91.284 1.379.04.664.03 1.33.032 1.994v9.511c-.004.492.014.985-.027 1.476-.03.345-.125.698-.354.966-.276.34-.69.564-1.126.609-.343.037-.68-.074-.986-.221-.388-.188-.757-.412-1.133-.623-.134-.075-.264-.158-.405-.22-.096-.037-.185.03-.266.072-.76.43-1.516.867-2.276 1.298-.263.15-.558.254-.865.253a1.73 1.73 0 0 1-.91-.251q-.911-.52-1.821-1.04c-.195-.108-.385-.227-.585-.326-.074-.038-.157-.007-.223.033-.5.272-.982.578-1.496.824-.262.121-.544.214-.836.207a1.68 1.68 0 0 1-1.192-.564c-.211-.23-.33-.53-.374-.836-.06-.412-.047-.83-.05-1.245v-6.285H3.31a.724.724 0 0 1-.698-.692V5.335a2.654 2.654 0 0 1 2.07-2.587M4.81 4.21c-.328.131-.6.413-.696.756-.08.23-.052.475-.057.714-.001 1.57.003 3.14-.002 4.71.803.007 1.607.002 2.41.002v-5.08a1.21 1.21 0 0 0-.681-1.064 1.22 1.22 0 0 0-.974-.038m2.81-.081c.184.358.283.76.288 1.163q.001 6.575.001 13.15c.004.246-.002.494.04.737.006.083.098.135.173.135.155-.043.297-.124.439-.198.353-.192.699-.395 1.049-.593.254-.148.533-.268.831-.282.343-.029.685.068.981.237.733.414 1.463.835 2.195 1.252.083.046.165.097.253.133.106.034.199-.045.288-.089q.709-.403 1.418-.81c.315-.176.625-.363.944-.532.3-.16.648-.226.985-.182.243.026.472.124.684.242.393.22.78.452 1.179.664.12.06.239.126.369.16a.21.21 0 0 0 .155-.089c.044-.164.042-.336.049-.504.008-.542.002-1.083.004-1.624V9.19c-.002-.765.005-1.53-.006-2.296-.01-.407-.018-.817-.103-1.216-.071-.341-.266-.645-.505-.893-.261-.265-.589-.48-.959-.552-.442-.09-.896-.091-1.345-.1-.629-.007-1.257-.003-1.886-.004z"
    />
    <path
      fill="currentColor"
      d="M11.67 12.19a.39.39 0 0 1 .367-.188.38.38 0 0 1 .324.256c.025.066.02.137.021.206.379.08.74.278.983.583a1.3 1.3 0 0 1 .29.83.381.381 0 0 1-.763.001.56.56 0 0 0-.085-.29.86.86 0 0 0-.577-.377 1.13 1.13 0 0 0-.715.086.74.74 0 0 0-.39.447.52.52 0 0 0 .084.43.88.88 0 0 0 .58.354c.134.027.27.012.405.029.398.042.789.212 1.071.5a1.303 1.303 0 0 1 .158 1.676c-.24.348-.63.573-1.04.66.005.107-.006.221-.075.308a.383.383 0 0 1-.663-.086c-.03-.07-.028-.147-.027-.222a1.72 1.72 0 0 1-.967-.563 1.3 1.3 0 0 1-.306-.832.384.384 0 0 1 .394-.39.38.38 0 0 1 .342.239c.039.084.019.18.044.267.048.175.176.32.33.412.22.134.493.167.745.126a.9.9 0 0 0 .57-.326.54.54 0 0 0 .115-.415.7.7 0 0 0-.34-.458 1.05 1.05 0 0 0-.544-.143c-.373 0-.746-.112-1.051-.327a1.44 1.44 0 0 1-.512-.63 1.3 1.3 0 0 1 .067-1.112c.227-.412.66-.681 1.113-.777a.48.48 0 0 1 .051-.273"
    />
    <path
      fill="currentColor"
      d="M4.809 4.21a1.22 1.22 0 0 1 .974.038c.402.19.678.618.68 1.063v5.081c-.802 0-1.606.005-2.41-.002.006-1.57.002-3.14.003-4.71.005-.239-.023-.484.057-.714.097-.343.368-.625.696-.756M10.423 6.14c1.052-.009 2.105 0 3.158-.004h3.75a.722.722 0 0 1 0 1.445h-6.716a.9.9 0 0 1-.41-.061.73.73 0 0 1-.427-.737.725.725 0 0 1 .645-.643M10.34 10.005c.097-.022.196-.016.295-.016h6.607a.8.8 0 0 1 .36.054c.3.118.493.455.44.774a.725.725 0 0 1-.713.616h-6.825a.723.723 0 0 1-.164-1.428M16.251 13.855c.352-.013.705-.002 1.057-.006a.726.726 0 0 1 .668 1.038.73.73 0 0 1-.496.39c-.092.022-.187.016-.281.017h-.845a.726.726 0 0 1-.734-.665.726.726 0 0 1 .631-.774"
      opacity={0.5}
    />
  </svg>
);
export default SvgPaymentOrder;
