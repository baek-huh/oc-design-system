import * as React from 'react';
export interface PulldownListItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed" | "disabled" | "active";
  showPrefixes?: boolean;
  showSuffixes?: boolean;
  showSubtext?: boolean;
  /** Text content; defaults to "옵션 A 컨텐츠". */
  text1?: string;
  /** Text content; defaults to "서브정보". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const PulldownListItem: React.FC<PulldownListItemProps>;
export default PulldownListItem;
