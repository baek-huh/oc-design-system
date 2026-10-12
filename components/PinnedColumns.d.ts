import * as React from 'react';
export interface PinnedColumnsProps {
  className?: string;
  style?: React.CSSProperties;
  pinned?: "left" | "right";
  checkBox?: boolean;
  sideLine?: boolean;
}
export declare const PinnedColumns: React.FC<PinnedColumnsProps>;
export default PinnedColumns;
