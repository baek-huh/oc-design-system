import { IconIcArrowRight } from './IconIcArrowRight.jsx';

// figma node: 1828:5711 Breadcrumb (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "depth=" + __venc(p.depth);

export function Breadcrumb(_p = {}) {
  const props = { ..._p, depth: _p.depth ?? "depth2" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "카테고리"}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconIcArrowRight small={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(189,189,189)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "카테고리"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(189,189,189)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "카테고리"}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconIcArrowRight small={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(189,189,189)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "카테고리"}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <IconIcArrowRight small={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text3 ?? "카테고리"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(189,189,189)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "카테고리"}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconIcArrowRight small={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(189,189,189)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "카테고리"}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <IconIcArrowRight small={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(189,189,189)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text3 ?? "카테고리"}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon3 ?? <IconIcArrowRight small={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "카테고리"}</span>
    </div>
  );
  const __impls = {
    // figma: Depth=depth2
    "depth=depth2": __body0,
    // figma: Depth=depth3
    "depth=depth3": __body1,
    // figma: Depth=depth4
    "depth=depth4": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Breadcrumb;
