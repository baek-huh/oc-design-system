import * as React from 'react';
export interface ItemDate2Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "today" | "default" | "select";
  day?: "weekday" | "holiday" | "saturday";
  date?: string;
}
export declare const ItemDate2: React.FC<ItemDate2Props>;
export default ItemDate2;
