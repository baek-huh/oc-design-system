import * as React from 'react';
export interface IconIcStatusProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "correct" | "incomplete" | "wrong";
}
export declare const IconIcStatus: React.FC<IconIcStatusProps>;
export default IconIcStatus;
