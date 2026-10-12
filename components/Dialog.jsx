import { ButtonArea } from './ButtonArea.jsx';

// figma node: 5059:1642 Dialog
export function Dialog(_p = {}) {
  const props = { ..._p, showTitle: _p.showTitle ?? true, showContents: _p.showContents ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column",
      padding: "64px 64px 64px 64px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showContents && (
        <svg height={180} viewBox="0 0 360 180" fill="none" style={{
          position: "relative",
          height: 180,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgb(253,228,255)",
        }}>
          <path d={"M 0 0 L 360 0 L 360 180 L 0 180 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            height: 182,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "24px 0px 24px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              {props.showTitle && (
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "30px",
                color: "rgb(33,33,33)",
                flexShrink: 0,
              }}>{props.text1 ?? "타이틀"}</span>
              )}
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgb(97,97,97)",
                flexShrink: 0,
              }}>{props.text2 ?? "내용이 들어가는 자리입니다."}</span>
            </div>
            <ButtonArea
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              fullWidth={true}
              button={"single"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dialog;
