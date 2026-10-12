Chip Web — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ChipWeb } = window.OCDesignSystem_0d42ed;
<ChipWeb type="fill" size="lg" state="default" />
```

Props:
- `type`: "fill" | "outline"
- `size`: "lg" | "sm" | "md"
- `state`: "default" | "hover" | "active" | "disabled" | "active_hover"
- `icon`: boolean
- `text1`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
