Item Number — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemNumber } = window.OCDesignSystem_0d42ed;
<ItemNumber state="default" />
```

Props:
- `state`: "default" | "hover" | "pressed" | "disabled" | "focus"
- `text1`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
