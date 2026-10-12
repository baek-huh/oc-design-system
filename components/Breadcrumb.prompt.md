Breadcrumb — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Breadcrumb } = window.OCDesignSystem_0d42ed;
<Breadcrumb depth="depth2" />
```

Props:
- `depth`: "depth2" | "depth3" | "depth4"
- `text1`: string
- `text2`: string
- `text3`: string
- `text4`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
