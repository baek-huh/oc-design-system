import * as React from 'react';
export interface IconButtonErrorProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed" | "disabled";
  size?: "sm" | "md" | "lg" | "xl";
  disclosure?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const IconButtonError: React.FC<IconButtonErrorProps>;
export default IconButtonError;
