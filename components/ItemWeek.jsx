// figma node: 4690:1838 Item/Week (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "day=" + __venc(p.day) + '|' + "size=" + __venc(p.size);

export function ItemWeek(_p = {}) {
  const props = { ..._p, day: _p.day ?? "sun", size: _p.size ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 127,
      overflow: "hidden",
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgb(224,224,224)",
      borderRight: "1px solid rgb(224,224,224)",
      borderBottom: "1px solid rgb(224,224,224)",
      borderLeft: "1px solid rgb(224,224,224)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
        lineHeight: "18px",
        color: "rgb(239,83,80)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "일"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 127,
      overflow: "hidden",
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgb(224,224,224)",
      borderRight: "1px solid rgb(224,224,224)",
      borderBottom: "1px solid rgb(224,224,224)",
      borderLeft: "1px solid rgb(224,224,224)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
        lineHeight: "18px",
        color: "rgb(33,33,33)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "월"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 127,
      overflow: "hidden",
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgb(224,224,224)",
      borderRight: "1px solid rgb(224,224,224)",
      borderBottom: "1px solid rgb(224,224,224)",
      borderLeft: "1px solid rgb(224,224,224)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
        lineHeight: "18px",
        color: "rgb(69,147,252)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "토"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 78,
      overflow: "hidden",
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgb(224,224,224)",
      borderRight: "1px solid rgb(224,224,224)",
      borderBottom: "1px solid rgb(224,224,224)",
      borderLeft: "1px solid rgb(224,224,224)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
        lineHeight: "18px",
        color: "rgb(239,83,80)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "일"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 78,
      overflow: "hidden",
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgb(224,224,224)",
      borderRight: "1px solid rgb(224,224,224)",
      borderBottom: "1px solid rgb(224,224,224)",
      borderLeft: "1px solid rgb(224,224,224)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
        lineHeight: "18px",
        color: "rgb(33,33,33)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "월"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 78,
      overflow: "hidden",
      backgroundColor: "rgb(250,250,250)",
      borderTop: "1px solid rgb(224,224,224)",
      borderRight: "1px solid rgb(224,224,224)",
      borderBottom: "1px solid rgb(224,224,224)",
      borderLeft: "1px solid rgb(224,224,224)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
        lineHeight: "18px",
        color: "rgb(69,147,252)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "토"}</span>
    </div>
  );
  const __impls = {
    // figma: Day=Sun, Size=Default
    "day=sun|size=default": __body0,
    // figma: Day=WeekDay, Size=Default
    "day=weekday|size=default": __body1,
    // figma: Day=Sat, Size=Default
    "day=sat|size=default": __body2,
    // figma: Day=Sun, Size=Small
    "day=sun|size=sm": __body3,
    // figma: Day=WeekDay, Size=Small
    "day=weekday|size=sm": __body4,
    // figma: Day=Sat, Size=Small
    "day=sat|size=sm": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemWeek;
