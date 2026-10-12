import * as React from 'react';
export interface ToastProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "sm" | "md";
  button?: boolean;
  size?: "sm" | "md";
  case?: "fail" | "success" | "delete" | "caution" | "-";
  showButton?: boolean;
  /** Text content; defaults to "✅". */
  text1?: string;
  /** Text content; defaults to "-가 저장되었어요". */
  text2?: string;
  /** Text content; defaults to "버튼". */
  text3?: string;
}
export declare const Toast: React.FC<ToastProps>;
export default Toast;
