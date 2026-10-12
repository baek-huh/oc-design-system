import * as React from 'react';
export interface TabWebProps {
  className?: string;
  style?: React.CSSProperties;
  active?: boolean;
  update?: boolean;
  /** Text content; defaults to "탭 메뉴". */
  text1?: string;
}
export declare const TabWeb: React.FC<TabWebProps>;
export default TabWeb;
