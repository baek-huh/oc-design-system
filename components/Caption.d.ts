import * as React from 'react';
export interface CaptionProps {
  className?: string;
  style?: React.CSSProperties;
  number?: "1" | "2" | "3" | "4";
  /** Text content; defaults to "Caption". */
  text1?: string;
  /** Text content; defaults to "Caption". */
  text2?: string;
  /** Text content; defaults to "Caption". */
  text3?: string;
  /** Text content; defaults to "Caption". */
  text4?: string;
}
export declare const Caption: React.FC<CaptionProps>;
export default Caption;
