import * as React from 'react';
export interface ItemEraserProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "52mm" | "40mm" | "28mm";
  select?: boolean;
}
export declare const ItemEraser: React.FC<ItemEraserProps>;
export default ItemEraser;
