Bg — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Bg } = window.OCDesignSystem_0d42ed;
<Bg mode="dark" color="green" />
```

Props:
- `mode`: "dark" | "light"
- `color`: "green" | "red" | "blue" | "purple" | "yellow" | "teal" | "gray"

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
