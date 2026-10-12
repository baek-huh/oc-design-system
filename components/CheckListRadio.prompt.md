Check List Radio — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { CheckListRadio } = window.OCDesignSystem_0d42ed;
<CheckListRadio orientation="horizontal" />
```

Props:
- `orientation`: "horizontal" | "vertical"
- `description`: boolean
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
