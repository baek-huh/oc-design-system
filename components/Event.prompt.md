Event — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Event } = window.OCDesignSystem_0d42ed;
<Event state="default" />
```

Props:
- `state`: "default" | "done" | "description" | "none"
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
