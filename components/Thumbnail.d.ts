import * as React from 'react';
export interface ThumbnailProps {
  className?: string;
  style?: React.CSSProperties;
  ratio?: "1:1" | "1.414:1" | "16:9" | "3:2" | "4:3" | "5:4";
  border?: boolean;
  radius?: "none" | "4" | "8";
  portrait?: boolean;
}
export declare const Thumbnail: React.FC<ThumbnailProps>;
export default Thumbnail;
