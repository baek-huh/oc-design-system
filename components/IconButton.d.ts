import * as React from 'react';
export interface IconButtonProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed" | "disabled";
  size?: "lg" | "md" | "sm" | "xl" | "xs" | "xxsmall";
  theme?: "primary" | "secondary" | "error" | "ghost";
  style2?: "fill" | "line" | "light";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
