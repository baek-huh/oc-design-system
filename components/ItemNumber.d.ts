import * as React from 'react';
export interface ItemNumberProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed" | "disabled" | "focus";
  /** Text content; defaults to "3". */
  text1?: string;
}
export declare const ItemNumber: React.FC<ItemNumberProps>;
export default ItemNumber;
