Item Radio — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemRadio } = window.OCDesignSystem_0d42ed;
<ItemRadio state="default" size="sm" />
```

Props:
- `state`: "default" | "check" | "disabled"
- `checked`: boolean
- `size`: "sm" | "md"

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
