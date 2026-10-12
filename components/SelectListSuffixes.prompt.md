Select List Suffixes — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { SelectListSuffixes } = window.OCDesignSystem_0d42ed;
<SelectListSuffixes type="tag" />
```

Props:
- `type`: "tag" | "icon"
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
