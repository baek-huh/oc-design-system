Combo Box — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ComboBox } = window.OCDesignSystem_0d42ed;
<ComboBox state="default" size="sm" />
```

Props:
- `showLabel`: boolean
- `state`: "default" | "hover" | "active" | "disabled" | "typed" | "error"
- `size`: "sm" | "md"
- `showHelptext`: boolean
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
