import { ItemAction } from './ItemAction.jsx';
import { ItemCheckBox } from './ItemCheckBox.jsx';
import { ItemHeaderCell } from './ItemHeaderCell.jsx';

// figma node: 1501:6782 Header Table (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function HeaderTable(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1070,
      height: 60,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 56,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemAction type={"checkbox"} />}</div>
      <ItemHeaderCell
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemHeaderCell
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemHeaderCell
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemHeaderCell
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemHeaderCell
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1070,
      height: 60,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 56,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemAction icon1={<ItemCheckBox state={"indeterminate"} checked={true} size={"lg"} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />} type={"checkbox"} />}</div>
      <ItemHeaderCell
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemHeaderCell
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemHeaderCell
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemHeaderCell
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemHeaderCell
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Select
    "state=select": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HeaderTable;
