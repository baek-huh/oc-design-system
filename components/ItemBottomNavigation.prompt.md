Item Bottom Navigation — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemBottomNavigation } = window.OCDesignSystem_0d42ed;
<ItemBottomNavigation state="default" />
```

Props:
- `state`: "default" | "focus" | "disabled" | "notification"
- `text1`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
