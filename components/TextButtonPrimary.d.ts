import * as React from 'react';
export interface TextButtonPrimaryProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed" | "disabled";
  size?: "sm" | "md" | "lg";
  icon?: "none" | "left" | "right";
  underline?: boolean;
  /** Text content; defaults to "버튼". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TextButtonPrimary: React.FC<TextButtonPrimaryProps>;
export default TextButtonPrimary;
