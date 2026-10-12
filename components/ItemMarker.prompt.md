Item Marker — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemMarker } = window.OCDesignSystem_0d42ed;
<ItemMarker thinkness="4mm" />
```

Props:
- `thinkness`: "4mm" | "8mm" | "12mm"
- `select`: boolean

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
