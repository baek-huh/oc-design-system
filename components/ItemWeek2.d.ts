import * as React from 'react';
export interface ItemWeek2Props {
  className?: string;
  style?: React.CSSProperties;
  day?: "sun" | "weekday" | "sat";
  size?: "default" | "sm";
  /** Text content; defaults to "일". */
  text1?: string;
}
export declare const ItemWeek2: React.FC<ItemWeek2Props>;
export default ItemWeek2;
