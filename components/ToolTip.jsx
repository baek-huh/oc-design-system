import { Close } from './Close.jsx';

// figma node: 681:4665 ToolTip (36 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "pointer=" + __venc(p.pointer) + '|' + "title=" + __venc(p.title) + '|' + "mode=" + __venc(p.mode);

export function ToolTip(_p = {}) {
  const props = { ..._p, showClose: _p.showClose ?? false, pointer: _p.pointer ?? "bottom center", title: _p.title ?? false, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 8px 14px 0px rgba(75,81,91,0.06), 0px 12px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,12,0)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,12,0)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "var(--color-white)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,12,0)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--color-white)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,12,0)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,24,34)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,24,54)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "var(--color-white)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,24,54)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--color-white)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,24,34)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,44,0)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,44,0)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "var(--color-white)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,44,0)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--color-white)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,44,0)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,56,34)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,56,54)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "var(--color-white)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,56,54)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--color-white)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,56,34)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(-1,0,0,-1,0,23)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(-1,0,0,-1,0,33)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "var(--color-white)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(-1,0,0,-1,0,33)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--color-white)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(-1,0,0,-1,0,23)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 11,
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 21,
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "var(--color-white)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 21,
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--color-white)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 11,
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "var(--color-white)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--color-white)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,76,0)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,76,0)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "var(--color-white)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,76,0)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--color-white)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,76,0)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,76,40)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          transform: "matrix(-1,0,0,-1,0,0)",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,76,60)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          transform: "matrix(-1,0,0,-1,0,0)",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "var(--color-white)",
            flexShrink: 0,
          }}>{props.text1 ?? "툴팁"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.text2 ?? "툴팁 설명이에요"}</span>
        </div>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,76,60)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          transform: "matrix(-1,0,0,-1,0,0)",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(21,24,30)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(21,24,30)",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
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
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--color-white)",
          flexShrink: 0,
        }}>{props.text1 ?? "툴팁 설명이에요"}</span>
        {props.showClose && (
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 4px 2px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>{props.icon1 ?? <Close />}</div>
        </div>
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,76,40)",
        transformOrigin: "0 0",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
          position: "relative",
          transform: "matrix(-1,0,0,-1,0,0)",
          width: 6,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 4.586 7.414 L 0 12 L 0 0 L 4.586 4.586 C 5.367 5.367 5.367 6.633 4.586 7.414 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Pointer=Top Left, Title=False, Mode=Light
    "pointer=top left|title=false|mode=light": __body0,
    // figma: Pointer=Top Left, Title=True, Mode=Light
    "pointer=top left|title=true|mode=light": __body1,
    // figma: Pointer=Top Left, Title=True, Mode=Dark
    "pointer=top left|title=true|mode=dark": __body2,
    // figma: Pointer=Top Left, Title=False, Mode=Dark
    "pointer=top left|title=false|mode=dark": __body3,
    // figma: Pointer=Bottom Left, Title=False, Mode=Light
    "pointer=bottom left|title=false|mode=light": __body4,
    // figma: Pointer=Bottom Left, Title=True, Mode=Light
    "pointer=bottom left|title=true|mode=light": __body5,
    // figma: Pointer=Bottom Left, Title=True, Mode=Dark
    "pointer=bottom left|title=true|mode=dark": __body6,
    // figma: Pointer=Bottom Left, Title=False, Mode=Dark
    "pointer=bottom left|title=false|mode=dark": __body7,
    // figma: Pointer=Top Center, Title=False, Mode=Light
    "pointer=top center|title=false|mode=light": __body8,
    // figma: Pointer=Top Center, Title=True, Mode=Light
    "pointer=top center|title=true|mode=light": __body9,
    // figma: Pointer=Top Center, Title=True, Mode=Dark
    "pointer=top center|title=true|mode=dark": __body10,
    // figma: Pointer=Top Center, Title=False, Mode=Dark
    "pointer=top center|title=false|mode=dark": __body11,
    // figma: Pointer=Bottom Center, Title=False, Mode=Light
    "pointer=bottom center|title=false|mode=light": __body12,
    // figma: Pointer=Bottom Center, Title=True, Mode=Light
    "pointer=bottom center|title=true|mode=light": __body13,
    // figma: Pointer=Bottom Center, Title=True, Mode=Dark
    "pointer=bottom center|title=true|mode=dark": __body14,
    // figma: Pointer=Bottom Center, Title=False, Mode=Dark
    "pointer=bottom center|title=false|mode=dark": __body15,
    // figma: Pointer=Left, Title=False, Mode=Light
    "pointer=left|title=false|mode=light": __body16,
    // figma: Pointer=Left, Title=True, Mode=Light
    "pointer=left|title=true|mode=light": __body17,
    // figma: Pointer=Left, Title=True, Mode=Dark
    "pointer=left|title=true|mode=dark": __body18,
    // figma: Pointer=Left, Title=False, Mode=Dark
    "pointer=left|title=false|mode=dark": __body19,
    // figma: Pointer=Right, Title=False, Mode=Light
    "pointer=right|title=false|mode=light": __body20,
    // figma: Pointer=Right, Title=True, Mode=Light
    "pointer=right|title=true|mode=light": __body21,
    // figma: Pointer=Right, Title=True, Mode=Dark
    "pointer=right|title=true|mode=dark": __body22,
    // figma: Pointer=Right, Title=False, Mode=Dark
    "pointer=right|title=false|mode=dark": __body23,
    // figma: Pointer=None, Title=False, Mode=Light
    "pointer=none|title=false|mode=light": __body24,
    // figma: Pointer=None, Title=True, Mode=Light
    "pointer=none|title=true|mode=light": __body25,
    // figma: Pointer=None, Title=True, Mode=Dark
    "pointer=none|title=true|mode=dark": __body26,
    // figma: Pointer=None, Title=False, Mode=Dark
    "pointer=none|title=false|mode=dark": __body27,
    // figma: Pointer=Top Right, Title=False, Mode=Light
    "pointer=top right|title=false|mode=light": __body28,
    // figma: Pointer=Top Right, Title=True, Mode=Light
    "pointer=top right|title=true|mode=light": __body29,
    // figma: Pointer=Top Right, Title=True, Mode=Dark
    "pointer=top right|title=true|mode=dark": __body30,
    // figma: Pointer=Top Right, Title=False, Mode=Dark
    "pointer=top right|title=false|mode=dark": __body31,
    // figma: Pointer=Bottom Right, Title=False, Mode=Light
    "pointer=bottom right|title=false|mode=light": __body32,
    // figma: Pointer=Bottom Right, Title=True, Mode=Light
    "pointer=bottom right|title=true|mode=light": __body33,
    // figma: Pointer=Bottom Right, Title=True, Mode=Dark
    "pointer=bottom right|title=true|mode=dark": __body34,
    // figma: Pointer=Bottom Right, Title=False, Mode=Dark
    "pointer=bottom right|title=false|mode=dark": __body35,
  };
  return (__impls[__vkey(props)] ?? __body12)();
}
export default ToolTip;
