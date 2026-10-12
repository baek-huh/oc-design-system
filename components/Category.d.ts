import * as React from 'react';
export interface CategoryProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "pages" | "plan" | "contents" | "doc" | "ref" | "draft" | "library";
  /** Text content; defaults to "Doc". */
  text1?: string;
}
export declare const Category: React.FC<CategoryProps>;
export default Category;
