Progress Indicators — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ProgressIndicators } = window.OCDesignSystem_0d42ed;
<ProgressIndicators size="4px" color="primary" />
```

Props:
- `size`: "4px" | "2px"
- `color`: "primary" | "gray 700"
- `gauge`: boolean

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
