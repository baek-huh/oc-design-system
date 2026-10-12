Item Menu2 — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemMenu2 } = window.OCDesignSystem_0d42ed;
<ItemMenu2 type="default" state="default" />
```

Props:
- `type`: "default" | "keyboard" | "menu indicator" | "danger zone"
- `state`: "default" | "hover/pressed" | "disabled"
- `checked`: boolean
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
