Item Header Cell — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemHeaderCell } = window.OCDesignSystem_0d42ed;
<ItemHeaderCell state="default" />
```

Props:
- `state`: "default" | "sorting_ascending" | "sorting_descending" | "hover"
- `sort`: boolean
- `text1`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
