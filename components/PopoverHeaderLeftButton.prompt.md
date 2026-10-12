Popover Header Left Button — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { PopoverHeaderLeftButton } = window.OCDesignSystem_0d42ed;
<PopoverHeaderLeftButton button="icon" />
```

Props:
- `button`: "icon" | "text"
- `text1`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
