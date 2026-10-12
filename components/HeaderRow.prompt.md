Header Row — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { HeaderRow } = window.OCDesignSystem_0d42ed;
<HeaderRow state="default" />
```

Props:
- `state`: "default" | "hover/pressed"
- `sideLine`: boolean
- `showAction`: boolean
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
