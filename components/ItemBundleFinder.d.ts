import * as React from 'react';
export interface ItemBundleFinderProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "pressed" | "default";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemBundleFinder: React.FC<ItemBundleFinderProps>;
export default ItemBundleFinder;
