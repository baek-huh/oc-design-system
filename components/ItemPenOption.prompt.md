Item Pen Option — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemPenOption } = window.OCDesignSystem_0d42ed;
<ItemPenOption option="color" />
```

Props:
- `option`: "color" | "thickness-1mm" | "thickness-3mm" | "thickness-6mm"
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
