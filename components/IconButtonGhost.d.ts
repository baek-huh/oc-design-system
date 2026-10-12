import * as React from 'react';
export interface IconButtonGhostProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed" | "disabled";
  size?: "xxsmall" | "xs" | "sm" | "md" | "lg" | "xl";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const IconButtonGhost: React.FC<IconButtonGhostProps>;
export default IconButtonGhost;
