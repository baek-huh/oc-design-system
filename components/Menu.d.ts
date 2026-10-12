import * as React from 'react';
export interface MenuProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "checked" | "icon text" | "text";
}
export declare const Menu: React.FC<MenuProps>;
export default Menu;
