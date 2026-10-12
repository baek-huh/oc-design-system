import * as React from 'react';
export interface ItemHeaderCellProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "sorting_ascending" | "sorting_descending" | "hover";
  sort?: boolean;
  /** Text content; defaults to "헤더 텍스트". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ItemHeaderCell: React.FC<ItemHeaderCellProps>;
export default ItemHeaderCell;
