Chip — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Chip } = window.OCDesignSystem_0d42ed;
<Chip type="fill" size="sm" state="default" />
```

Props:
- `prefixes`: boolean
- `type`: "fill" | "outline" | "ghost"
- `size`: "sm" | "md" | "lg" | "xl"
- `state`: "default" | "hover" | "active" | "active_hover" | "disabled"
- `suffixes`: boolean
- `text1`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
