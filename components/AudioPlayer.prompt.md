Audio Player — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { AudioPlayer } = window.OCDesignSystem_0d42ed;
<AudioPlayer mode="dark" size="total" state="pause" />
```

Props:
- `mode`: "dark"
- `size`: "total"
- `state`: "pause" | "play"
- `text1`: string
- `text2`: string
- `text3`: string
- `icon1`: React.ReactNode
- `icon2`: React.ReactNode
- `icon3`: React.ReactNode
- `icon4`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
