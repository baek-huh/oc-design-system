Thumbnail — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { Thumbnail } = window.OCDesignSystem_0d42ed;
<Thumbnail ratio="1:1" radius="none" />
```

Props:
- `ratio`: "1:1" | "1.414:1" | "16:9" | "3:2" | "4:3" | "5:4"
- `border`: boolean
- `radius`: "none" | "4" | "8"
- `portrait`: boolean

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
