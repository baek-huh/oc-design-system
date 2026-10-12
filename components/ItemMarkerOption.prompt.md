Item Marker Option — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemMarkerOption } = window.OCDesignSystem_0d42ed;
<ItemMarkerOption option="option" />
```

Props:
- `option`: "option" | "thickness-12mm" | "color" | "thickness-4mm" | "thickness-8mm"
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
