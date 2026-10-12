import * as React from 'react';
export interface HeaderRowProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover/pressed";
  sideLine?: boolean;
  showAction?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const HeaderRow: React.FC<HeaderRowProps>;
export default HeaderRow;
