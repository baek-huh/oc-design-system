import * as React from 'react';
export interface ItemTagProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "pressed" | "default";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemTag: React.FC<ItemTagProps>;
export default ItemTag;
