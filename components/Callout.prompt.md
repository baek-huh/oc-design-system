Inline notice block (default / warning / tip) in fill or outline.

```jsx
const { Callout } = window.OCDesignSystem_0d42ed;
<Callout type="default" style2="fill" />
```

Props:
- `type`: "default" | "warning" | "tip"
- `button`: boolean
- `style2`: "fill" | "outline"
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
