import * as React from 'react';
export interface TextAreaFieldProps {
  className?: string;
  style?: React.CSSProperties;
  showLabel?: boolean;
  state?: "\bdefault" | "\bhover" | "active" | "typed" | "disabled" | "error";
  showCount?: boolean;
  showHelptext?: boolean;
  /** Text content; defaults to "플레이스홀더\n". */
  text1?: string;
  /** Text content; defaults to "000/000". */
  text2?: string;
  /** Text content; defaults to "헬프 텍스트가 이곳에 표기됩니다.". */
  text3?: string;
  /** Text content; defaults to "헬프 텍스트가 이곳에 표기됩니다.". */
  text4?: string;
}
export declare const TextAreaField: React.FC<TextAreaFieldProps>;
export default TextAreaField;
