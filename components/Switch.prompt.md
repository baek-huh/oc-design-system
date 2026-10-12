On/off toggle in xs / sm / md.

```jsx
const { Switch } = window.OCDesignSystem_0d42ed;
<Switch state="default" size="xs" />
```

Props:
- `state`: "default" | "disabled"
- `size`: "xs" | "sm" | "md"
- `checked`: boolean

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
