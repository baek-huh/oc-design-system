import * as React from 'react';
export interface ItemContextMenuProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "keyboard" | "menu indicator" | "danger zone";
  state?: "default" | "hover/pressed" | "disabled";
  checked?: boolean;
  /** Text content; defaults to "메뉴". */
  text1?: string;
  /** Text content; defaults to "단축키". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemContextMenu: React.FC<ItemContextMenuProps>;
export default ItemContextMenu;
