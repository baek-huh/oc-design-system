Item Menu — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemMenu } = window.OCDesignSystem_0d42ed;
<ItemMenu type="child" state="default" />
```

Props:
- `type`: "child" | "parent"
- `state`: "default" | "hover/focus"
- `disclosure`: boolean
- `badge`: boolean
- `tag`: boolean
- `text1`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
