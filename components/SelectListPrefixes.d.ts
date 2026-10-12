import * as React from 'react';
export interface SelectListPrefixesProps {
  className?: string;
  style?: React.CSSProperties;
  prefixes?: "icon" | "check-box" | "select";
  icon?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SelectListPrefixes: React.FC<SelectListPrefixesProps>;
export default SelectListPrefixes;
