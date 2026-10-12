Select List Prefixes — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { SelectListPrefixes } = window.OCDesignSystem_0d42ed;
<SelectListPrefixes prefixes="icon" />
```

Props:
- `prefixes`: "icon" | "check-box" | "select"
- `icon`: React.ReactNode
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
