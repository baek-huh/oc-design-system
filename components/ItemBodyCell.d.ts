import * as React from 'react';
export interface ItemBodyCellProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "text" | "state" | "icon" | "hyperlink" | "button" | "tag";
  showIcon?: boolean;
  /** Text content; defaults to "바디 텍스트". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemBodyCell: React.FC<ItemBodyCellProps>;
export default ItemBodyCell;
