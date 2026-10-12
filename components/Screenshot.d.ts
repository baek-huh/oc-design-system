import * as React from 'react';
export interface ScreenshotProps {
  className?: string;
  style?: React.CSSProperties;
  device?: "pc" | "mo" | "full";
}
export declare const Screenshot: React.FC<ScreenshotProps>;
export default Screenshot;
