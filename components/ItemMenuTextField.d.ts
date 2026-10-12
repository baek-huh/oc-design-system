import * as React from 'react';
export interface ItemMenuTextFieldProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "typed" | "disabled";
}
export declare const ItemMenuTextField: React.FC<ItemMenuTextFieldProps>;
export default ItemMenuTextField;
