Primary text button (`button` set) — 4 themes × 3 styles × 5 sizes; use for all main actions.

```jsx
const { Button } = window.OCDesignSystem_0d42ed;
<Button state="default" size="xs" theme="primary" />
```

Props:
- `state`: "default" | "disabled" | "action" | "focused"
- `size`: "xs" | "sm" | "md" | "lg" | "xl"
- `theme`: "primary" | "secondary" | "error" | "ghost"
- `style2`: "fill" | "line" | "light"
- `showPrefixes`: boolean
- `showSuffixes`: boolean
- `text1`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
