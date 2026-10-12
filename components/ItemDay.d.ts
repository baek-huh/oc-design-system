import * as React from 'react';
export interface ItemDayProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "today";
  etc?: boolean;
  description?: boolean;
  size?: "default" | "sm";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const ItemDay: React.FC<ItemDayProps>;
export default ItemDay;
