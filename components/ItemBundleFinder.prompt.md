Item Bundle Finder — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemBundleFinder } = window.OCDesignSystem_0d42ed;
<ItemBundleFinder state="pressed" />
```

Props:
- `state`: "pressed" | "default"
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
