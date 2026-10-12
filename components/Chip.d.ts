import * as React from 'react';
export interface ChipProps {
  className?: string;
  style?: React.CSSProperties;
  prefixes?: boolean;
  type?: "fill" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  state?: "default" | "hover" | "active" | "active_hover" | "disabled";
  suffixes?: boolean;
  /** Text content; defaults to "텍스트영역". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Chip: React.FC<ChipProps>;
export default Chip;
