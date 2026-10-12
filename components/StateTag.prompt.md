State Tag — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { StateTag } = window.OCDesignSystem_0d42ed;
<StateTag color="purple" size="sm" />
```

Props:
- `color`: "purple" | "green" | "yellow" | "red" | "gray" | "blue"
- `size`: "sm" | "md" | "lg"
- `dIsabled`: boolean
- `text1`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
