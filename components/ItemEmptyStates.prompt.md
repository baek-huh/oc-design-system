Item Empty States — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemEmptyStates } = window.OCDesignSystem_0d42ed;
<ItemEmptyStates case="empty" />
```

Props:
- `case`: "empty" | "error" | "loading" | "done"

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
