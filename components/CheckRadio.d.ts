import * as React from 'react';
export interface CheckRadioProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "check" | "disabled";
  description?: boolean;
  checked?: "true" | "false" | "check";
  size?: "sm" | "md";
  /** Text content; defaults to "텍스트". */
  text1?: string;
  /** Text content; defaults to "설명을 입력하세요". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const CheckRadio: React.FC<CheckRadioProps>;
export default CheckRadio;
