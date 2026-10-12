Divider — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Divider } = window.OCDesignSystem_0d42ed;
<Divider hierarchy="hierarchy-1" margin="24px" />
```

Props:
- `hierarchy`: "hierarchy-1" | "hierarchy-2" | "hierarchy-4" | "hierarchy-3"
- `margin`: "24px" | "0px" | "12px" | "8px"

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
