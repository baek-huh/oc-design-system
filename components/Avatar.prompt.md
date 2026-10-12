Avatar — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Avatar } = window.OCDesignSystem_0d42ed;
<Avatar size="sm" badge="none" />
```

Props:
- `size`: "sm" | "md" | "lg" | "xl"
- `badge`: "none" | "dot" | "icon" | "icon+dot"
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
