import * as React from 'react';
export interface IconButtonOutlineProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed" | "disabled";
  size?: "xxsmall" | "xs" | "sm" | "md" | "lg" | "xl";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const IconButtonOutline: React.FC<IconButtonOutlineProps>;
export default IconButtonOutline;
