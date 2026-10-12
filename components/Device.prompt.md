Device — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Device } = window.OCDesignSystem_0d42ed;
<Device device="mobile" />
```

Props:
- `device`: "mobile" | "pc" | "tablet"
- `light`: boolean
- `text1`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
