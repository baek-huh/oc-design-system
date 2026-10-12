import * as React from 'react';
export interface ContextMenuProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "checked" | "icon text" | "text";
}
export declare const ContextMenu: React.FC<ContextMenuProps>;
export default ContextMenu;
