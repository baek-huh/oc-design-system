Item Goal — materialized from the Figma component of the same name; use it wherever the source design uses that component.

```jsx
const { ItemGoal } = window.OCDesignSystem_0d42ed;
<ItemGoal type="초/중/고/n수" />
```

Props:
- `type`: "초/중/고/n수" | "취업/자격증"
- `text1`: string

Text layers are exposed as `text1…textN`; icon/slot layers as `icon1…iconN` (ReactNode).
