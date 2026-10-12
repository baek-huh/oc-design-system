Small colored label in fill / light / line styles.

```jsx
const { Tag } = window.OCDesignSystem_0d42ed;
<Tag color="blue" size="sm" type="line" />
```

Props:
- `showIcon`: boolean
- `color`: "blue" | "green" | "yellow" | "purple" | "gray" | "red"
- `size`: "sm" | "md" | "lg"
- `dIsabled`: boolean
- `type`: "line" | "light" | "fill"
- `showClose`: boolean
- `text1`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
