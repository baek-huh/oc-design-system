import * as React from 'react';
export interface ThumnailProps {
  className?: string;
  style?: React.CSSProperties;
  light?: boolean;
  state?: "inprogress" | "holding" | "done" | "archiving";
  device?: boolean;
  screen?: boolean;
  title?: string;
  date?: string;
  /** Text content; defaults to "@김지원". */
  text1?: string;
  /** Text content; defaults to "slash unit". */
  text2?: string;
  /** Text content; defaults to "slash unit". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Thumnail: React.FC<ThumnailProps>;
export default Thumnail;
