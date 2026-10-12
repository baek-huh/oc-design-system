import * as React from 'react';
export interface LeftNavigationProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "expandable" | "compact";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const LeftNavigation: React.FC<LeftNavigationProps>;
export default LeftNavigation;
