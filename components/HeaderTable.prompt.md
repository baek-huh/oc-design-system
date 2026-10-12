Header Table — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { HeaderTable } = window.OCDesignSystem_0d42ed;
<HeaderTable state="default" />
```

Props:
- `state`: "default" | "select"
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
