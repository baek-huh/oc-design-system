import * as React from 'react';
export interface BoxButtonOutlineProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed" | "disabled";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: "none" | "left" | "right";
  /** Text content; defaults to "버튼". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const BoxButtonOutline: React.FC<BoxButtonOutlineProps>;
export default BoxButtonOutline;
