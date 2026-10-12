import * as React from 'react';
export interface ItemProfileLabelProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | "xl";
  style2?: "label" | "verticalcenter" | "horizontal" | "vertical";
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "Option". */
  text2?: string;
}
export declare const ItemProfileLabel: React.FC<ItemProfileLabelProps>;
export default ItemProfileLabel;
