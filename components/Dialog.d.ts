import * as React from 'react';
export interface DialogProps {
  className?: string;
  style?: React.CSSProperties;
  showTitle?: boolean;
  showContents?: boolean;
  /** Text content; defaults to "타이틀". */
  text1?: string;
  /** Text content; defaults to "내용이 들어가는 자리입니다.". */
  text2?: string;
}
export declare const Dialog: React.FC<DialogProps>;
export default Dialog;
