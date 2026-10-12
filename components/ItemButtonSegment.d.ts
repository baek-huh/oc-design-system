import * as React from 'react';
export interface ItemButtonSegmentProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  type?: "right" | "left" | "center";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemButtonSegment: React.FC<ItemButtonSegmentProps>;
export default ItemButtonSegment;
