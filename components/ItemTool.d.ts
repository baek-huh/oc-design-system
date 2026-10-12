import * as React from 'react';
export interface ItemToolProps {
  className?: string;
  style?: React.CSSProperties;
  item?: "lasso" | "pencil" | "marker" | "eraser";
  select?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemTool: React.FC<ItemToolProps>;
export default ItemTool;
