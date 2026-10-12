import { Disclosure } from './Disclosure.jsx';
import { IconIcArrowDown } from './IconIcArrowDown.jsx';
import { Label } from './Label.jsx';

// figma node: 681:3443 PulldownFields (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function PulldownFields(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", size: _p.size ?? "sm", showLabel: _p.showLabel ?? false, showHelptext: _p.showHelptext ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{ position: "relative", width: 330, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Disclosure type={"down"} />}</div>
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{ position: "relative", width: 330, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconIcArrowDown small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{ position: "relative", width: 330, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(158,158,158)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Disclosure type={"down"} />}</div>
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{ position: "relative", width: 330, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(97,97,97)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(189,189,189)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Disclosure type={"down"} />}</div>
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{ position: "relative", width: 330, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--color-white)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Disclosure type={"down"} />}</div>
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Disclosure type={"down"} />}</div>
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(158,158,158)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Disclosure type={"down"} />}</div>
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(97,97,97)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(189,189,189)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Disclosure type={"down"} />}</div>
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--color-white)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Disclosure type={"down"} />}</div>
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: State=Default, Size=Medium
    "state=default|size=md": __body0,
    // figma: State=Typed, Size=Medium
    "state=typed|size=md": __body0,
    // figma: State=Hover, Size=Medium
    "state=hover|size=md": __body1,
    // figma: State=Active, Size=Medium
    "state=active|size=md": __body2,
    // figma: State=Disabled, Size=Medium
    "state=disabled|size=md": __body3,
    // figma: State=Error, Size=Medium
    "state=error|size=md": __body4,
    // figma: State=Default, Size=Small
    "state=default|size=sm": __body5,
    // figma: State=Typed, Size=Small
    "state=typed|size=sm": __body5,
    // figma: State=Hover, Size=Small
    "state=hover|size=sm": __body5,
    // figma: State=Active, Size=Small
    "state=active|size=sm": __body6,
    // figma: State=Disabled, Size=Small
    "state=disabled|size=sm": __body7,
    // figma: State=Error, Size=Small
    "state=error|size=sm": __body8,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default PulldownFields;
