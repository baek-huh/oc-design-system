import { IconIcArrowUpDown } from './IconIcArrowUpDown.jsx';

// figma node: 1501:6721 Item/Header Cell (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ItemHeaderCell(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", sort: _p.sort ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 96,
      height: 44,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 16px 0px 16px",
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
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        color: "rgb(97,97,97)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "헤더 텍스트"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 144,
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 16px",
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
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          color: "rgb(97,97,97)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "헤더 텍스트"}</span>
        {props.sort && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 7,
            top: 0,
            width: 7,
            height: 14,
            overflow: "hidden",
          }}>
            <div style={{
                position: "absolute",
                left: -7,
                top: 0,
                width: 14,
                height: 14,
              }}>{props.icon1 ?? <IconIcArrowUpDown style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 7,
            height: 14,
            overflow: "hidden",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 14,
                height: 14,
              }}>{props.icon2 ?? <IconIcArrowUpDown style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 144,
      height: 44,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 16px",
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
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          color: "rgb(97,97,97)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "헤더 텍스트"}</span>
        {props.sort && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcArrowUpDown style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Sorting_ascending
    "state=sorting_ascending": __body1,
    // figma: State=Hover
    "state=hover": __body2,
    // figma: State=Sorting_descending
    "state=sorting_descending": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemHeaderCell;
