import { IconIcBook } from './IconIcBook.jsx';

// figma node: 1609:5104 Item/Menu Icon (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "dotBadge=" + __venc(p.dotBadge);

export function ItemMenuIcon(_p = {}) {
  const props = { ..._p, state: _p.state ?? "hover/focus", dotBadge: _p.dotBadge ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconIcBook fill={false} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 20,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
          }}>{props.icon1 ?? <IconIcBook fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "absolute",
          left: 14,
          top: 0,
          width: 6,
          height: 6,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "rgb(34,119,255)",
          }} />
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 20,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
          }}>{props.icon1 ?? <IconIcBook fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "absolute",
          left: 14,
          top: 0,
          width: 6,
          height: 6,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "rgb(34,119,255)",
          }} />
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconIcBook fill={true} />}</div>
    </div>
  );
  const __impls = {
    // figma: State=Default, DotBadge=False
    "state=default|dotBadge=false": __body0,
    // figma: State=Default, DotBadge=True
    "state=default|dotBadge=true": __body1,
    // figma: State=Hover/Focus, DotBadge=True
    "state=hover/focus|dotBadge=true": __body2,
    // figma: State=Hover/Focus, DotBadge=False
    "state=hover/focus|dotBadge=false": __body3,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default ItemMenuIcon;
