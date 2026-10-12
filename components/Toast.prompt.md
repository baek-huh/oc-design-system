Transient status message (success / fail / caution / delete).

```jsx
const { Toast } = window.OCDesignSystem_0d42ed;
<Toast type="sm" size="sm" case="fail" />
```

Props:
- `type`: "sm" | "md"
- `button`: boolean
- `size`: "sm" | "md"
- `case`: "fail" | "success" | "delete" | "caution" | "-"
- `showButton`: boolean
- `text1`: string
- `text2`: string
- `text3`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
