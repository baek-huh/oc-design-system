Item Pagination Btn — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemPaginationBtn } = window.OCDesignSystem_0d42ed;
<ItemPaginationBtn state="default" />
```

Props:
- `state`: "default" | "hover" | "pressed" | "disabled"
- `line`: boolean
- `left`: boolean
- `right`: boolean
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
