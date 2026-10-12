import * as React from 'react';
export interface ItemBottomNavigationProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "focus" | "disabled" | "notification";
  /** Text content; defaults to "메뉴". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ItemBottomNavigation: React.FC<ItemBottomNavigationProps>;
export default ItemBottomNavigation;
