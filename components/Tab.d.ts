import * as React from 'react';
export interface TabProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "text" | "box";
  size?: "sm" | "md" | "lg";
  tabType?: "scrollable - 2tabs" | "scrollable - 3tabs" | "fixed - 2tabs" | "fixed - 3tabs";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Tab: React.FC<TabProps>;
export default Tab;
