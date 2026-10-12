import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "disabled" | "action" | "focused";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  theme?: "primary" | "secondary" | "error" | "ghost";
  style2?: "fill" | "line" | "light";
  showPrefixes?: boolean;
  showSuffixes?: boolean;
  /** Text content; defaults to "버튼". */
  text1?: string;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
