Pencil Kit — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { PencilKit } = window.OCDesignSystem_0d42ed;
<PencilKit item="pen" />
```

Props:
- `item`: "pen" | "marker" | "eraser" | "lasso"
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode
- `icon4`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
