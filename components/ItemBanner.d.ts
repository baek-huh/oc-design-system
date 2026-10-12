import * as React from 'react';
export interface ItemBannerProps {
  className?: string;
  style?: React.CSSProperties;
  image?: boolean;
  type?: "default" | "dotbadge";
  /** Text content; defaults to "OC 라운지". */
  text1?: string;
  /** Text content; defaults to "OC팀에게 들려주세요 🙌🏻". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ItemBanner: React.FC<ItemBannerProps>;
export default ItemBanner;
