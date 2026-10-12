import * as React from 'react';
export interface ItemHandleProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "pressed";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemHandle: React.FC<ItemHandleProps>;
export default ItemHandle;
