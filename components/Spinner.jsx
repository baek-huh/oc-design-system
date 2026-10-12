
// figma node: 2931:7146 Spinner (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color) + '|' + "description=" + __venc(p.description) + '|' + "background=" + __venc(p.background);

export function Spinner(_p = {}) {
  const props = { ..._p, color: _p.color ?? "gray 900", description: _p.description ?? true, background: _p.background ?? "false" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      position: "relative",
      ...props.style,
    }}>
      <svg width={36} height={36} viewBox="0 0 36 36" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 36,
        height: 36,
        color: "rgb(238,238,238)",
      }}>
        <path d={"M 18 4 C 10.268 4 4 10.268 4 18 C 4 25.732 10.268 32 18 32 C 25.732 32 32 25.732 32 18 C 32 10.268 25.732 4 18 4 Z M 0 18 C 0 8.059 8.059 0 18 0 C 27.941 0 36 8.059 36 18 C 36 27.941 27.941 36 18 36 C 8.059 36 0 27.941 0 18 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 18,
        height: 18,
        color: "rgb(33,33,33)",
      }}>
        <path d={"M 18 4 C 10.268 4 4 10.268 4 18 L 0 18 C 0 8.059 8.059 0 18 0 L 18 4 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      position: "relative",
      ...props.style,
    }}>
      <svg width={36} height={36} viewBox="0 0 36 36" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 36,
        height: 36,
        color: "rgb(238,238,238)",
      }}>
        <path d={"M 18 4 C 10.268 4 4 10.268 4 18 C 4 25.732 10.268 32 18 32 C 25.732 32 32 25.732 32 18 C 32 10.268 25.732 4 18 4 Z M 0 18 C 0 8.059 8.059 0 18 0 C 27.941 0 36 8.059 36 18 C 36 27.941 27.941 36 18 36 C 8.059 36 0 27.941 0 18 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 18,
        height: 18,
        color: "rgb(34,119,255)",
      }}>
        <path d={"M 18 4 C 10.268 4 4 10.268 4 18 L 0 18 C 0 8.059 8.059 0 18 0 L 18 4 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon1 ?? <Spinner color={"gray 900"} description={false} background={"false"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(69,147,252)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "설명을 적어주세요."}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "24px 32px 24px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon1 ?? <Spinner color={"gray 900"} description={false} background={"false"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "설명을 적어주세요."}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon1 ?? <Spinner color={"primary"} description={false} background={"false"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "설명을 적어주세요."}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "24px 32px 24px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon1 ?? <Spinner color={"primary"} description={false} background={"false"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "설명을 적어주세요."}</span>
    </div>
  );
  const __impls = {
    // figma: Color=Gray 900, Description=False, Background=False
    "color=gray 900|description=false|background=false": __body0,
    // figma: Color=Primary, Description=False, Background=False
    "color=primary|description=false|background=false": __body1,
    // figma: Color=Gray 900, Description=True, Background=False
    "color=gray 900|description=true|background=false": __body2,
    // figma: Color=Gray 900, Description=True, Background=True
    "color=gray 900|description=true|background=\btrue": __body3,
    // figma: Color=Primary, Description=True, Background=False
    "color=primary|description=true|background=false": __body4,
    // figma: Color=Primary, Description=True, Background=True
    "color=primary|description=true|background=\btrue": __body5,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default Spinner;
