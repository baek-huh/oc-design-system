import * as React from 'react';
export interface TagWarningSmallProps {
  className?: string;
  style?: React.CSSProperties;
  showlcon?: boolean;
  shoRemovable?: boolean;
  /** Text content; defaults to "태그". */
  text1?: string;
}
export declare const TagWarningSmall: React.FC<TagWarningSmallProps>;
export default TagWarningSmall;
