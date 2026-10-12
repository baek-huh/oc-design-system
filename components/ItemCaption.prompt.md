Item Caption — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemCaption } = window.OCDesignSystem_0d42ed;
<ItemCaption number="1" color="gray 700" />
```

Props:
- `number`: "1" | "2" | "3" | "4"
- `color`: "gray 700" | "primary"
- `text1`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode
- `icon4`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
