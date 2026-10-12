import * as React from 'react';
export interface SwitchProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "disabled";
  size?: "xs" | "sm" | "md";
  checked?: boolean;
}
export declare const Switch: React.FC<SwitchProps>;
export default Switch;
