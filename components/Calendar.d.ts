import * as React from 'react';
export interface CalendarProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "monthset";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
