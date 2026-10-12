import * as React from 'react';
export interface ItemMarkerProps {
  className?: string;
  style?: React.CSSProperties;
  thinkness?: "4mm" | "8mm" | "12mm";
  select?: boolean;
}
export declare const ItemMarker: React.FC<ItemMarkerProps>;
export default ItemMarker;
