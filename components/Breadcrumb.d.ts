import * as React from 'react';
export interface BreadcrumbProps {
  className?: string;
  style?: React.CSSProperties;
  depth?: "depth2" | "depth3" | "depth4";
  /** Text content; defaults to "카테고리". */
  text1?: string;
  /** Text content; defaults to "카테고리". */
  text2?: string;
  /** Text content; defaults to "카테고리". */
  text3?: string;
  /** Text content; defaults to "카테고리". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
