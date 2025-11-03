import { type ReactNode } from 'react';

export type IconProps = {
  className?: string;
  width?: string;
  height?: string;
};

type Props = IconProps & {
  viewBox: string;
  children: ReactNode;
};

export const BaseIcon = ({ className, viewBox, width, height, children }: Props) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    width={width}
    height={height}
  >
    {children}
  </svg>
);
