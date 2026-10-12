Item Calendar Header — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemCalendarHeader } = window.OCDesignSystem_0d42ed;
<ItemCalendarHeader calendarHeader="yyyy.mm" />
```

Props:
- `calendarHeader`: "yyyy.mm" | "yyyy"
- `text1`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
