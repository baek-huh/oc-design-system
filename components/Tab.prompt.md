Text or box tab bar, fixed or scrollable.

```jsx
const { Tab } = window.OCDesignSystem_0d42ed;
<Tab type="text" size="sm" tabType="scrollable - 2tabs" />
```

Props:
- `type`: "text" | "box"
- `size`: "sm" | "md" | "lg"
- `tabType`: "scrollable - 2tabs" | "scrollable - 3tabs" | "fixed - 2tabs" | "fixed - 3tabs"
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
