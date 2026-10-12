import { IconIcArrowLeft } from './IconIcArrowLeft.jsx';
import { IconIcArrowRight } from './IconIcArrowRight.jsx';

// figma node: 5331:2259 Item/CalendarHeader (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "calendarHeader=" + __venc(p.calendarHeader);

export function ItemCalendarHeader(_p = {}) {
  const props = { ..._p, calendarHeader: _p.calendarHeader ?? "yyyy.mm" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 294,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconIcArrowLeft small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "2023.12"}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <IconIcArrowRight small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 294,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconIcArrowLeft small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "26px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "2023"}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <IconIcArrowRight small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: CalendarHeader=YYYY.MM
    "calendarHeader=yyyy.mm": __body0,
    // figma: CalendarHeader=YYYY
    "calendarHeader=yyyy": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemCalendarHeader;
