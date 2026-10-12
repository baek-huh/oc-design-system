Item Tool — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemTool } = window.OCDesignSystem_0d42ed;
<ItemTool item="lasso" />
```

Props:
- `item`: "lasso" | "pencil" | "marker" | "eraser"
- `select`: boolean
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
