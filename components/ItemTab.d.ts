import * as React from 'react';
export interface ItemTabProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "text" | "box";
  size?: "sm" | "md" | "lg";
  update?: boolean;
  state?: "unselected" | "selected" | "disabled";
  icon?: boolean;
  /** Text content; defaults to "탭 메뉴". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemTab: React.FC<ItemTabProps>;
export default ItemTab;
