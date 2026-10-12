import * as React from 'react';
export interface ItemCustomTableOfContentsProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "pressed" | "default";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemCustomTableOfContents: React.FC<ItemCustomTableOfContentsProps>;
export default ItemCustomTableOfContents;
