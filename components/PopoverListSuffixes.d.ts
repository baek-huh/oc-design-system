import * as React from 'react';
export interface PopoverListSuffixesProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "switch" | "tag" | "icon";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PopoverListSuffixes: React.FC<PopoverListSuffixesProps>;
export default PopoverListSuffixes;
