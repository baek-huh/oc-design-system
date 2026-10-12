// figma node: 3682:7043 BoxButton/Primary/Disabled/XSmall/Right
export function BoxButtonPrimaryDisabledXSmallRight(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(34,119,255)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "8px 10px 8px 12px",
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
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
        <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--gray-900)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default BoxButtonPrimaryDisabledXSmallRight;
