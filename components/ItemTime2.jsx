import { ItemDate2 } from './ItemDate2.jsx';

// figma node: 4690:2186 Item/Time (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function ItemTime2(_p = {}) {
  const props = { ..._p, state: _p.state ?? "4 or less", size: _p.size ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 119,
      overflow: "hidden",
      borderRadius: 1,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 2px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemDate2 state={"default"} day={"weekday"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 119,
      overflow: "hidden",
      borderRadius: 1,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 4px 0px 2px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemDate2 state={"default"} day={"weekday"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "02:00:00"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 119,
      overflow: "hidden",
      borderRadius: 1,
      backgroundColor: "rgb(233,241,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 4px 0px 2px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemDate2 state={"default"} day={"weekday"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "04:00:00"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 119,
      overflow: "hidden",
      borderRadius: 1,
      backgroundColor: "rgb(153,192,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 4px 0px 2px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemDate2 state={"default"} day={"weekday"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "08:00:00"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 70,
      overflow: "hidden",
      borderRadius: 1,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 2px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemDate2 state={"default"} day={"weekday"} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 70,
      overflow: "hidden",
      borderRadius: 1,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 4px 0px 2px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemDate2 state={"default"} day={"weekday"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "02:00:00"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 70,
      overflow: "hidden",
      borderRadius: 1,
      backgroundColor: "rgb(233,241,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 4px 0px 2px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemDate2 state={"default"} day={"weekday"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "04:00:00"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 70,
      overflow: "hidden",
      borderRadius: 1,
      backgroundColor: "rgb(153,192,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 4px 0px 2px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemDate2 state={"default"} day={"weekday"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "08:00:00"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Default, Size=Default
    "state=default|size=default": __body0,
    // figma: State=4 or less, Size=Default
    "state=4 or less|size=default": __body1,
    // figma: State=more than 4, Size=Default
    "state=more than 4|size=default": __body2,
    // figma: State=more than 8, Size=Default
    "state=more than 8|size=default": __body3,
    // figma: State=State8, Size=Small
    "state=state8|size=sm": __body4,
    // figma: State=State7, Size=Small
    "state=state7|size=sm": __body5,
    // figma: State=State6, Size=Small
    "state=state6|size=sm": __body6,
    // figma: State=State5, Size=Small
    "state=state5|size=sm": __body7,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ItemTime2;
