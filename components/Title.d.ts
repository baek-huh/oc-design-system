import * as React from 'react';
export interface TitleProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  light?: boolean;
  sub?: boolean;
  subTitle?: string;
}
export declare const Title: React.FC<TitleProps>;
export default Title;
