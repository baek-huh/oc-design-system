import * as React from 'react';
export interface ItemPaginationBtnProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed" | "disabled";
  line?: boolean;
  left?: boolean;
  right?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemPaginationBtn: React.FC<ItemPaginationBtnProps>;
export default ItemPaginationBtn;
