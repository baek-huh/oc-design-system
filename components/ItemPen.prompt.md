Item Pen — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemPen } = window.OCDesignSystem_0d42ed;
<ItemPen thinkness="1mm" />
```

Props:
- `thinkness`: "1mm" | "3mm" | "6mm"
- `select`: boolean

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
