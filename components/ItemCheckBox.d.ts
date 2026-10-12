import * as React from 'react';
export interface ItemCheckBoxProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "indeterminate" | "check" | "disabled";
  checked?: boolean;
  size?: "md" | "lg" | "sm";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemCheckBox: React.FC<ItemCheckBoxProps>;
export default ItemCheckBox;
