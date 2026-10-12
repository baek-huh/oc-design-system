Box Button Secondary — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { BoxButtonSecondary } = window.OCDesignSystem_0d42ed;
<BoxButtonSecondary state="default" size="xs" icon="none" />
```

Props:
- `state`: "default" | "hover" | "pressed" | "disabled"
- `size`: "xs" | "sm" | "md" | "lg" | "xl"
- `icon`: "none" | "left" | "right"
- `text1`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
