import * as React from 'react';
export interface TagWarningLargeProps {
  className?: string;
  style?: React.CSSProperties;
  showlcon?: boolean;
  shoRemovable?: boolean;
  /** Text content; defaults to "태그". */
  text1?: string;
}
export declare const TagWarningLarge: React.FC<TagWarningLargeProps>;
export default TagWarningLarge;
