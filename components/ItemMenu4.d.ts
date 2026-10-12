import * as React from 'react';
export interface ItemMenu4Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "child" | "parent";
  action?: boolean;
  showCaret?: boolean;
  badge?: boolean;
  tag?: boolean;
  /** Text content; defaults to "서브 메뉴". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const ItemMenu4: React.FC<ItemMenu4Props>;
export default ItemMenu4;
