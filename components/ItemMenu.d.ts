import * as React from 'react';
export interface ItemMenuProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "child" | "parent";
  state?: "default" | "hover/focus";
  disclosure?: boolean;
  badge?: boolean;
  tag?: boolean;
  /** Text content; defaults to "메뉴". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const ItemMenu: React.FC<ItemMenuProps>;
export default ItemMenu;
