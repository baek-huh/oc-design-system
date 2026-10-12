import * as React from 'react';
export interface PaginationExtraProps {
  className?: string;
  style?: React.CSSProperties;
  focus?: "center" | "last" | "first";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const PaginationExtra: React.FC<PaginationExtraProps>;
export default PaginationExtra;
