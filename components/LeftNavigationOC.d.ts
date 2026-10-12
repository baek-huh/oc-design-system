import * as React from 'react';
export interface LeftNavigationOCProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "expandable" | "compact";
  download?: boolean;
  ocPDF?: boolean;
  quiz?: boolean;
  note?: boolean;
  scheduler?: boolean;
  myPage?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const LeftNavigationOC: React.FC<LeftNavigationOCProps>;
export default LeftNavigationOC;
