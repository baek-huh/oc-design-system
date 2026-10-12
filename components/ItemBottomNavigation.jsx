import { BadgeDot } from './BadgeDot.jsx';
import { IconIcHome } from './IconIcHome.jsx';

// figma node: 4472:3321 Item/BottomNavigation (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ItemBottomNavigation(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 78,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 10px 34px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 22,
            height: 22,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcHome fill={false} style={{ transform: "scale(0.917, 0.917)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "12px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text1 ?? "메뉴"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 78,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 10px 34px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 22,
            height: 22,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcHome fill={true} style={{ transform: "scale(0.917, 0.917)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
        }}>{props.text1 ?? "메뉴"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 78,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 22,
            height: 22,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcHome fill={false} style={{ transform: "scale(0.917, 0.917)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
        }}>{props.text1 ?? "메뉴"}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 78,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 10px 34px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 22,
            height: 22,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcHome fill={false} style={{ transform: "scale(0.917, 0.917)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
        }}>{props.text1 ?? "메뉴"}</span>
        <div style={{
            position: "absolute",
            left: 16,
            top: 0,
            width: 6,
            height: 6,
          }}>{props.icon2 ?? <BadgeDot type={"primary"} size={"sm"} border={false} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Focus
    "state=focus": __body1,
    // figma: State=Disabled
    "state=disabled": __body2,
    // figma: State=Notification
    "state=notification": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemBottomNavigation;
