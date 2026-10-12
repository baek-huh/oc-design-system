import * as React from 'react';
export interface EventProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "done" | "description" | "none";
  /** Text content; defaults to "공부 계획". */
  text1?: string;
  /** Text content; defaults to "공부 계획 또는 할 일의 관련된 설명". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Event: React.FC<EventProps>;
export default Event;
