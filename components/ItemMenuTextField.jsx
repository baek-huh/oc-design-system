// figma node: 5866:1340 Item/Menu Text Field (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ItemMenuTextField(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 224,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(245,245,245)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "8px 10px 8px 10px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "18px",
          color: "rgb(158,158,158)",
          flexGrow: 1,
        }}>헬프 텍스트가 이곳에 표기됩니다.</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 224,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(245,245,245)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "8px 10px 8px 10px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexGrow: 1,
        }}>사용자가 입력한 텍스트가 이곳에 표기됩...</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Typed
    "state=typed": __body1,
    // figma: State=Disabled
    "state=disabled": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemMenuTextField;
