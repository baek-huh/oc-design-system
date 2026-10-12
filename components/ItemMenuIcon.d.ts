import * as React from 'react';
export interface ItemMenuIconProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "hover/focus" | "default";
  dotBadge?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemMenuIcon: React.FC<ItemMenuIconProps>;
export default ItemMenuIcon;
