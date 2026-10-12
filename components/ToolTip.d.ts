import * as React from 'react';
export interface ToolTipProps {
  className?: string;
  style?: React.CSSProperties;
  showClose?: boolean;
  pointer?: "bottom center" | "bottom left" | "bottom right" | "top center" | "top left" | "top right" | "left" | "right" | "none";
  title?: boolean;
  mode?: "light" | "dark";
  /** Text content; defaults to "툴팁 설명이에요". */
  text1?: string;
  /** Text content; defaults to "툴팁 설명이에요". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ToolTip: React.FC<ToolTipProps>;
export default ToolTip;
