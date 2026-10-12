import * as React from 'react';
export interface ItemCaptionProps {
  className?: string;
  style?: React.CSSProperties;
  number?: "1" | "2" | "3" | "4";
  color?: "gray 700" | "primary";
  /** Text content; defaults to "Caption". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const ItemCaption: React.FC<ItemCaptionProps>;
export default ItemCaption;
