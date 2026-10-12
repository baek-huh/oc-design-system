Single-line text input with label, helptext, prefixes/suffixes and password mode.

```jsx
const { TextField } = window.OCDesignSystem_0d42ed;
<TextField state="default" dataType="default" size="md" />
```

Props:
- `state`: "default" | "hover" | "active" | "disabled" | "typed" | "error"
- `dataType`: "default" | "pw"
- `size`: "md" | "lg"
- `showLabel`: boolean
- `showClose`: boolean
- `showHelptext`: boolean
- `showSuffixes`: boolean
- `showPrefixes`: boolean
- `text1`: string
- `text2`: string
- `text3`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
