Item Body — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemBody } = window.OCDesignSystem_0d42ed;
<ItemBody typo="body2 regular" />
```

Props:
- `typo`: "body2 regular" | "body2 medium"
- `caption`: boolean

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
