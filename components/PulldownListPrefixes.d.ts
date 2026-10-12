import * as React from 'react';
export interface PulldownListPrefixesProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: "icon" | "checkbox";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PulldownListPrefixes: React.FC<PulldownListPrefixesProps>;
export default PulldownListPrefixes;
