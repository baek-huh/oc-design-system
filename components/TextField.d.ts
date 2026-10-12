import * as React from 'react';
export interface TextFieldProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "active" | "disabled" | "typed" | "error";
  dataType?: "default" | "pw";
  size?: "md" | "lg";
  showLabel?: boolean;
  showClose?: boolean;
  showHelptext?: boolean;
  showSuffixes?: boolean;
  showPrefixes?: boolean;
  /** Text content; defaults to "플레이스홀더". */
  text1?: string;
  /** Text content; defaults to "헬프 텍스트가 이곳에 표기됩니다.". */
  text2?: string;
  /** Text content; defaults to "헬프 텍스트가 이곳에 표기됩니다.". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const TextField: React.FC<TextFieldProps>;
export default TextField;
