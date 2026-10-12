Item Profile Label — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemProfileLabel } = window.OCDesignSystem_0d42ed;
<ItemProfileLabel size="sm" style2="label" />
```

Props:
- `size`: "sm" | "md" | "lg" | "xl"
- `style2`: "label" | "verticalcenter" | "horizontal" | "vertical"
- `text1`: string
- `text2`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
