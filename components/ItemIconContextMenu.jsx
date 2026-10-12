import { IconIcArrowRight } from './IconIcArrowRight.jsx';
import { IconIcDelete } from './IconIcDelete.jsx';
import { IconIcLightning } from './IconIcLightning.jsx';

// figma node: 3924:1317 Item/Icon ContextMenu (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state);

export function ItemIconContextMenu(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 224,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 10px 8px 10px",
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
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={false} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "메뉴"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 224,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 10px 8px 10px",
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
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={false} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(189,189,189)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "메뉴"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 224,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 10px 8px 10px",
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
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={false} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "메뉴"}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 224,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={false} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "메뉴"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(189,189,189)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "단축키"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 224,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={false} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(189,189,189)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "메뉴"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(189,189,189)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "단축키"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 224,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={false} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "메뉴"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(189,189,189)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "단축키"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 224,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={false} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "메뉴"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon2 ?? <IconIcArrowRight small={true} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 224,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 10px 8px 10px",
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
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcDelete fill={false} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Danger Zone"}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 224,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 10px 8px 10px",
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
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcDelete fill={false} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(239,83,80)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Danger Zone"}</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 224,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={false} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(189,189,189)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "메뉴"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon2 ?? <IconIcArrowRight small={true} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 224,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={false} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "메뉴"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon2 ?? <IconIcArrowRight small={true} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: Type=Default, State=Default
    "type=default|state=default": __body0,
    // figma: Type=Default, State=Disabled
    "type=default|state=disabled": __body1,
    // figma: Type=Default, State=Hover/Pressed
    "type=default|state=hover/pressed": __body2,
    // figma: Type=Keyboard, State=Default
    "type=keyboard|state=default": __body3,
    // figma: Type=Keyboard, State=Disabled
    "type=keyboard|state=disabled": __body4,
    // figma: Type=Keyboard, State=Hover/Pressed
    "type=keyboard|state=hover/pressed": __body5,
    // figma: Type=Menu Indicator, State=Default
    "type=menu indicator|state=default": __body6,
    // figma: Type=Danger Zone, State=Default
    "type=danger zone|state=default": __body7,
    // figma: Type=Danger Zone, State=Hover/Pressed
    "type=danger zone|state=hover/pressed": __body8,
    // figma: Type=Danger Zone, State=Disabled
    "type=danger zone|state=disabled": __body8,
    // figma: Type=Menu Indicator, State=Disabled
    "type=menu indicator|state=disabled": __body9,
    // figma: Type=Menu Indicator, State=Hover/Pressed
    "type=menu indicator|state=hover/pressed": __body10,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemIconContextMenu;
