import * as React from 'react';
export interface PopoverHeaderLeftButtonProps {
  className?: string;
  style?: React.CSSProperties;
  button?: "icon" | "text";
  /** Text content; defaults to "취소". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PopoverHeaderLeftButton: React.FC<PopoverHeaderLeftButtonProps>;
export default PopoverHeaderLeftButton;
