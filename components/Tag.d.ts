import * as React from 'react';
export interface TagProps {
  className?: string;
  style?: React.CSSProperties;
  showIcon?: boolean;
  color?: "blue" | "green" | "yellow" | "purple" | "gray" | "red";
  size?: "sm" | "md" | "lg";
  dIsabled?: boolean;
  type?: "line" | "light" | "fill";
  showClose?: boolean;
  /** Text content; defaults to "태그". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Tag: React.FC<TagProps>;
export default Tag;
