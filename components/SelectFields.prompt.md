Select Fields — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { SelectFields } = window.OCDesignSystem_0d42ed;
<SelectFields state="default" size="md" content="filledtext" />
```

Props:
- `showLabel`: boolean
- `state`: "default" | "hover" | "disabled" | "filled" | "error"
- `size`: "md" | "lg"
- `content`: "filledtext" | "filledtag"
- `showHelptext`: boolean
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode
- `icon4`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
