import * as React from 'react';
export interface LabelProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "icon" | "subtext" | "tag";
  required?: boolean;
  state?: boolean;
  /** Text content; defaults to "레이블". */
  text1?: string;
  /** Text content; defaults to "보조텍스트". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Label: React.FC<LabelProps>;
export default Label;
