Check Radio — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { CheckRadio } = window.OCDesignSystem_0d42ed;
<CheckRadio state="default" checked="true" size="sm" />
```

Props:
- `state`: "default" | "check" | "disabled"
- `description`: boolean
- `checked`: "true" | "false" | "check"
- `size`: "sm" | "md"
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
