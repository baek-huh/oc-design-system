import * as React from 'react';
export interface BgProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  color?: "green" | "red" | "blue" | "purple" | "yellow" | "teal" | "gray";
}
export declare const Bg: React.FC<BgProps>;
export default Bg;
