Profile — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Profile } = window.OCDesignSystem_0d42ed;
<Profile size="sm" stack="horizontal" style2="label" />
```

Props:
- `size`: "sm" | "md" | "lg" | "xl"
- `stack`: "horizontal" | "vertical"
- `style2`: "label" | "label ➡️option" | "label ⬇️option"
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
