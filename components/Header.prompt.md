Header — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Header } = window.OCDesignSystem_0d42ed;
<Header type="취업/자격증" />
```

Props:
- `type`: "취업/자격증" | "초/중/고/n수"
- `text1`: string
- `text2`: string
- `icon1`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
