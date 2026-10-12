Interaction Kit — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { InteractionKit } = window.OCDesignSystem_0d42ed;
<InteractionKit  />
```

Props:
- `page`: boolean
- `solution`: boolean
- `quizPaper`: boolean
- `listening`: boolean
- `setting`: boolean
- `guide`: boolean
- `icon1`: React.ReactNode
- `icon3`: React.ReactNode
- `icon4`: React.ReactNode

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
