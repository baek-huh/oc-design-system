import * as React from 'react';
export interface PopupTitleProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "타이틀". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PopupTitle: React.FC<PopupTitleProps>;
export default PopupTitle;
