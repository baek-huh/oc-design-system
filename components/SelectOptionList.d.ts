import * as React from 'react';
export interface SelectOptionListProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "select" | "multi-select" | "icon" | "search-none";
  size?: "lg" | "md";
  showSearch?: boolean;
  /** Text content; defaults to "등록된 “레이블\"이 없어요.". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SelectOptionList: React.FC<SelectOptionListProps>;
export default SelectOptionList;
