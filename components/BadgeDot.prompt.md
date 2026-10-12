Badge Dot — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { BadgeDot } = window.OCDesignSystem_0d42ed;
<BadgeDot type="critical" size="lg" />
```

Props:
- `type`: "critical" | "primary" | "badge"
- `size`: "lg" | "md" | "sm" | "xl" | "xs"
- `border`: boolean

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
