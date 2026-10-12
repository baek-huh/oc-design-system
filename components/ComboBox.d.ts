import * as React from 'react';
export interface ComboBoxProps {
  className?: string;
  style?: React.CSSProperties;
  showLabel?: boolean;
  state?: "default" | "hover" | "active" | "disabled" | "typed" | "error";
  size?: "sm" | "md";
  showHelptext?: boolean;
  /** Text content; defaults to "텍스트". */
  text1?: string;
  /** Text content; defaults to "헬프 텍스트가 이곳에 표기됩니다.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ComboBox: React.FC<ComboBoxProps>;
export default ComboBox;
