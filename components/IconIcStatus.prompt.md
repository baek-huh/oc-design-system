Single glyph from the icon/ic-status set; prefer the generic <Icon name> wrapper for new work.

```jsx
const { IconIcStatus } = window.OCDesignSystem_0d42ed;
<IconIcStatus status="correct" />
```

Props:
- `status`: "correct" | "incomplete" | "wrong"

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
