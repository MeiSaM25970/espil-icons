import { FC, HTMLAttributes, useEffect, useState } from "react";

import styled, { keyframes } from "styled-components";
import { IconsName } from "./IconsName";
import * as icons from "./Icons";
export interface IconsProps extends HTMLAttributes<HTMLSpanElement> {
  name: IconsName;
  size?: number;
  color?: string;
}

export const Icons: FC<IconsProps> = ({
  name,
  size = 24,
  color,
  ...restProps
}) => {
  const [SelectedIcon, setSelectedIcon] = useState<any>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        setSelectedIcon(() => (icons as any)[name as any]);
      } catch (error) {
        console.error(`Icon "${name}" not found:`, error);
      }
    };

    loadIcon();
  }, [name]);
  if (!SelectedIcon) return null;

  return (
    <IconStyle
      $size={size}
      $color={color}
      $rotate={name === "Loading"}
      {...restProps}
    >
      <SelectedIcon />
    </IconStyle>
  );
};

const IconStyle = styled.span<{
  $size: number | undefined;
  $color: string | undefined;
  $rotate?: boolean;
}>`
  ${({ $size }) => {
    if ($size) {
      return `
    svg{
    width:${$size}px;
    height:${$size}px;
    };
    `;
    }
  }}
  ${({ $color }) => {
    if ($color) {
      return `
    svg{
    path{
    fill:${$color};
    };
    };
    `;
    }
  }}

  ${({ $rotate }) =>
    $rotate &&
    `
      svg{
    animation: ${rotateSvg} 1s infinite linear;
};
    `}
`;
const rotateSvg = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
