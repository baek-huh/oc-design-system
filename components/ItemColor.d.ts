import * as React from 'react';
export interface ItemColorProps {
  className?: string;
  style?: React.CSSProperties;
  select?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemColor: React.FC<ItemColorProps>;
export default ItemColor;
