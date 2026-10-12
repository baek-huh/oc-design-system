import * as React from 'react';
export interface PopoverListItemDefaultProps {
  className?: string;
  style?: React.CSSProperties;
  showPrefixes?: boolean;
  showSuffixes?: boolean;
  description?: boolean;
  /** Text content; defaults to "팝오버 메뉴". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const PopoverListItemDefault: React.FC<PopoverListItemDefaultProps>;
export default PopoverListItemDefault;
