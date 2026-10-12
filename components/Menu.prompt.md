Menu — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Menu } = window.OCDesignSystem_0d42ed;
<Menu type="checked" />
```

Props:
- `type`: "checked" | "icon text" | "text"

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
