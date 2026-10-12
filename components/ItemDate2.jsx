// figma node: 4690:2167 Item/Date (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "day=" + __venc(p.day);

export function ItemDate2(_p = {}) {
  const props = { ..._p, state: _p.state ?? "today", day: _p.day ?? "weekday", date: _p.date ?? "6" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(224,224,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
        color: "rgb(33,33,33)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.date}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(224,224,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
        color: "rgb(239,83,80)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.date}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(224,224,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
        color: "rgb(69,147,252)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.date}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 20,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
        color: "rgb(33,33,33)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.date}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 20,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
        color: "rgb(239,83,80)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.date}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 20,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
        color: "rgb(69,147,252)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.date}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(33,33,33)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.date}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(33,33,33)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
        color: "rgb(239,83,80)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.date}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(33,33,33)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
        color: "rgb(69,147,252)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.date}</span>
    </div>
  );
  const __impls = {
    // figma: State=Select, Day=Weekday
    "state=select|day=weekday": __body0,
    // figma: State=Select, Day=Holiday
    "state=select|day=holiday": __body1,
    // figma: State=Select, Day=Saturday
    "state=select|day=saturday": __body2,
    // figma: State=Default, Day=Weekday
    "state=default|day=weekday": __body3,
    // figma: State=Default, Day=Holiday
    "state=default|day=holiday": __body4,
    // figma: State=Default, Day=Saturday
    "state=default|day=saturday": __body5,
    // figma: State=Today, Day=Weekday
    "state=today|day=weekday": __body6,
    // figma: State=Today, Day=Holiday
    "state=today|day=holiday": __body7,
    // figma: State=Today, Day=Saturday
    "state=today|day=saturday": __body8,
  };
  return (__impls[__vkey(props)] ?? __body6)();
}
export default ItemDate2;
