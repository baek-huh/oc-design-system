import * as React from 'react';
export interface CheckCheckBoxProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "check" | "disabled" | "indeterminate" | "error";
  description?: boolean;
  size?: "md" | "lg" | "sm";
  /** Text content; defaults to "텍스트". */
  text1?: string;
  /** Text content; defaults to "설명을 입력하세요". */
  text2?: string;
  /** Text content; defaults to "에러 메세지". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const CheckCheckBox: React.FC<CheckCheckBoxProps>;
export default CheckCheckBox;
