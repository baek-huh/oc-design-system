Button Area — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ButtonArea } = window.OCDesignSystem_0d42ed;
<ButtonArea button="single" />
```

Props:
- `fullWidth`: boolean
- `button`: "single" | "multi"
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
