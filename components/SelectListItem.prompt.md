Select List Item — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { SelectListItem } = window.OCDesignSystem_0d42ed;
<SelectListItem state="default" size="md" />
```

Props:
- `state`: "default" | "hover" | "pressed" | "disabled" | "active"
- `size`: "md" | "lg"
- `showPrefixes`: boolean
- `showSuffixes`: boolean
- `showSubtext`: boolean
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
