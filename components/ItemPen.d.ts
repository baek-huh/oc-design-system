import * as React from 'react';
export interface ItemPenProps {
  className?: string;
  style?: React.CSSProperties;
  thinkness?: "1mm" | "3mm" | "6mm";
  select?: boolean;
}
export declare const ItemPen: React.FC<ItemPenProps>;
export default ItemPen;
