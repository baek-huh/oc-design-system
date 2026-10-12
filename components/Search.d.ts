import * as React from 'react';
export interface SearchProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "active" | "disabled";
  size?: "md" | "lg";
  type?: "default" | "inField";
  showClose?: boolean;
  /** Text content; defaults to "플레이스홀더". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Search: React.FC<SearchProps>;
export default Search;
