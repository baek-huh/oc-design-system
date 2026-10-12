Dim Area — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { DimArea } = window.OCDesignSystem_0d42ed;
<DimArea size="mobile" />
```

Props:
- `size`: "mobile" | "tablet" | "pc"

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
