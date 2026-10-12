Text Area Field — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { TextAreaField } = window.OCDesignSystem_0d42ed;
<TextAreaField state="\bdefault" />
```

Props:
- `showLabel`: boolean
- `state`: "\bdefault" | "\bhover" | "active" | "typed" | "disabled" | "error"
- `showCount`: boolean
- `showHelptext`: boolean
- `text1`: string
- `text2`: string
- `text3`: string
- `text4`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
