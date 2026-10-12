Item Body Cell — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemBodyCell } = window.OCDesignSystem_0d42ed;
<ItemBodyCell type="text" />
```

Props:
- `type`: "text" | "state" | "icon" | "hyperlink" | "button" | "tag"
- `showIcon`: boolean
- `text1`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
