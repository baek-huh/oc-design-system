Item Bottom Sheet Title — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemBottomSheetTitle } = window.OCDesignSystem_0d42ed;
<ItemBottomSheetTitle type="default" />
```

Props:
- `type`: "default" | "description"
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
