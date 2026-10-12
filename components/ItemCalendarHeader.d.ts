import * as React from 'react';
export interface ItemCalendarHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  calendarHeader?: "yyyy.mm" | "yyyy";
  /** Text content; defaults to "2023.12". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ItemCalendarHeader: React.FC<ItemCalendarHeaderProps>;
export default ItemCalendarHeader;
