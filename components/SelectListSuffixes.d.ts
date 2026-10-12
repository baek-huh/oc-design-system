import * as React from 'react';
export interface SelectListSuffixesProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "tag" | "icon";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SelectListSuffixes: React.FC<SelectListSuffixesProps>;
export default SelectListSuffixes;
