import * as React from 'react';
export interface ItemMarkerOptionProps {
  className?: string;
  style?: React.CSSProperties;
  option?: "option" | "thickness-12mm" | "color" | "thickness-4mm" | "thickness-8mm";
  /** Text content; defaults to "형광펜". */
  text1?: string;
  /** Text content; defaults to "12.0mm". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemMarkerOption: React.FC<ItemMarkerOptionProps>;
export default ItemMarkerOption;
