Category — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Category } = window.OCDesignSystem_0d42ed;
<Category type="pages" />
```

Props:
- `type`: "pages" | "plan" | "contents" | "doc" | "ref" | "draft" | "library"
- `text1`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
