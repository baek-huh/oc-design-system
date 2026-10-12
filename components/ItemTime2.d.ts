import * as React from 'react';
export interface ItemTime2Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "4 or less" | "more than 4" | "more than 8" | "default" | "state5" | "state6" | "state7" | "state8";
  size?: "default" | "sm";
  /** Text content; defaults to "02:00:00". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemTime2: React.FC<ItemTime2Props>;
export default ItemTime2;
