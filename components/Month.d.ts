import * as React from 'react';
export interface MonthProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "default" | "sm";
}
export declare const Month: React.FC<MonthProps>;
export default Month;
