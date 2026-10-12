Check Check Box — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { CheckCheckBox } = window.OCDesignSystem_0d42ed;
<CheckCheckBox state="default" size="md" />
```

Props:
- `state`: "default" | "check" | "disabled" | "indeterminate" | "error"
- `description`: boolean
- `size`: "md" | "lg" | "sm"
- `text1`: string
- `text2`: string
- `text3`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
