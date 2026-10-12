import { BadgeDot } from './BadgeDot.jsx';
import { IconIcCaret } from './IconIcCaret.jsx';
import { ItemIcon } from './ItemIcon.jsx';
import { Tag } from './Tag.jsx';

// figma node: 10778:25 item/menu (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "action=" + __venc(p.action);

export function ItemMenu4(_p = {}) {
  const props = { ..._p, type: _p.type ?? "child", action: _p.action ?? false, showCaret: _p.showCaret ?? true, badge: _p.badge ?? false, tag: _p.tag ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 200,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 42px",
      justifyContent: "space-between",
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
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--slate-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "서브 메뉴"}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <BadgeDot type={"badge"} size={"sm"} border={false} />}</div>
        )}
      </div>
      {props.tag && (
      <div style={{ position: "relative", width: 29, flexShrink: 0 }}>{props.icon2 ?? <Tag text1={"Beta"} color={"blue"} size={"sm"} dIsabled={false} type={"line"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 200,
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 42px",
      justifyContent: "space-between",
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
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--slate-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "서브 메뉴"}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <BadgeDot type={"badge"} size={"sm"} border={false} />}</div>
        )}
      </div>
      {props.tag && (
      <div style={{ position: "relative", width: 29, flexShrink: 0 }}>{props.icon2 ?? <Tag text1={"Beta"} color={"blue"} size={"sm"} dIsabled={false} type={"line"} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 200,
      borderRadius: 8,
      backgroundColor: "var(--white)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
      justifyContent: "space-between",
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
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ItemIcon icon={"📘"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "var(--slate-900-2)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "메뉴"}</span>
          {props.badge && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <BadgeDot type={"badge"} size={"sm"} border={false} />}</div>
          )}
        </div>
      </div>
      {props.showCaret && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--slate-700)",
        }}>{props.icon3 ?? <IconIcCaret up={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 200,
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
      justifyContent: "space-between",
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
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ItemIcon icon={"📘"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "var(--slate-900-2)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "메뉴"}</span>
          {props.badge && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <BadgeDot type={"badge"} size={"sm"} border={false} />}</div>
          )}
        </div>
      </div>
      {props.showCaret && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--slate-700)",
        }}>{props.icon3 ?? <IconIcCaret up={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: type=child, action=false
    "type=child|action=false": __body0,
    // figma: type=child, action=true
    "type=child|action=true": __body1,
    // figma: type=parent, action=false
    "type=parent|action=false": __body2,
    // figma: type=parent, action=true
    "type=parent|action=true": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemMenu4;
