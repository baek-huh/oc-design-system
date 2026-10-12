Icon-only button (`icon-button` set) mirroring Button themes/styles; use for toolbar and compact actions.

```jsx
const { IconButton } = window.OCDesignSystem_0d42ed;
<IconButton state="default" size="lg" theme="primary" />
```

Props:
- `state`: "default" | "hover" | "pressed" | "disabled"
- `size`: "lg" | "md" | "sm" | "xl" | "xs" | "xxsmall"
- `theme`: "primary" | "secondary" | "error" | "ghost"
- `style2`: "fill" | "line" | "light"
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
