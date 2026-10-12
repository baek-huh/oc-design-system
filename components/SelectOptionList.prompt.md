Select Option List — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { SelectOptionList } = window.OCDesignSystem_0d42ed;
<SelectOptionList type="select" size="lg" />
```

Props:
- `type`: "select" | "multi-select" | "icon" | "search-none"
- `size`: "lg" | "md"
- `showSearch`: boolean
- `text1`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
