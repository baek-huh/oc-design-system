Icon Button Error — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { IconButtonError } = window.OCDesignSystem_0d42ed;
<IconButtonError state="default" size="sm" />
```

Props:
- `state`: "default" | "hover" | "pressed" | "disabled"
- `size`: "sm" | "md" | "lg" | "xl"
- `disclosure`: boolean
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
