Bottom Navigation Mobile — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { BottomNavigationMobile } = window.OCDesignSystem_0d42ed;
<BottomNavigationMobile menu="my contents" />
```

Props:
- `menu`: "my contents" | "scanner" | "my class"

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
