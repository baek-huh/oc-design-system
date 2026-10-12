Caption — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Caption } = window.OCDesignSystem_0d42ed;
<Caption number="1" />
```

Props:
- `number`: "1" | "2" | "3" | "4"
- `text1`: string
- `text2`: string
- `text3`: string
- `text4`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
