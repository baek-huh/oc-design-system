import * as React from 'react';
export interface ItemPenOptionProps {
  className?: string;
  style?: React.CSSProperties;
  option?: "color" | "thickness-1mm" | "thickness-3mm" | "thickness-6mm";
  /** Text content; defaults to "펜 색상". */
  text1?: string;
  /** Text content; defaults to "6.0mm". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemPenOption: React.FC<ItemPenOptionProps>;
export default ItemPenOption;
