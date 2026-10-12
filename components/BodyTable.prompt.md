Body Table — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { BodyTable } = window.OCDesignSystem_0d42ed;
<BodyTable state="default" />
```

Props:
- `state`: "default" | "hover/pressed" | "select"
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
