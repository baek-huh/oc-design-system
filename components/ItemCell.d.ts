import * as React from 'react';
export interface ItemCellProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "text" | "number";
  accent?: boolean;
  disabled?: boolean;
  focus?: boolean;
  focusLeft?: boolean;
  focusCenter?: boolean;
  focusRight?: boolean;
  /** Text content; defaults to "10". */
  text1?: string;
}
export declare const ItemCell: React.FC<ItemCellProps>;
export default ItemCell;
