Badge Number — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { BadgeNumber } = window.OCDesignSystem_0d42ed;
<BadgeNumber type="primary" size="sm" />
```

Props:
- `type`: "primary" | "secondary" | "critical"
- `size`: "sm" | "md" | "lg" | "xl"
- `border`: boolean
- `text1`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
