import * as React from 'react';
export interface SelectListItemSearchProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "typed";
  /** Text content; defaults to "검색어 입력". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const SelectListItemSearch: React.FC<SelectListItemSearchProps>;
export default SelectListItemSearch;
