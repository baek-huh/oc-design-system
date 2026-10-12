// figma node: 5310:4 Item/Cell (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "accent=" + __venc(p.accent) + '|' + "disabled=" + __venc(p.disabled) + '|' + "focus=" + __venc(p.focus) + '|' + "focusLeft=" + __venc(p.focusLeft) + '|' + "focusCenter=" + __venc(p.focusCenter) + '|' + "focusRight=" + __venc(p.focusRight);

export function ItemCell(_p = {}) {
  const props = { ..._p, type: _p.type ?? "text", accent: _p.accent ?? false, disabled: _p.disabled ?? false, focus: _p.focus ?? false, focusLeft: _p.focusLeft ?? false, focusCenter: _p.focusCenter ?? false, focusRight: _p.focusRight ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 14,
        top: 11,
        width: 15,
        height: 20,
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 18,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "26px",
        color: "rgb(33,33,33)",
      }}>{props.text1 ?? "10"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 15,
        top: 11,
        width: 13,
        height: 20,
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(33,33,33)",
      }}>{props.text1 ?? "월"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 42,
      borderRadius: 60,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 14,
        top: 11,
        width: 15,
        height: 20,
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(33,33,33)",
      }}>{props.text1 ?? "10"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 42,
      borderRadius: 60,
      backgroundColor: "rgb(34,119,255)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 14,
        top: 11,
        width: 15,
        height: 20,
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "10"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 42,
      backgroundColor: "rgb(34,119,255)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 14,
        top: 11,
        width: 15,
        height: 20,
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "10"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 14,
        top: 11,
        width: 15,
        height: 20,
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(33,33,33)",
      }}>{props.text1 ?? "10"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 42,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 15,
        top: 11,
        width: 13,
        height: 20,
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(239,83,80)",
      }}>{props.text1 ?? "일"}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Number, Accent=False, Disabled=False, Focus=False, Focus Left=False, Focus Center=False, Focus Right=False
    "type=number|accent=false|disabled=false|focus=false|focusLeft=false|focusCenter=false|focusRight=false": __body0,
    // figma: Type=Text, Accent=False, Disabled=False, Focus=False, Focus Left=False, Focus Center=False, Focus Right=False
    "type=text|accent=false|disabled=false|focus=false|focusLeft=false|focusCenter=false|focusRight=false": __body1,
    // figma: Type=Number, Accent=False, Disabled=False, Focus=True, Focus Left=False, Focus Center=False, Focus Right=False
    "type=number|accent=false|disabled=false|focus=true|focusLeft=false|focusCenter=false|focusRight=false": __body2,
    // figma: Type=Number, Accent=False, Disabled=False, Focus=True, Focus Left=True, Focus Center=False, Focus Right=False
    "type=number|accent=false|disabled=false|focus=true|focusLeft=true|focusCenter=false|focusRight=false": __body3,
    // figma: Type=Number, Accent=False, Disabled=False, Focus=True, Focus Left=False, Focus Center=True, Focus Right=False
    "type=number|accent=false|disabled=false|focus=true|focusLeft=false|focusCenter=true|focusRight=false": __body4,
    // figma: Type=Number, Accent=False, Disabled=False, Focus=True, Focus Left=False, Focus Center=False, Focus Right=True
    "type=number|accent=false|disabled=false|focus=true|focusLeft=false|focusCenter=false|focusRight=true": __body3,
    // figma: Type=Number, Accent=False, Disabled=True, Focus=False, Focus Left=False, Focus Center=False, Focus Right=False
    "type=number|accent=false|disabled=true|focus=false|focusLeft=false|focusCenter=false|focusRight=false": __body5,
    // figma: Type=Number, Accent=True, Disabled=False, Focus=False, Focus Left=False, Focus Center=False, Focus Right=False
    "type=number|accent=true|disabled=false|focus=false|focusLeft=false|focusCenter=false|focusRight=false": __body5,
    // figma: Type=Text, Accent=True, Disabled=False, Focus=False, Focus Left=False, Focus Center=False, Focus Right=False
    "type=text|accent=true|disabled=false|focus=false|focusLeft=false|focusCenter=false|focusRight=false": __body6,
    // figma: Type=Number, Accent=True, Disabled=True, Focus=False, Focus Left=False, Focus Center=False, Focus Right=False
    "type=number|accent=true|disabled=true|focus=false|focusLeft=false|focusCenter=false|focusRight=false": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemCell;
