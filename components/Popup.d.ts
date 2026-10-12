import * as React from 'react';
export interface PopupProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | "xl";
  showTitle?: boolean;
}
export declare const Popup: React.FC<PopupProps>;
export default Popup;
