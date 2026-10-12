import * as React from 'react';
export interface ItemIconMenuProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "keyboard" | "menu indicator" | "danger zone";
  state?: "default" | "hover/pressed" | "disabled";
  /** Text content; defaults to "메뉴". */
  text1?: string;
  /** Text content; defaults to "단축키". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ItemIconMenu: React.FC<ItemIconMenuProps>;
export default ItemIconMenu;
