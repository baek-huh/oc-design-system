import * as React from 'react';
export interface StateTagProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "purple" | "green" | "yellow" | "red" | "gray" | "blue";
  size?: "sm" | "md" | "lg";
  dIsabled?: boolean;
  /** Text content; defaults to "상태 태그". */
  text1?: string;
}
export declare const StateTag: React.FC<StateTagProps>;
export default StateTag;
