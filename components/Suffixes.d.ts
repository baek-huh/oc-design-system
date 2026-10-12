import * as React from 'react';
export interface SuffixesProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "icon-line";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Suffixes: React.FC<SuffixesProps>;
export default Suffixes;
