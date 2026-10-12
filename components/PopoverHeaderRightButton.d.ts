import * as React from 'react';
export interface PopoverHeaderRightButtonProps {
  className?: string;
  style?: React.CSSProperties;
  button?: "icon" | "text";
  /** Text content; defaults to "확인". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PopoverHeaderRightButton: React.FC<PopoverHeaderRightButtonProps>;
export default PopoverHeaderRightButton;
