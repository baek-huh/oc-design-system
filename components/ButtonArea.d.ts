import * as React from 'react';
export interface ButtonAreaProps {
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  button?: "single" | "multi";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ButtonArea: React.FC<ButtonAreaProps>;
export default ButtonArea;
