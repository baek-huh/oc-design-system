// figma node: 2857:7245 Tab/Web (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "active=" + __venc(p.active) + '|' + "update=" + __venc(p.update);

export function TabWeb(_p = {}) {
  const props = { ..._p, active: _p.active ?? true, update: _p.update ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
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
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(217,217,217)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
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
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Active=True, Update=False
    "active=true|update=false": __body0,
    // figma: Active=False, Update=False
    "active=false|update=false": __body1,
    // figma: Active=True, Update=True
    "active=true|update=true": __body2,
    // figma: Active=False, Update=True
    "active=false|update=true": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TabWeb;
