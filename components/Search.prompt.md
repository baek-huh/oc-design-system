Search — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Search } = window.OCDesignSystem_0d42ed;
<Search state="default" size="md" type="default" />
```

Props:
- `state`: "default" | "active" | "disabled"
- `size`: "md" | "lg"
- `type`: "default" | "inField"
- `showClose`: boolean
- `text1`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
