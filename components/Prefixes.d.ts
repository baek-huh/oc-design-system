import * as React from 'react';
export interface PrefixesProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "icon-line";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Prefixes: React.FC<PrefixesProps>;
export default Prefixes;
