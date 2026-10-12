import * as React from 'react';
export interface BodyRowProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover/pressed";
  sideLine?: boolean;
  showAction?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const BodyRow: React.FC<BodyRowProps>;
export default BodyRow;
