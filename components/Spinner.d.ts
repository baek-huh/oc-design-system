import * as React from 'react';
export interface SpinnerProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "gray 900" | "primary";
  description?: boolean;
  background?: "false" | "\btrue";
  /** Text content; defaults to "설명을 적어주세요.". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;
