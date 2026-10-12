import * as React from 'react';
export interface BodyTableProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover/pressed" | "select";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const BodyTable: React.FC<BodyTableProps>;
export default BodyTable;
