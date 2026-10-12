import * as React from 'react';
export interface CloseProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Close: React.FC<CloseProps>;
export default Close;
