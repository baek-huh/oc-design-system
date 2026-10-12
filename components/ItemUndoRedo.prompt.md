Item Undo Redo — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemUndoRedo } = window.OCDesignSystem_0d42ed;
<ItemUndoRedo item="redo" />
```

Props:
- `item`: "redo" | "undo"
- `select`: boolean
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
