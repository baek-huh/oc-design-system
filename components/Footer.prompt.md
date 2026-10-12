Footer — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Footer } = window.OCDesignSystem_0d42ed;
<Footer domain="slash" />
```

Props:
- `domain`: "slash" | "store"
- `text1`: string
- `text2`: string
- `text3`: string
- `text4`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
