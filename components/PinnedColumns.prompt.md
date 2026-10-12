Pinned Columns — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { PinnedColumns } = window.OCDesignSystem_0d42ed;
<PinnedColumns pinned="left" />
```

Props:
- `pinned`: "left" | "right"
- `checkBox`: boolean
- `sideLine`: boolean

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
