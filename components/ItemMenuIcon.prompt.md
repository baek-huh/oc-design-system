Item Menu Icon — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemMenuIcon } = window.OCDesignSystem_0d42ed;
<ItemMenuIcon state="hover/focus" />
```

Props:
- `state`: "hover/focus" | "default"
- `dotBadge`: boolean
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
