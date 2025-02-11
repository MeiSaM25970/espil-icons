import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPassword = ({
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
      d="M6.249 9.428a.75.75 0 0 1 1.233.533c.005.247 0 .493.002.74.219-.125.434-.256.655-.376a.753.753 0 0 1 .965.282c.21.325.11.802-.215 1.011-.215.133-.438.253-.655.382q.309.178.617.357a.752.752 0 0 1-.732 1.308q-.318-.182-.635-.365v.708a.752.752 0 0 1-.969.71.75.75 0 0 1-.53-.677c-.003-.248 0-.495-.001-.742q-.307.176-.614.354a.75.75 0 0 1-1.118-.604.75.75 0 0 1 .347-.682c.202-.122.41-.234.612-.356l.005-.02c-.205-.122-.414-.237-.619-.36a.751.751 0 0 1 .171-1.344.75.75 0 0 1 .604.062q.305.175.612.352v-.714c0-.213.102-.422.265-.56M11.59 9.37a.75.75 0 0 1 1.158.62v.71c.208-.118.413-.24.621-.357a.747.747 0 0 1 1.11.637.75.75 0 0 1-.371.667q-.306.177-.61.353.313.18.626.363a.75.75 0 0 1-.775 1.283l-.601-.347v.712a.749.749 0 0 1-1.5 0v-.712c-.208.118-.413.24-.62.357a.75.75 0 0 1-1.004-.268.753.753 0 0 1 .226-1.012c.213-.13.432-.25.647-.376q-.229-.133-.457-.264c-.118-.069-.244-.13-.334-.236a.75.75 0 0 1-.104-.848.753.753 0 0 1 1.005-.32c.215.12.427.247.641.369v-.712c0-.247.135-.487.343-.619M16.87 9.368a.75.75 0 0 1 1.151.595c.005.246 0 .491.002.737l.61-.352a.752.752 0 0 1 1.116.574.75.75 0 0 1-.344.711c-.21.125-.422.244-.632.367q.307.178.613.355a.749.749 0 0 1-.733 1.307c-.211-.118-.42-.242-.63-.362-.004.26.006.52-.005.778a.753.753 0 0 1-.765.672.75.75 0 0 1-.727-.683c-.008-.256 0-.512-.003-.768l-.6.346a.753.753 0 0 1-1.098-.415.75.75 0 0 1 .31-.86c.21-.126.424-.246.636-.37l-.466-.27c-.1-.057-.205-.11-.288-.192a.75.75 0 0 1 .89-1.192q.308.178.616.355V9.99c0-.248.136-.49.347-.621"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      d="M8.831 1.274c1.486-.036 2.972-.02 4.458-.024 1.43.012 2.868.007 4.29.188 1.052.14 2.124.42 2.987 1.065.78.57 1.344 1.404 1.642 2.317.395 1.202.462 2.477.51 3.731.047 1.57.027 3.14.032 4.71-.01 1.37-.008 2.744-.162 4.108-.119.998-.34 2.012-.874 2.877a4.54 4.54 0 0 1-2.037 1.768c-.988.437-2.076.572-3.144.65-1.608.105-3.22.08-4.831.085-1.517-.003-3.036.013-4.548-.109-1.051-.092-2.122-.259-3.073-.742a4.53 4.53 0 0 1-2.048-2.12c-.467-.996-.61-2.104-.694-3.19a43 43 0 0 1-.084-2.668c-.007-1.19-.005-2.38-.002-3.57.005-.784.014-1.568.051-2.351.039-.762.1-1.525.25-2.274.13-.646.332-1.285.664-1.858A4.5 4.5 0 0 1 3.98 2.155c.606-.329 1.276-.52 1.951-.64.957-.169 1.93-.214 2.9-.241m.03 1.5c-.736.02-1.473.053-2.204.146-.554.074-1.11.182-1.63.396-.429.176-.824.44-1.134.786a3.3 3.3 0 0 0-.69 1.234c-.194.593-.28 1.214-.339 1.832-.114 1.308-.107 2.621-.113 3.932.002 1.2-.007 2.4.013 3.6.015.75.038 1.502.112 2.25.061.595.15 1.192.342 1.761.14.42.35.82.645 1.153.28.32.63.577 1.017.755.53.245 1.109.366 1.685.448.76.104 1.529.138 2.296.16 1.446.034 2.893.019 4.34.022 1.333-.01 2.67-.003 3.995-.151.627-.076 1.258-.19 1.841-.441.463-.2.88-.508 1.193-.904.324-.403.525-.89.656-1.386.16-.61.23-1.24.277-1.867.095-1.368.083-2.741.086-4.112-.003-1.51.017-3.02-.063-4.53-.038-.655-.096-1.313-.236-1.956-.106-.486-.264-.969-.532-1.391a3 3 0 0 0-1.14-1.052c-.47-.248-.992-.383-1.514-.475a16 16 0 0 0-1.983-.189c-.89-.037-1.78-.041-2.671-.044-1.416.003-2.833-.011-4.25.023"
    />
  </svg>
);
export default SvgPassword;
