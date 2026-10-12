Item Tab — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemTab } = window.OCDesignSystem_0d42ed;
<ItemTab type="text" size="sm" state="unselected" />
```

Props:
- `type`: "text" | "box"
- `size`: "sm" | "md" | "lg"
- `update`: boolean
- `state`: "unselected" | "selected" | "disabled"
- `icon`: boolean
- `text1`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
