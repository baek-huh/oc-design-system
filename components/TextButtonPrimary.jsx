import { IconIcPlus } from './IconIcPlus.jsx';

// figma node: 586:3021 TextButton/Primary (48 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size) + '|' + "icon=" + __venc(p.icon) + '|' + "underline=" + __venc(p.underline);

export function TextButtonPrimary(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", size: _p.size ?? "sm", icon: _p.icon ?? "none", underline: _p.underline ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 7px 12px",
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
        flexDirection: "column",
        justifyContent: "center",
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
          color: "rgb(34,119,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "버튼"}</span>
        <div style={{
          position: "relative",
          height: 1,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 1px 0px 1px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            height: 1,
            backgroundColor: "rgb(217,217,217)",
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 7px 12px",
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
        flexDirection: "column",
        justifyContent: "center",
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
          color: "rgb(34,119,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "버튼"}</span>
        <div style={{
          position: "relative",
          height: 1,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 1px 0px 1px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            height: 1,
            backgroundColor: "rgb(34,119,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "8px 12px 8px 10px",
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
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <IconIcPlus />}</div>
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
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
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
        gap: 6,
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
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <IconIcPlus />}</div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
      }}>{props.text1 ?? "버튼"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 16px 12px 16px",
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
        flexDirection: "column",
        justifyContent: "center",
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
          color: "rgb(34,119,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "버튼"}</span>
        <div style={{
          position: "relative",
          height: 1,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 1px 0px 1px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            height: 1,
            backgroundColor: "rgb(34,119,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "12px 16px 12px 14px",
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
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcPlus style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
        }}>{props.text1 ?? "버튼"}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "12px 14px 12px 16px",
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
        gap: 6,
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
        }}>{props.text1 ?? "버튼"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcPlus style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
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
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "버튼"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 14px 10px 14px",
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(34,119,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "버튼"}</span>
        <div style={{
          position: "relative",
          height: 1,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 1px 0px 1px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            height: 1,
            backgroundColor: "rgb(34,119,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "10px 14px 10px 12px",
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
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <IconIcPlus />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "10px 12px 10px 14px",
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
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <IconIcPlus />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default, Size=Small, Icon=None, Underline=False
    "state=default|size=sm|icon=none|underline=false": __body0,
    // figma: State=Default, Size=Small, Icon=None, Underline=True
    "state=default|size=sm|icon=none|underline=true": __body1,
    // figma: State=Hover, Size=Small, Icon=None, Underline=True
    "state=hover|size=sm|icon=none|underline=true": __body2,
    // figma: State=Pressed, Size=Small, Icon=None, Underline=True
    "state=pressed|size=sm|icon=none|underline=true": __body2,
    // figma: State=Disabled, Size=Small, Icon=None, Underline=True
    "state=disabled|size=sm|icon=none|underline=true": __body2,
    // figma: State=Hover, Size=Small, Icon=None, Underline=False
    "state=hover|size=sm|icon=none|underline=false": __body0,
    // figma: State=Pressed, Size=Small, Icon=None, Underline=False
    "state=pressed|size=sm|icon=none|underline=false": __body0,
    // figma: State=Disabled, Size=Small, Icon=None, Underline=False
    "state=disabled|size=sm|icon=none|underline=false": __body0,
    // figma: State=Default, Size=Small, Icon=Left, Underline=False
    "state=default|size=sm|icon=left|underline=false": __body3,
    // figma: State=Hover, Size=Small, Icon=Left, Underline=False
    "state=hover|size=sm|icon=left|underline=false": __body3,
    // figma: State=Pressed, Size=Small, Icon=Left, Underline=False
    "state=pressed|size=sm|icon=left|underline=false": __body3,
    // figma: State=Disabled, Size=Small, Icon=Left, Underline=False
    "state=disabled|size=sm|icon=left|underline=false": __body3,
    // figma: State=Default, Size=Small, Icon=Right, Underline=False
    "state=default|size=sm|icon=right|underline=false": __body4,
    // figma: State=Hover, Size=Small, Icon=Right, Underline=False
    "state=hover|size=sm|icon=right|underline=false": __body4,
    // figma: State=Pressed, Size=Small, Icon=Right, Underline=False
    "state=pressed|size=sm|icon=right|underline=false": __body4,
    // figma: State=Disabled, Size=Small, Icon=Right, Underline=False
    "state=disabled|size=sm|icon=right|underline=false": __body4,
    // figma: State=Default, Size=Large, Icon=None, Underline=False
    "state=default|size=lg|icon=none|underline=false": __body5,
    // figma: State=Default, Size=Large, Icon=None, Underline=True
    "state=default|size=lg|icon=none|underline=true": __body6,
    // figma: State=Hover, Size=Large, Icon=None, Underline=True
    "state=hover|size=lg|icon=none|underline=true": __body6,
    // figma: State=Pressed, Size=Large, Icon=None, Underline=True
    "state=pressed|size=lg|icon=none|underline=true": __body6,
    // figma: State=Disabled, Size=Large, Icon=None, Underline=True
    "state=disabled|size=lg|icon=none|underline=true": __body6,
    // figma: State=Hover, Size=Large, Icon=None, Underline=False
    "state=hover|size=lg|icon=none|underline=false": __body5,
    // figma: State=Pressed, Size=Large, Icon=None, Underline=False
    "state=pressed|size=lg|icon=none|underline=false": __body5,
    // figma: State=Disabled, Size=Large, Icon=None, Underline=False
    "state=disabled|size=lg|icon=none|underline=false": __body5,
    // figma: State=Default, Size=Large, Icon=Left, Underline=False
    "state=default|size=lg|icon=left|underline=false": __body7,
    // figma: State=Hover, Size=Large, Icon=Left, Underline=False
    "state=hover|size=lg|icon=left|underline=false": __body7,
    // figma: State=Pressed, Size=Large, Icon=Left, Underline=False
    "state=pressed|size=lg|icon=left|underline=false": __body7,
    // figma: State=Disabled, Size=Large, Icon=Left, Underline=False
    "state=disabled|size=lg|icon=left|underline=false": __body7,
    // figma: State=Default, Size=Large, Icon=Right, Underline=False
    "state=default|size=lg|icon=right|underline=false": __body8,
    // figma: State=Hover, Size=Large, Icon=Right, Underline=False
    "state=hover|size=lg|icon=right|underline=false": __body8,
    // figma: State=Pressed, Size=Large, Icon=Right, Underline=False
    "state=pressed|size=lg|icon=right|underline=false": __body8,
    // figma: State=Disabled, Size=Large, Icon=Right, Underline=False
    "state=disabled|size=lg|icon=right|underline=false": __body8,
    // figma: State=Default, Size=Medium, Icon=None, Underline=False
    "state=default|size=md|icon=none|underline=false": __body9,
    // figma: State=Default, Size=Medium, Icon=None, Underline=True
    "state=default|size=md|icon=none|underline=true": __body10,
    // figma: State=Hover, Size=Medium, Icon=None, Underline=True
    "state=hover|size=md|icon=none|underline=true": __body10,
    // figma: State=Pressed, Size=Medium, Icon=None, Underline=True
    "state=pressed|size=md|icon=none|underline=true": __body10,
    // figma: State=Disabled, Size=Medium, Icon=None, Underline=True
    "state=disabled|size=md|icon=none|underline=true": __body10,
    // figma: State=Hover, Size=Medium, Icon=None, Underline=False
    "state=hover|size=md|icon=none|underline=false": __body9,
    // figma: State=Pressed, Size=Medium, Icon=None, Underline=False
    "state=pressed|size=md|icon=none|underline=false": __body9,
    // figma: State=Disabled, Size=Medium, Icon=None, Underline=False
    "state=disabled|size=md|icon=none|underline=false": __body9,
    // figma: State=Default, Size=Medium, Icon=Left, Underline=False
    "state=default|size=md|icon=left|underline=false": __body11,
    // figma: State=Hover, Size=Medium, Icon=Left, Underline=False
    "state=hover|size=md|icon=left|underline=false": __body11,
    // figma: State=Pressed, Size=Medium, Icon=Left, Underline=False
    "state=pressed|size=md|icon=left|underline=false": __body11,
    // figma: State=Disabled, Size=Medium, Icon=Left, Underline=False
    "state=disabled|size=md|icon=left|underline=false": __body11,
    // figma: State=Default, Size=Medium, Icon=Right, Underline=False
    "state=default|size=md|icon=right|underline=false": __body12,
    // figma: State=Hover, Size=Medium, Icon=Right, Underline=False
    "state=hover|size=md|icon=right|underline=false": __body12,
    // figma: State=Pressed, Size=Medium, Icon=Right, Underline=False
    "state=pressed|size=md|icon=right|underline=false": __body12,
    // figma: State=Disabled, Size=Medium, Icon=Right, Underline=False
    "state=disabled|size=md|icon=right|underline=false": __body12,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TextButtonPrimary;
