Month calendar with header and month-set state.

```jsx
const { Calendar } = window.OCDesignSystem_0d42ed;
<Calendar state="default" />
```

Props:
- `state`: "default" | "monthset"
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode
- `icon4`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
