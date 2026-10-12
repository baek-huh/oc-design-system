Icon Button Ghost — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { IconButtonGhost } = window.OCDesignSystem_0d42ed;
<IconButtonGhost state="default" size="xxsmall" />
```

Props:
- `state`: "default" | "hover" | "pressed" | "disabled"
- `size`: "xxsmall" | "xs" | "sm" | "md" | "lg" | "xl"
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
