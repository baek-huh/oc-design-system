import * as React from 'react';
export interface DeviceProps {
  className?: string;
  style?: React.CSSProperties;
  device?: "mobile" | "pc" | "tablet";
  light?: boolean;
  /** Text content; defaults to "Mobile". */
  text1?: string;
}
export declare const Device: React.FC<DeviceProps>;
export default Device;
