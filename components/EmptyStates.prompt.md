Empty States — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { EmptyStates } = window.OCDesignSystem_0d42ed;
<EmptyStates visual="icon" />
```

Props:
- `visual`: "icon" | "image"
- `button`: boolean
- `header`: boolean
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
