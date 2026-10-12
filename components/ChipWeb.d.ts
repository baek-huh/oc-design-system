import * as React from 'react';
export interface ChipWebProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "fill" | "outline";
  size?: "lg" | "sm" | "md";
  state?: "default" | "hover" | "active" | "disabled" | "active_hover";
  icon?: boolean;
  /** Text content; defaults to "텍스트영역". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ChipWeb: React.FC<ChipWebProps>;
export default ChipWeb;
