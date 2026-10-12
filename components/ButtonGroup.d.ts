import * as React from 'react';
export interface ButtonGroupProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  segment?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const ButtonGroup: React.FC<ButtonGroupProps>;
export default ButtonGroup;
