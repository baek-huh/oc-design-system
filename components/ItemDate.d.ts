import * as React from 'react';
export interface ItemDateProps {
  className?: string;
  style?: React.CSSProperties;
  date?: string;
  state?: "today" | "default" | "select";
  day?: "weekday" | "holiday" | "saturday";
}
export declare const ItemDate: React.FC<ItemDateProps>;
export default ItemDate;
