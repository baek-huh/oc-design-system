import * as React from 'react';
export interface ColumnProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover/pressed" | "select";
}
export declare const Column: React.FC<ColumnProps>;
export default Column;
