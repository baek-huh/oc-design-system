import * as React from 'react';
export interface ItemWeekProps {
  className?: string;
  style?: React.CSSProperties;
  day?: "sun" | "weekday" | "sat";
  size?: "default" | "sm";
  /** Text content; defaults to "일". */
  text1?: string;
}
export declare const ItemWeek: React.FC<ItemWeekProps>;
export default ItemWeek;
