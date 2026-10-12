import * as React from 'react';
export interface ItemRadioProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "check" | "disabled";
  checked?: boolean;
  size?: "sm" | "md";
}
export declare const ItemRadio: React.FC<ItemRadioProps>;
export default ItemRadio;
