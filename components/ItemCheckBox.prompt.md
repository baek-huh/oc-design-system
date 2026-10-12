Item Check Box — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemCheckBox } = window.OCDesignSystem_0d42ed;
<ItemCheckBox state="default" size="md" />
```

Props:
- `state`: "default" | "indeterminate" | "check" | "disabled"
- `checked`: boolean
- `size`: "md" | "lg" | "sm"
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
