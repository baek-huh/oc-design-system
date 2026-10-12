Item Button Segment — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemButtonSegment } = window.OCDesignSystem_0d42ed;
<ItemButtonSegment size="sm" type="right" />
```

Props:
- `size`: "sm" | "md" | "lg"
- `type`: "right" | "left" | "center"
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
