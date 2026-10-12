import * as React from 'react';
export interface BottomNavigationMobileProps {
  className?: string;
  style?: React.CSSProperties;
  menu?: "my contents" | "scanner" | "my class";
}
export declare const BottomNavigationMobile: React.FC<BottomNavigationMobileProps>;
export default BottomNavigationMobile;
