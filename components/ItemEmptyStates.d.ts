import * as React from 'react';
export interface ItemEmptyStatesProps {
  className?: string;
  style?: React.CSSProperties;
  case?: "empty" | "error" | "loading" | "done";
}
export declare const ItemEmptyStates: React.FC<ItemEmptyStatesProps>;
export default ItemEmptyStates;
