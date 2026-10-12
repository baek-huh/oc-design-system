import * as React from 'react';
export interface PulldownListSuffixesProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "tag" | "icon";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PulldownListSuffixes: React.FC<PulldownListSuffixesProps>;
export default PulldownListSuffixes;
