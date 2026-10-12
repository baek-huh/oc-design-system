Check List Check Box — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { CheckListCheckBox } = window.OCDesignSystem_0d42ed;
<CheckListCheckBox stack="horizontal" />
```

Props:
- `stack`: "horizontal" | "vertical"
- `description`: boolean
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
