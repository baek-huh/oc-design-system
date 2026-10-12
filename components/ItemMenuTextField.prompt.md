Item Menu Text Field — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemMenuTextField } = window.OCDesignSystem_0d42ed;
<ItemMenuTextField state="default" />
```

Props:
- `state`: "default" | "typed" | "disabled"

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
