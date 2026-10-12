Popover List Item Default — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { PopoverListItemDefault } = window.OCDesignSystem_0d42ed;
<PopoverListItemDefault  />
```

Props:
- `showPrefixes`: boolean
- `showSuffixes`: boolean
- `description`: boolean
- `text1`: string
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
