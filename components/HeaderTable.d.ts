import * as React from 'react';
export interface HeaderTableProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "select";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const HeaderTable: React.FC<HeaderTableProps>;
export default HeaderTable;
