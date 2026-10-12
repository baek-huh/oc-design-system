import * as React from 'react';
export interface SelectListItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed" | "disabled" | "active";
  size?: "md" | "lg";
  showPrefixes?: boolean;
  showSuffixes?: boolean;
  showSubtext?: boolean;
  /** Text content; defaults to "옵션 A 컨텐츠". */
  text1?: string;
  /** Text content; defaults to "서브정보". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const SelectListItem: React.FC<SelectListItemProps>;
export default SelectListItem;
