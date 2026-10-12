// figma node: 7758:3310 State (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "light=" + __venc(p.light);

export function State(_p = {}) {
  const props = { ..._p, state: _p.state ?? "inprogress", light: _p.light ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(38,40,49)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(229,230,235)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.052} height={14.688} viewBox="0 0 12.052 14.688" fill="none" style={{
            position: "absolute",
            left: 2.833,
            top: 0.801,
            width: 12.052,
            height: 14.688,
            borderRadius: 3.178906202316284,
          }}>
            <path d={"M 0 1.19 L 0 13.498 C 0 14.437 1.034 15.007 1.83 14.496 L 11.5 8.342 C 12.237 7.879 12.237 6.809 11.5 6.334 L 1.83 0.192 C 1.034 -0.319 0 0.251 0 1.19 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(38,40,49)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "In Progress"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(229,230,235)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 2.411,
            top: 0.789,
            display: "flex",
            flexDirection: "row",
            gap: 3.178906202316284,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              width: 4,
              height: 14.211,
              borderRadius: 1.589452862739563,
              backgroundColor: "rgb(38,40,49)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 4,
              height: 14.211,
              borderRadius: 1.589452862739563,
              backgroundColor: "rgb(38,40,49)",
              flexShrink: 0,
            }} />
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(38,40,49)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Holding"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(38,40,49)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(229,230,235)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16} height={12} viewBox="0 0 16 12" fill="none" style={{
            position: "absolute",
            left: -0.001,
            top: 2.399,
            width: 16,
            height: 12,
          }}>
            <path d={"M 15.537 0.474 C 16.159 1.102 16.154 2.115 15.526 2.737 L 6.637 11.537 C 6.013 12.154 5.009 12.154 4.385 11.537 L 0.474 7.665 C -0.154 7.043 -0.159 6.03 0.463 5.402 C 1.085 4.774 2.098 4.769 2.726 5.391 L 5.511 8.149 L 13.274 0.463 C 13.902 -0.159 14.915 -0.154 15.537 0.474 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(38,40,49)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Done"}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(38,40,49)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(229,230,235)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={14.800} height={14.800} viewBox="0 0 14.800 14.800" fill="none" style={{
            position: "absolute",
            left: 0.8,
            top: 0.8,
            width: 14.8,
            height: 14.8,
          }}>
            <path d={"M 7.4 0 C 6.85 0 6.4 0.45 6.4 1 L 6.4 7.455 L 5.229 6.29 C 4.839 5.9 4.209 5.901 3.819 6.291 C 3.428 6.681 3.428 7.311 3.819 7.701 L 6.691 10.573 C 7.081 10.964 7.711 10.964 8.101 10.573 L 10.973 7.701 C 11.363 7.311 11.363 6.681 10.973 6.291 C 10.583 5.9 9.953 5.9 9.563 6.291 L 8.4 7.453 L 8.4 1 C 8.4 0.45 7.95 0 7.4 0 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 1 7.2 C 0.45 7.2 0 7.65 0 8.2 L 0 13 C 0 13.99 0.81 14.8 1.8 14.8 L 13 14.8 C 13.99 14.8 14.8 13.99 14.8 13 L 14.8 8.2 C 14.8 7.65 14.35 7.2 13.8 7.2 C 13.25 7.2 12.8 7.65 12.8 8.2 L 12.8 12.2 C 12.8 12.53 12.53 12.8 12.2 12.8 L 2.6 12.8 C 2.27 12.8 2 12.53 2 12.2 L 2 8.2 C 2 7.65 1.55 7.2 1 7.2 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(38,40,49)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Archiving"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(245,246,250)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(38,40,49)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.052} height={14.688} viewBox="0 0 12.052 14.688" fill="none" style={{
            position: "absolute",
            left: 2.833,
            top: 0.801,
            width: 12.052,
            height: 14.688,
            borderRadius: 3.178906202316284,
          }}>
            <path d={"M 0 1.19 L 0 13.498 C 0 14.437 1.034 15.007 1.83 14.496 L 11.5 8.342 C 12.237 7.879 12.237 6.809 11.5 6.334 L 1.83 0.192 C 1.034 -0.319 0 0.251 0 1.19 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(245,246,250)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "In Progress"}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(38,40,49)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 2.411,
            top: 0.789,
            display: "flex",
            flexDirection: "row",
            gap: 3.178906202316284,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              width: 4,
              height: 14.211,
              borderRadius: 1.589452862739563,
              backgroundColor: "rgb(245,246,250)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 4,
              height: 14.211,
              borderRadius: 1.589452862739563,
              backgroundColor: "rgb(245,246,250)",
              flexShrink: 0,
            }} />
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(245,246,250)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Holding"}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(245,246,250)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(38,40,49)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16} height={12} viewBox="0 0 16 12" fill="none" style={{
            position: "absolute",
            left: -0.001,
            top: 2.399,
            width: 16,
            height: 12,
          }}>
            <path d={"M 15.537 0.474 C 16.159 1.102 16.154 2.115 15.526 2.737 L 6.637 11.537 C 6.013 12.154 5.009 12.154 4.385 11.537 L 0.474 7.665 C -0.154 7.043 -0.159 6.03 0.463 5.402 C 1.085 4.774 2.098 4.769 2.726 5.391 L 5.511 8.149 L 13.274 0.463 C 13.902 -0.159 14.915 -0.154 15.537 0.474 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(245,246,250)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Done"}</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(245,246,250)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(38,40,49)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={14.800} height={14.800} viewBox="0 0 14.800 14.800" fill="none" style={{
            position: "absolute",
            left: 0.8,
            top: 0.8,
            width: 14.8,
            height: 14.8,
          }}>
            <path d={"M 7.4 0 C 6.85 0 6.4 0.45 6.4 1 L 6.4 7.455 L 5.229 6.29 C 4.839 5.9 4.209 5.901 3.819 6.291 C 3.428 6.681 3.428 7.311 3.819 7.701 L 6.691 10.573 C 7.081 10.964 7.711 10.964 8.101 10.573 L 10.973 7.701 C 11.363 7.311 11.363 6.681 10.973 6.291 C 10.583 5.9 9.953 5.9 9.563 6.291 L 8.4 7.453 L 8.4 1 C 8.4 0.45 7.95 0 7.4 0 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 1 7.2 C 0.45 7.2 0 7.65 0 8.2 L 0 13 C 0 13.99 0.81 14.8 1.8 14.8 L 13 14.8 C 13.99 14.8 14.8 13.99 14.8 13 L 14.8 8.2 C 14.8 7.65 14.35 7.2 13.8 7.2 C 13.25 7.2 12.8 7.65 12.8 8.2 L 12.8 12.2 C 12.8 12.53 12.53 12.8 12.2 12.8 L 2.6 12.8 C 2.27 12.8 2 12.53 2 12.2 L 2 8.2 C 2 7.65 1.55 7.2 1 7.2 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(245,246,250)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Archiving"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=InProgress, Light=True
    "state=inprogress|light=true": __body0,
    // figma: State=Holding, Light=True
    "state=holding|light=true": __body1,
    // figma: State=Done, Light=True
    "state=done|light=true": __body2,
    // figma: State=Archiving, Light=True
    "state=archiving|light=true": __body3,
    // figma: State=InProgress, Light=False
    "state=inprogress|light=false": __body4,
    // figma: State=Holding, Light=False
    "state=holding|light=false": __body5,
    // figma: State=Done, Light=False
    "state=done|light=false": __body6,
    // figma: State=Archiving, Light=False
    "state=archiving|light=false": __body7,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default State;
