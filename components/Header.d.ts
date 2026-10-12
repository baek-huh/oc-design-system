import * as React from 'react';
export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "취업/자격증" | "초/중/고/n수";
  /** Text content; defaults to "🥰". */
  text1?: string;
  /** Text content; defaults to "홍길동 화이팅!". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Header: React.FC<HeaderProps>;
export default Header;
