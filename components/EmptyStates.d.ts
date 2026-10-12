import * as React from 'react';
export interface EmptyStatesProps {
  className?: string;
  style?: React.CSSProperties;
  visual?: "icon" | "image";
  button?: boolean;
  header?: boolean;
  /** Text content; defaults to "데이터가 없을 때 내용이에요". */
  text1?: string;
  /** Text content; defaults to "데이터가 없을 때 내용이에요". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const EmptyStates: React.FC<EmptyStatesProps>;
export default EmptyStates;
