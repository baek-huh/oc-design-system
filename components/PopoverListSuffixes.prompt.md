Popover List Suffixes — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { PopoverListSuffixes } = window.OCDesignSystem_0d42ed;
<PopoverListSuffixes type="switch" />
```

Props:
- `type`: "switch" | "tag" | "icon"
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
