Button Group — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ButtonGroup } = window.OCDesignSystem_0d42ed;
<ButtonGroup size="sm" />
```

Props:
- `size`: "sm" | "md" | "lg"
- `segment`: boolean
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
