import * as React from 'react';
export interface StateProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "inprogress" | "holding" | "done" | "archiving";
  light?: boolean;
  /** Text content; defaults to "In Progress". */
  text1?: string;
}
export declare const State: React.FC<StateProps>;
export default State;
