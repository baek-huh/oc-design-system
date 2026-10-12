import * as React from 'react';
export interface PopoverHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  showLeftButton?: boolean;
  showRightButton?: boolean;
  /** Text content; defaults to "타이틀". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const PopoverHeader: React.FC<PopoverHeaderProps>;
export default PopoverHeader;
