import * as React from 'react';
export interface ItemBodyProps {
  className?: string;
  style?: React.CSSProperties;
  typo?: "body2 regular" | "body2 medium";
  caption?: boolean;
}
export declare const ItemBody: React.FC<ItemBodyProps>;
export default ItemBody;
