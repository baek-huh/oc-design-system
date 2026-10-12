import * as React from 'react';
export interface ItemIconProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: "👤" | "📘" | "📝" | "🔍";
}
export declare const ItemIcon: React.FC<ItemIconProps>;
export default ItemIcon;
