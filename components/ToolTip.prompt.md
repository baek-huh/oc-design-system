Light or dark tooltip with pointer position and optional title/close.

```jsx
const { ToolTip } = window.OCDesignSystem_0d42ed;
<ToolTip pointer="bottom center" mode="light" />
```

Props:
- `showClose`: boolean
- `pointer`: "bottom center" | "bottom left" | "bottom right" | "top center" | "top left" | "top right" | "left" | "right" | "none"
- `title`: boolean
- `mode`: "light" | "dark"
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
