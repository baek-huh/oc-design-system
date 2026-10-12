Drop Field — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { DropField } = window.OCDesignSystem_0d42ed;
<DropField state="default" preview="false" />
```

Props:
- `state`: "default" | "disabled" | "drag" | "upload" | "loading"
- `preview`: "false"
- `text1`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
