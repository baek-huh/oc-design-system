import * as React from 'react';
export interface TopBarProps {
  className?: string;
  style?: React.CSSProperties;
  leftItems?: "2 icons" | "1 icon" | "none" | "text button";
  titleArea?: "center" | "none" | "left";
  rightItems?: "1 icon" | "none" | "2 icons" | "text button";
  title?: string;
  button?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const TopBar: React.FC<TopBarProps>;
export default TopBar;
