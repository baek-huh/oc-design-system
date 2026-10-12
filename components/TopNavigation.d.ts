import * as React from 'react';
export interface TopNavigationProps {
  className?: string;
  style?: React.CSSProperties;
  domain?: "converter" | "slash" | "slash_partner" | "store" | "oc";
  login?: boolean;
  desktop?: boolean;
  /** Text content; defaults to "고객센터". */
  text1?: string;
  /** Text content; defaults to "주문내역". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const TopNavigation: React.FC<TopNavigationProps>;
export default TopNavigation;
