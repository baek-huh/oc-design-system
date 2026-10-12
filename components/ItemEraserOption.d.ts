import * as React from 'react';
export interface ItemEraserOptionProps {
  className?: string;
  style?: React.CSSProperties;
  option?: "option";
  /** Text content; defaults to "지우개". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemEraserOption: React.FC<ItemEraserOptionProps>;
export default ItemEraserOption;
