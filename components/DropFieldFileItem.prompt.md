Drop Field File Item — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { DropFieldFileItem } = window.OCDesignSystem_0d42ed;
<DropFieldFileItem state="hyperlink" />
```

Props:
- `state`: "hyperlink" | "loading" | "upload" | "disabled" | "error"
- `caption`: boolean
- `text1`: string
- `text2`: string
- `text3`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
