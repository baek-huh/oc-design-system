// figma node: 5785:3836 toast (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "button=" + __venc(p.button) + '|' + "size=" + __venc(p.size) + '|' + "case=" + __venc(p.case);

export function Toast(_p = {}) {
  const props = { ..._p, type: _p.type ?? "sm", button: _p.button ?? false, size: _p.size ?? "sm", case: _p.case ?? "fail", showButton: _p.showButton ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 336,
      borderRadius: 12,
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "18px 24px 18px 24px",
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
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "✅"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "-가 저장되었어요"}</span>
      </div>
      {props.showButton && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-end",
        alignItems: "center",
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
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text3 ?? "버튼"}</span>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 336,
      borderRadius: 12,
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "18px 24px 18px 24px",
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
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "🗑️"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "-가 삭제되었어요"}</span>
      </div>
      {props.showButton && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-end",
        alignItems: "center",
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
          color: "rgb(189,189,189)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text3 ?? "버튼"}</span>
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 336,
      borderRadius: 12,
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "18px 24px 18px 24px",
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
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "❌"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "-에 실패했어요"}</span>
      </div>
      {props.showButton && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-end",
        alignItems: "center",
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
          color: "rgb(189,189,189)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text3 ?? "버튼"}</span>
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 336,
      borderRadius: 12,
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "18px 24px 18px 24px",
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
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "⚠️"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "-에 주의해주세요"}</span>
      </div>
      {props.showButton && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-end",
        alignItems: "center",
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
          color: "rgb(189,189,189)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text3 ?? "버튼"}</span>
      </div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "미니 토스트 내용이 들어갑니다"}</span>
    </div>
  );
  const __impls = {
    // figma: type=medium, button=true, size=medium, case=success
    "type=md|button=true|size=md|case=success": __body0,
    // figma: type=medium, button=true, size=medium, case=delete
    "type=md|button=true|size=md|case=delete": __body1,
    // figma: type=medium, button=true, size=medium, case=fail
    "type=md|button=true|size=md|case=fail": __body2,
    // figma: type=medium, button=true, size=medium, case=caution
    "type=md|button=true|size=md|case=caution": __body3,
    // figma: type=small, button=false, size=small, case=-
    "type=sm|button=false|size=sm|case=-": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Toast;
