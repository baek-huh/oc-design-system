Top Bar — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { TopBar } = window.OCDesignSystem_0d42ed;
<TopBar leftItems="2 icons" titleArea="center" rightItems="1 icon" />
```

Props:
- `leftItems`: "2 icons" | "1 icon" | "none" | "text button"
- `titleArea`: "center" | "none" | "left"
- `rightItems`: "1 icon" | "none" | "2 icons" | "text button"
- `title`: string
- `button`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode
- `icon4`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
