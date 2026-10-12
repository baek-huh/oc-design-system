Item Cell — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemCell } = window.OCDesignSystem_0d42ed;
<ItemCell type="text" />
```

Props:
- `type`: "text" | "number"
- `accent`: boolean
- `disabled`: boolean
- `focus`: boolean
- `focusLeft`: boolean
- `focusCenter`: boolean
- `focusRight`: boolean
- `text1`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
