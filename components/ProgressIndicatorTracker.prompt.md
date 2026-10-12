Progress Indicator Tracker — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ProgressIndicatorTracker } = window.OCDesignSystem_0d42ed;
<ProgressIndicatorTracker  />
```

Props:
- `itemLeft`: boolean
- `itemRight`: boolean
- `suffixPrefix`: boolean
- `itemTop`: boolean
- `itemBottom`: boolean
- `itemMiddle`: boolean

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
