import * as React from 'react';
export interface PopoverArrowProps {
  className?: string;
  style?: React.CSSProperties;
  placement?: "bottom" | "top" | "right" | "left";
}
export declare const PopoverArrow: React.FC<PopoverArrowProps>;
export default PopoverArrow;
