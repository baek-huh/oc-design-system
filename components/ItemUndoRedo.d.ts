import * as React from 'react';
export interface ItemUndoRedoProps {
  className?: string;
  style?: React.CSSProperties;
  item?: "redo" | "undo";
  select?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemUndoRedo: React.FC<ItemUndoRedoProps>;
export default ItemUndoRedo;
