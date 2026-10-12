import * as React from 'react';
export interface TagAccentSmallProps {
  className?: string;
  style?: React.CSSProperties;
  showlcon?: boolean;
  shoRemovable?: boolean;
  /** Text content; defaults to "태그". */
  text1?: string;
}
export declare const TagAccentSmall: React.FC<TagAccentSmallProps>;
export default TagAccentSmall;
