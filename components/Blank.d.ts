import * as React from 'react';
export interface BlankProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Section/Blank". */
  text1?: string;
  /** Text content; defaults to "Black에는 어떤 아이템도\n들어올 수 있습니다.". */
  text2?: string;
}
export declare const Blank: React.FC<BlankProps>;
export default Blank;
