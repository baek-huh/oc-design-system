// figma node: 453:997 button (200 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size) + '|' + "theme=" + __venc(p.theme) + '|' + "style2=" + __venc(p.style2);

export function Button(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", size: _p.size ?? "xs", theme: _p.theme ?? "primary", style2: _p.style2 ?? "fill", showPrefixes: _p.showPrefixes ?? true, showSuffixes: _p.showSuffixes ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-800-3)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-600)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-900-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-600)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-10)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-900-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-100)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-600)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-600)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-900-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-100)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-600)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-600)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={81} height={40} viewBox="0 0 81 40" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 81,
        height: 40,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 73 2 L 73 -2 L 8 -2 L 8 2 Z M 79 8 L 79 32 L 83 32 L 83 8 L 79 8 Z M 73 38 L 8 38 L 8 42 L 73 42 L 73 38 Z M 2 32 L 2 8 L -2 8 L -2 32 L 2 32 Z M 8 38 C 4.686 38 2 35.314 2 32 L -2 32 C -2 37.523 2.477 42 8 42 L 8 38 Z M 79 32 C 79 35.314 76.314 38 73 38 L 73 42 C 78.523 42 83 37.523 83 32 L 79 32 Z M 73 2 C 76.314 2 79 4.686 79 8 L 83 8 C 83 2.477 78.523 -2 73 -2 L 73 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-800-3)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={81} height={40} viewBox="0 0 81 40" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 81,
        height: 40,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 73 2 L 73 -2 L 8 -2 L 8 2 Z M 79 8 L 79 32 L 83 32 L 83 8 L 79 8 Z M 73 38 L 8 38 L 8 42 L 73 42 L 73 38 Z M 2 32 L 2 8 L -2 8 L -2 32 L 2 32 Z M 8 38 C 4.686 38 2 35.314 2 32 L -2 32 C -2 37.523 2.477 42 8 42 L 8 38 Z M 79 32 C 79 35.314 76.314 38 73 38 L 73 42 C 78.523 42 83 37.523 83 32 L 79 32 Z M 73 2 C 76.314 2 79 4.686 79 8 L 83 8 C 83 2.477 78.523 -2 73 -2 L 73 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={81} height={40} viewBox="0 0 81 40" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 81,
        height: 40,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 73 2 L 73 -2 L 8 -2 L 8 2 Z M 79 8 L 79 32 L 83 32 L 83 8 L 79 8 Z M 73 38 L 8 38 L 8 42 L 73 42 L 73 38 Z M 2 32 L 2 8 L -2 8 L -2 32 L 2 32 Z M 8 38 C 4.686 38 2 35.314 2 32 L -2 32 C -2 37.523 2.477 42 8 42 L 8 38 Z M 79 32 C 79 35.314 76.314 38 73 38 L 73 42 C 78.523 42 83 37.523 83 32 L 79 32 Z M 73 2 C 76.314 2 79 4.686 79 8 L 83 8 C 83 2.477 78.523 -2 73 -2 L 73 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={81} height={40} viewBox="0 0 81 40" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 81,
        height: 40,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 73 2 L 73 -2 L 8 -2 L 8 2 Z M 79 8 L 79 32 L 83 32 L 83 8 L 79 8 Z M 73 38 L 8 38 L 8 42 L 73 42 L 73 38 Z M 2 32 L 2 8 L -2 8 L -2 32 L 2 32 Z M 8 38 C 4.686 38 2 35.314 2 32 L -2 32 C -2 37.523 2.477 42 8 42 L 8 38 Z M 79 32 C 79 35.314 76.314 38 73 38 L 73 42 C 78.523 42 83 37.523 83 32 L 79 32 Z M 73 2 C 76.314 2 79 4.686 79 8 L 83 8 C 83 2.477 78.523 -2 73 -2 L 73 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={81} height={40} viewBox="0 0 81 40" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 81,
        height: 40,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 73 2 L 73 -2 L 8 -2 L 8 2 Z M 79 8 L 79 32 L 83 32 L 83 8 L 79 8 Z M 73 38 L 8 38 L 8 42 L 73 42 L 73 38 Z M 2 32 L 2 8 L -2 8 L -2 32 L 2 32 Z M 8 38 C 4.686 38 2 35.314 2 32 L -2 32 C -2 37.523 2.477 42 8 42 L 8 38 Z M 79 32 C 79 35.314 76.314 38 73 38 L 73 42 C 78.523 42 83 37.523 83 32 L 79 32 Z M 73 2 C 76.314 2 79 4.686 79 8 L 83 8 C 83 2.477 78.523 -2 73 -2 L 73 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={81} height={40} viewBox="0 0 81 40" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 81,
        height: 40,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 73 2 L 73 -2 L 8 -2 L 8 2 Z M 79 8 L 79 32 L 83 32 L 83 8 L 79 8 Z M 73 38 L 8 38 L 8 42 L 73 42 L 73 38 Z M 2 32 L 2 8 L -2 8 L -2 32 L 2 32 Z M 8 38 C 4.686 38 2 35.314 2 32 L -2 32 C -2 37.523 2.477 42 8 42 L 8 38 Z M 79 32 C 79 35.314 76.314 38 73 38 L 73 42 C 78.523 42 83 37.523 83 32 L 79 32 Z M 73 2 C 76.314 2 79 4.686 79 8 L 83 8 C 83 2.477 78.523 -2 73 -2 L 73 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={81} height={40} viewBox="0 0 81 40" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 81,
        height: 40,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 73 2 L 73 -2 L 8 -2 L 8 2 Z M 79 8 L 79 32 L 83 32 L 83 8 L 79 8 Z M 73 38 L 8 38 L 8 42 L 73 42 L 73 38 Z M 2 32 L 2 8 L -2 8 L -2 32 L 2 32 Z M 8 38 C 4.686 38 2 35.314 2 32 L -2 32 C -2 37.523 2.477 42 8 42 L 8 38 Z M 79 32 C 79 35.314 76.314 38 73 38 L 73 42 C 78.523 42 83 37.523 83 32 L 79 32 Z M 73 2 C 76.314 2 79 4.686 79 8 L 83 8 C 83 2.477 78.523 -2 73 -2 L 73 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={81} height={40} viewBox="0 0 81 40" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 81,
        height: 40,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 73 2 L 73 -2 L 8 -2 L 8 2 Z M 79 8 L 79 32 L 83 32 L 83 8 L 79 8 Z M 73 38 L 8 38 L 8 42 L 73 42 L 73 38 Z M 2 32 L 2 8 L -2 8 L -2 32 L 2 32 Z M 8 38 C 4.686 38 2 35.314 2 32 L -2 32 C -2 37.523 2.477 42 8 42 L 8 38 Z M 79 32 C 79 35.314 76.314 38 73 38 L 73 42 C 78.523 42 83 37.523 83 32 L 79 32 Z M 73 2 C 76.314 2 79 4.686 79 8 L 83 8 C 83 2.477 78.523 -2 73 -2 L 73 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={81} height={40} viewBox="0 0 81 40" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 81,
        height: 40,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 73 2 L 73 -2 L 8 -2 L 8 2 Z M 79 8 L 79 32 L 83 32 L 83 8 L 79 8 Z M 73 38 L 8 38 L 8 42 L 73 42 L 73 38 Z M 2 32 L 2 8 L -2 8 L -2 32 L 2 32 Z M 8 38 C 4.686 38 2 35.314 2 32 L -2 32 C -2 37.523 2.477 42 8 42 L 8 38 Z M 79 32 C 79 35.314 76.314 38 73 38 L 73 42 C 78.523 42 83 37.523 83 32 L 79 32 Z M 73 2 C 76.314 2 79 4.686 79 8 L 83 8 C 83 2.477 78.523 -2 73 -2 L 73 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={81} height={40} viewBox="0 0 81 40" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 81,
        height: 40,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 73 2 L 73 -2 L 8 -2 L 8 2 Z M 79 8 L 79 32 L 83 32 L 83 8 L 79 8 Z M 73 38 L 8 38 L 8 42 L 73 42 L 73 38 Z M 2 32 L 2 8 L -2 8 L -2 32 L 2 32 Z M 8 38 C 4.686 38 2 35.314 2 32 L -2 32 C -2 37.523 2.477 42 8 42 L 8 38 Z M 79 32 C 79 35.314 76.314 38 73 38 L 73 42 C 78.523 42 83 37.523 83 32 L 79 32 Z M 73 2 C 76.314 2 79 4.686 79 8 L 83 8 C 83 2.477 78.523 -2 73 -2 L 73 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-100)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-200-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-100)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-200)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-200)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-200)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-200)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-200)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-200)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-200)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-200)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-200)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-200)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-800-3)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={77} height={34} viewBox="0 0 77 34" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 77,
        height: 34,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 69 2 L 69 -2 L 8 -2 L 8 2 Z M 75 8 L 75 26 L 79 26 L 79 8 L 75 8 Z M 69 32 L 8 32 L 8 36 L 69 36 L 69 32 Z M 2 26 L 2 8 L -2 8 L -2 26 L 2 26 Z M 8 32 C 4.686 32 2 29.314 2 26 L -2 26 C -2 31.523 2.477 36 8 36 L 8 32 Z M 75 26 C 75 29.314 72.314 32 69 32 L 69 36 C 74.523 36 79 31.523 79 26 L 75 26 Z M 69 2 C 72.314 2 75 4.686 75 8 L 79 8 C 79 2.477 74.523 -2 69 -2 L 69 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-800-3)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={77} height={34} viewBox="0 0 77 34" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 77,
        height: 34,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 69 2 L 69 -2 L 8 -2 L 8 2 Z M 75 8 L 75 26 L 79 26 L 79 8 L 75 8 Z M 69 32 L 8 32 L 8 36 L 69 36 L 69 32 Z M 2 26 L 2 8 L -2 8 L -2 26 L 2 26 Z M 8 32 C 4.686 32 2 29.314 2 26 L -2 26 C -2 31.523 2.477 36 8 36 L 8 32 Z M 75 26 C 75 29.314 72.314 32 69 32 L 69 36 C 74.523 36 79 31.523 79 26 L 75 26 Z M 69 2 C 72.314 2 75 4.686 75 8 L 79 8 C 79 2.477 74.523 -2 69 -2 L 69 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={77} height={34} viewBox="0 0 77 34" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 77,
        height: 34,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 69 2 L 69 -2 L 8 -2 L 8 2 Z M 75 8 L 75 26 L 79 26 L 79 8 L 75 8 Z M 69 32 L 8 32 L 8 36 L 69 36 L 69 32 Z M 2 26 L 2 8 L -2 8 L -2 26 L 2 26 Z M 8 32 C 4.686 32 2 29.314 2 26 L -2 26 C -2 31.523 2.477 36 8 36 L 8 32 Z M 75 26 C 75 29.314 72.314 32 69 32 L 69 36 C 74.523 36 79 31.523 79 26 L 75 26 Z M 69 2 C 72.314 2 75 4.686 75 8 L 79 8 C 79 2.477 74.523 -2 69 -2 L 69 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={77} height={34} viewBox="0 0 77 34" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 77,
        height: 34,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 69 2 L 69 -2 L 8 -2 L 8 2 Z M 75 8 L 75 26 L 79 26 L 79 8 L 75 8 Z M 69 32 L 8 32 L 8 36 L 69 36 L 69 32 Z M 2 26 L 2 8 L -2 8 L -2 26 L 2 26 Z M 8 32 C 4.686 32 2 29.314 2 26 L -2 26 C -2 31.523 2.477 36 8 36 L 8 32 Z M 75 26 C 75 29.314 72.314 32 69 32 L 69 36 C 74.523 36 79 31.523 79 26 L 75 26 Z M 69 2 C 72.314 2 75 4.686 75 8 L 79 8 C 79 2.477 74.523 -2 69 -2 L 69 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={77} height={34} viewBox="0 0 77 34" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 77,
        height: 34,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 69 2 L 69 -2 L 8 -2 L 8 2 Z M 75 8 L 75 26 L 79 26 L 79 8 L 75 8 Z M 69 32 L 8 32 L 8 36 L 69 36 L 69 32 Z M 2 26 L 2 8 L -2 8 L -2 26 L 2 26 Z M 8 32 C 4.686 32 2 29.314 2 26 L -2 26 C -2 31.523 2.477 36 8 36 L 8 32 Z M 75 26 C 75 29.314 72.314 32 69 32 L 69 36 C 74.523 36 79 31.523 79 26 L 75 26 Z M 69 2 C 72.314 2 75 4.686 75 8 L 79 8 C 79 2.477 74.523 -2 69 -2 L 69 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={77} height={34} viewBox="0 0 77 34" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 77,
        height: 34,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 69 2 L 69 -2 L 8 -2 L 8 2 Z M 75 8 L 75 26 L 79 26 L 79 8 L 75 8 Z M 69 32 L 8 32 L 8 36 L 69 36 L 69 32 Z M 2 26 L 2 8 L -2 8 L -2 26 L 2 26 Z M 8 32 C 4.686 32 2 29.314 2 26 L -2 26 C -2 31.523 2.477 36 8 36 L 8 32 Z M 75 26 C 75 29.314 72.314 32 69 32 L 69 36 C 74.523 36 79 31.523 79 26 L 75 26 Z M 69 2 C 72.314 2 75 4.686 75 8 L 79 8 C 79 2.477 74.523 -2 69 -2 L 69 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={77} height={34} viewBox="0 0 77 34" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 77,
        height: 34,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 69 2 L 69 -2 L 8 -2 L 8 2 Z M 75 8 L 75 26 L 79 26 L 79 8 L 75 8 Z M 69 32 L 8 32 L 8 36 L 69 36 L 69 32 Z M 2 26 L 2 8 L -2 8 L -2 26 L 2 26 Z M 8 32 C 4.686 32 2 29.314 2 26 L -2 26 C -2 31.523 2.477 36 8 36 L 8 32 Z M 75 26 C 75 29.314 72.314 32 69 32 L 69 36 C 74.523 36 79 31.523 79 26 L 75 26 Z M 69 2 C 72.314 2 75 4.686 75 8 L 79 8 C 79 2.477 74.523 -2 69 -2 L 69 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={77} height={34} viewBox="0 0 77 34" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 77,
        height: 34,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 69 2 L 69 -2 L 8 -2 L 8 2 Z M 75 8 L 75 26 L 79 26 L 79 8 L 75 8 Z M 69 32 L 8 32 L 8 36 L 69 36 L 69 32 Z M 2 26 L 2 8 L -2 8 L -2 26 L 2 26 Z M 8 32 C 4.686 32 2 29.314 2 26 L -2 26 C -2 31.523 2.477 36 8 36 L 8 32 Z M 75 26 C 75 29.314 72.314 32 69 32 L 69 36 C 74.523 36 79 31.523 79 26 L 75 26 Z M 69 2 C 72.314 2 75 4.686 75 8 L 79 8 C 79 2.477 74.523 -2 69 -2 L 69 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={77} height={34} viewBox="0 0 77 34" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 77,
        height: 34,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 69 2 L 69 -2 L 8 -2 L 8 2 Z M 75 8 L 75 26 L 79 26 L 79 8 L 75 8 Z M 69 32 L 8 32 L 8 36 L 69 36 L 69 32 Z M 2 26 L 2 8 L -2 8 L -2 26 L 2 26 Z M 8 32 C 4.686 32 2 29.314 2 26 L -2 26 C -2 31.523 2.477 36 8 36 L 8 32 Z M 75 26 C 75 29.314 72.314 32 69 32 L 69 36 C 74.523 36 79 31.523 79 26 L 75 26 Z M 69 2 C 72.314 2 75 4.686 75 8 L 79 8 C 79 2.477 74.523 -2 69 -2 L 69 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={77} height={34} viewBox="0 0 77 34" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 77,
        height: 34,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 69 2 L 69 -2 L 8 -2 L 8 2 Z M 75 8 L 75 26 L 79 26 L 79 8 L 75 8 Z M 69 32 L 8 32 L 8 36 L 69 36 L 69 32 Z M 2 26 L 2 8 L -2 8 L -2 26 L 2 26 Z M 8 32 C 4.686 32 2 29.314 2 26 L -2 26 C -2 31.523 2.477 36 8 36 L 8 32 Z M 75 26 C 75 29.314 72.314 32 69 32 L 69 36 C 74.523 36 79 31.523 79 26 L 75 26 Z M 69 2 C 72.314 2 75 4.686 75 8 L 79 8 C 79 2.477 74.523 -2 69 -2 L 69 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-600)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-900-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-600)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-10)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-900-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-500)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-100)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-600)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-600)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-900-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-100)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-600)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-600)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-100)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-200-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-100)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--white)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-200)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-200)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-200)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-200)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-200)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-200)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--blue-200)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--blue-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--blue-200)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={10.208} height={10.208} viewBox="0 0 10.208 10.208" fill="none" style={{
            position: "absolute",
            left: 1.896,
            top: 1.896,
            width: 10.208,
            height: 10.208,
            color: "var(--red-200)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          lineHeight: "20px",
          color: "var(--red-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
        }}>
          <svg width={4.958} height={9.042} viewBox="0 0 4.958 9.042" fill="none" style={{
            position: "absolute",
            left: 4.813,
            top: 2.479,
            width: 4.958,
            height: 9.042,
            color: "var(--red-200)",
          }}>
            <path d={"M 0.128 0.128 C 0.299 -0.043 0.576 -0.043 0.747 0.128 L 4.83 4.211 C 5.001 4.382 5.001 4.659 4.83 4.83 L 0.747 8.914 C 0.576 9.084 0.299 9.084 0.128 8.914 C -0.043 8.743 -0.043 8.466 0.128 8.295 L 3.902 4.521 L 0.128 0.747 C -0.043 0.576 -0.043 0.299 0.128 0.128 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={101} height={52} viewBox="0 0 101 52" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 101,
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 93 2 L 93 -2 L 8 -2 L 8 2 Z M 99 8 L 99 44 L 103 44 L 103 8 L 99 8 Z M 93 50 L 8 50 L 8 54 L 93 54 L 93 50 Z M 2 44 L 2 8 L -2 8 L -2 44 L 2 44 Z M 8 50 C 4.686 50 2 47.314 2 44 L -2 44 C -2 49.523 2.477 54 8 54 L 8 50 Z M 99 44 C 99 47.314 96.314 50 93 50 L 93 54 C 98.523 54 103 49.523 103 44 L 99 44 Z M 93 2 C 96.314 2 99 4.686 99 8 L 103 8 C 103 2.477 98.523 -2 93 -2 L 93 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-800-3)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={101} height={52} viewBox="0 0 101 52" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 101,
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 93 2 L 93 -2 L 8 -2 L 8 2 Z M 99 8 L 99 44 L 103 44 L 103 8 L 99 8 Z M 93 50 L 8 50 L 8 54 L 93 54 L 93 50 Z M 2 44 L 2 8 L -2 8 L -2 44 L 2 44 Z M 8 50 C 4.686 50 2 47.314 2 44 L -2 44 C -2 49.523 2.477 54 8 54 L 8 50 Z M 99 44 C 99 47.314 96.314 50 93 50 L 93 54 C 98.523 54 103 49.523 103 44 L 99 44 Z M 93 2 C 96.314 2 99 4.686 99 8 L 103 8 C 103 2.477 98.523 -2 93 -2 L 93 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={101} height={52} viewBox="0 0 101 52" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 101,
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 93 2 L 93 -2 L 8 -2 L 8 2 Z M 99 8 L 99 44 L 103 44 L 103 8 L 99 8 Z M 93 50 L 8 50 L 8 54 L 93 54 L 93 50 Z M 2 44 L 2 8 L -2 8 L -2 44 L 2 44 Z M 8 50 C 4.686 50 2 47.314 2 44 L -2 44 C -2 49.523 2.477 54 8 54 L 8 50 Z M 99 44 C 99 47.314 96.314 50 93 50 L 93 54 C 98.523 54 103 49.523 103 44 L 99 44 Z M 93 2 C 96.314 2 99 4.686 99 8 L 103 8 C 103 2.477 98.523 -2 93 -2 L 93 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={101} height={52} viewBox="0 0 101 52" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 101,
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 93 2 L 93 -2 L 8 -2 L 8 2 Z M 99 8 L 99 44 L 103 44 L 103 8 L 99 8 Z M 93 50 L 8 50 L 8 54 L 93 54 L 93 50 Z M 2 44 L 2 8 L -2 8 L -2 44 L 2 44 Z M 8 50 C 4.686 50 2 47.314 2 44 L -2 44 C -2 49.523 2.477 54 8 54 L 8 50 Z M 99 44 C 99 47.314 96.314 50 93 50 L 93 54 C 98.523 54 103 49.523 103 44 L 99 44 Z M 93 2 C 96.314 2 99 4.686 99 8 L 103 8 C 103 2.477 98.523 -2 93 -2 L 93 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={101} height={52} viewBox="0 0 101 52" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 101,
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 93 2 L 93 -2 L 8 -2 L 8 2 Z M 99 8 L 99 44 L 103 44 L 103 8 L 99 8 Z M 93 50 L 8 50 L 8 54 L 93 54 L 93 50 Z M 2 44 L 2 8 L -2 8 L -2 44 L 2 44 Z M 8 50 C 4.686 50 2 47.314 2 44 L -2 44 C -2 49.523 2.477 54 8 54 L 8 50 Z M 99 44 C 99 47.314 96.314 50 93 50 L 93 54 C 98.523 54 103 49.523 103 44 L 99 44 Z M 93 2 C 96.314 2 99 4.686 99 8 L 103 8 C 103 2.477 98.523 -2 93 -2 L 93 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={101} height={52} viewBox="0 0 101 52" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 101,
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 93 2 L 93 -2 L 8 -2 L 8 2 Z M 99 8 L 99 44 L 103 44 L 103 8 L 99 8 Z M 93 50 L 8 50 L 8 54 L 93 54 L 93 50 Z M 2 44 L 2 8 L -2 8 L -2 44 L 2 44 Z M 8 50 C 4.686 50 2 47.314 2 44 L -2 44 C -2 49.523 2.477 54 8 54 L 8 50 Z M 99 44 C 99 47.314 96.314 50 93 50 L 93 54 C 98.523 54 103 49.523 103 44 L 99 44 Z M 93 2 C 96.314 2 99 4.686 99 8 L 103 8 C 103 2.477 98.523 -2 93 -2 L 93 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body86 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={101} height={52} viewBox="0 0 101 52" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 101,
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 93 2 L 93 -2 L 8 -2 L 8 2 Z M 99 8 L 99 44 L 103 44 L 103 8 L 99 8 Z M 93 50 L 8 50 L 8 54 L 93 54 L 93 50 Z M 2 44 L 2 8 L -2 8 L -2 44 L 2 44 Z M 8 50 C 4.686 50 2 47.314 2 44 L -2 44 C -2 49.523 2.477 54 8 54 L 8 50 Z M 99 44 C 99 47.314 96.314 50 93 50 L 93 54 C 98.523 54 103 49.523 103 44 L 99 44 Z M 93 2 C 96.314 2 99 4.686 99 8 L 103 8 C 103 2.477 98.523 -2 93 -2 L 93 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body87 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={101} height={52} viewBox="0 0 101 52" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 101,
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 93 2 L 93 -2 L 8 -2 L 8 2 Z M 99 8 L 99 44 L 103 44 L 103 8 L 99 8 Z M 93 50 L 8 50 L 8 54 L 93 54 L 93 50 Z M 2 44 L 2 8 L -2 8 L -2 44 L 2 44 Z M 8 50 C 4.686 50 2 47.314 2 44 L -2 44 C -2 49.523 2.477 54 8 54 L 8 50 Z M 99 44 C 99 47.314 96.314 50 93 50 L 93 54 C 98.523 54 103 49.523 103 44 L 99 44 Z M 93 2 C 96.314 2 99 4.686 99 8 L 103 8 C 103 2.477 98.523 -2 93 -2 L 93 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={101} height={52} viewBox="0 0 101 52" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 101,
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 93 2 L 93 -2 L 8 -2 L 8 2 Z M 99 8 L 99 44 L 103 44 L 103 8 L 99 8 Z M 93 50 L 8 50 L 8 54 L 93 54 L 93 50 Z M 2 44 L 2 8 L -2 8 L -2 44 L 2 44 Z M 8 50 C 4.686 50 2 47.314 2 44 L -2 44 C -2 49.523 2.477 54 8 54 L 8 50 Z M 99 44 C 99 47.314 96.314 50 93 50 L 93 54 C 98.523 54 103 49.523 103 44 L 99 44 Z M 93 2 C 96.314 2 99 4.686 99 8 L 103 8 C 103 2.477 98.523 -2 93 -2 L 93 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={101} height={52} viewBox="0 0 101 52" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 101,
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 93 2 L 93 -2 L 8 -2 L 8 2 Z M 99 8 L 99 44 L 103 44 L 103 8 L 99 8 Z M 93 50 L 8 50 L 8 54 L 93 54 L 93 50 Z M 2 44 L 2 8 L -2 8 L -2 44 L 2 44 Z M 8 50 C 4.686 50 2 47.314 2 44 L -2 44 C -2 49.523 2.477 54 8 54 L 8 50 Z M 99 44 C 99 47.314 96.314 50 93 50 L 93 54 C 98.523 54 103 49.523 103 44 L 99 44 Z M 93 2 C 96.314 2 99 4.686 99 8 L 103 8 C 103 2.477 98.523 -2 93 -2 L 93 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body90 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body91 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-800-3)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body92 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body93 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body94 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body95 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body96 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body97 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body98 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body99 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body100 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-600)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body101 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-900-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body102 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-600)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body103 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body104 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body105 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-10)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-900-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body106 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body107 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-100)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-600)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-600)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body108 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-900-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body109 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-100)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-600)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-600)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body110 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={60} viewBox="0 0 120 60" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 120,
        height: 60,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 112 2 L 112 -2 L 8 -2 L 8 2 Z M 118 8 L 118 52 L 122 52 L 122 8 L 118 8 Z M 112 58 L 8 58 L 8 62 L 112 62 L 112 58 Z M 2 52 L 2 8 L -2 8 L -2 52 L 2 52 Z M 8 58 C 4.686 58 2 55.314 2 52 L -2 52 C -2 57.523 2.477 62 8 62 L 8 58 Z M 118 52 C 118 55.314 115.314 58 112 58 L 112 62 C 117.523 62 122 57.523 122 52 L 118 52 Z M 112 2 C 115.314 2 118 4.686 118 8 L 122 8 C 122 2.477 117.523 -2 112 -2 L 112 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--white)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--white)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body111 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-800-3)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={60} viewBox="0 0 120 60" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 120,
        height: 60,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 112 2 L 112 -2 L 8 -2 L 8 2 Z M 118 8 L 118 52 L 122 52 L 122 8 L 118 8 Z M 112 58 L 8 58 L 8 62 L 112 62 L 112 58 Z M 2 52 L 2 8 L -2 8 L -2 52 L 2 52 Z M 8 58 C 4.686 58 2 55.314 2 52 L -2 52 C -2 57.523 2.477 62 8 62 L 8 58 Z M 118 52 C 118 55.314 115.314 58 112 58 L 112 62 C 117.523 62 122 57.523 122 52 L 118 52 Z M 112 2 C 115.314 2 118 4.686 118 8 L 122 8 C 122 2.477 117.523 -2 112 -2 L 112 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--white)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--white)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body112 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={60} viewBox="0 0 120 60" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 120,
        height: 60,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 112 2 L 112 -2 L 8 -2 L 8 2 Z M 118 8 L 118 52 L 122 52 L 122 8 L 118 8 Z M 112 58 L 8 58 L 8 62 L 112 62 L 112 58 Z M 2 52 L 2 8 L -2 8 L -2 52 L 2 52 Z M 8 58 C 4.686 58 2 55.314 2 52 L -2 52 C -2 57.523 2.477 62 8 62 L 8 58 Z M 118 52 C 118 55.314 115.314 58 112 58 L 112 62 C 117.523 62 122 57.523 122 52 L 118 52 Z M 112 2 C 115.314 2 118 4.686 118 8 L 122 8 C 122 2.477 117.523 -2 112 -2 L 112 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--white)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--white)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body113 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={60} viewBox="0 0 120 60" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 120,
        height: 60,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 112 2 L 112 -2 L 8 -2 L 8 2 Z M 118 8 L 118 52 L 122 52 L 122 8 L 118 8 Z M 112 58 L 8 58 L 8 62 L 112 62 L 112 58 Z M 2 52 L 2 8 L -2 8 L -2 52 L 2 52 Z M 8 58 C 4.686 58 2 55.314 2 52 L -2 52 C -2 57.523 2.477 62 8 62 L 8 58 Z M 118 52 C 118 55.314 115.314 58 112 58 L 112 62 C 117.523 62 122 57.523 122 52 L 118 52 Z M 112 2 C 115.314 2 118 4.686 118 8 L 122 8 C 122 2.477 117.523 -2 112 -2 L 112 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--blue-500)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body114 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={60} viewBox="0 0 120 60" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 120,
        height: 60,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 112 2 L 112 -2 L 8 -2 L 8 2 Z M 118 8 L 118 52 L 122 52 L 122 8 L 118 8 Z M 112 58 L 8 58 L 8 62 L 112 62 L 112 58 Z M 2 52 L 2 8 L -2 8 L -2 52 L 2 52 Z M 8 58 C 4.686 58 2 55.314 2 52 L -2 52 C -2 57.523 2.477 62 8 62 L 8 58 Z M 118 52 C 118 55.314 115.314 58 112 58 L 112 62 C 117.523 62 122 57.523 122 52 L 118 52 Z M 112 2 C 115.314 2 118 4.686 118 8 L 122 8 C 122 2.477 117.523 -2 112 -2 L 112 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body115 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={60} viewBox="0 0 120 60" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 120,
        height: 60,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 112 2 L 112 -2 L 8 -2 L 8 2 Z M 118 8 L 118 52 L 122 52 L 122 8 L 118 8 Z M 112 58 L 8 58 L 8 62 L 112 62 L 112 58 Z M 2 52 L 2 8 L -2 8 L -2 52 L 2 52 Z M 8 58 C 4.686 58 2 55.314 2 52 L -2 52 C -2 57.523 2.477 62 8 62 L 8 58 Z M 118 52 C 118 55.314 115.314 58 112 58 L 112 62 C 117.523 62 122 57.523 122 52 L 118 52 Z M 112 2 C 115.314 2 118 4.686 118 8 L 122 8 C 122 2.477 117.523 -2 112 -2 L 112 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body116 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={60} viewBox="0 0 120 60" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 120,
        height: 60,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 112 2 L 112 -2 L 8 -2 L 8 2 Z M 118 8 L 118 52 L 122 52 L 122 8 L 118 8 Z M 112 58 L 8 58 L 8 62 L 112 62 L 112 58 Z M 2 52 L 2 8 L -2 8 L -2 52 L 2 52 Z M 8 58 C 4.686 58 2 55.314 2 52 L -2 52 C -2 57.523 2.477 62 8 62 L 8 58 Z M 118 52 C 118 55.314 115.314 58 112 58 L 112 62 C 117.523 62 122 57.523 122 52 L 118 52 Z M 112 2 C 115.314 2 118 4.686 118 8 L 122 8 C 122 2.477 117.523 -2 112 -2 L 112 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--red-500)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body117 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={60} viewBox="0 0 120 60" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 120,
        height: 60,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 112 2 L 112 -2 L 8 -2 L 8 2 Z M 118 8 L 118 52 L 122 52 L 122 8 L 118 8 Z M 112 58 L 8 58 L 8 62 L 112 62 L 112 58 Z M 2 52 L 2 8 L -2 8 L -2 52 L 2 52 Z M 8 58 C 4.686 58 2 55.314 2 52 L -2 52 C -2 57.523 2.477 62 8 62 L 8 58 Z M 118 52 C 118 55.314 115.314 58 112 58 L 112 62 C 117.523 62 122 57.523 122 52 L 118 52 Z M 112 2 C 115.314 2 118 4.686 118 8 L 122 8 C 122 2.477 117.523 -2 112 -2 L 112 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--blue-500)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body118 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={60} viewBox="0 0 120 60" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 120,
        height: 60,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 112 2 L 112 -2 L 8 -2 L 8 2 Z M 118 8 L 118 52 L 122 52 L 122 8 L 118 8 Z M 112 58 L 8 58 L 8 62 L 112 62 L 112 58 Z M 2 52 L 2 8 L -2 8 L -2 52 L 2 52 Z M 8 58 C 4.686 58 2 55.314 2 52 L -2 52 C -2 57.523 2.477 62 8 62 L 8 58 Z M 118 52 C 118 55.314 115.314 58 112 58 L 112 62 C 117.523 62 122 57.523 122 52 L 118 52 Z M 112 2 C 115.314 2 118 4.686 118 8 L 122 8 C 122 2.477 117.523 -2 112 -2 L 112 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body119 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={60} viewBox="0 0 120 60" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 120,
        height: 60,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 112 2 L 112 -2 L 8 -2 L 8 2 Z M 118 8 L 118 52 L 122 52 L 122 8 L 118 8 Z M 112 58 L 8 58 L 8 62 L 112 62 L 112 58 Z M 2 52 L 2 8 L -2 8 L -2 52 L 2 52 Z M 8 58 C 4.686 58 2 55.314 2 52 L -2 52 C -2 57.523 2.477 62 8 62 L 8 58 Z M 118 52 C 118 55.314 115.314 58 112 58 L 112 62 C 117.523 62 122 57.523 122 52 L 118 52 Z M 112 2 C 115.314 2 118 4.686 118 8 L 122 8 C 122 2.477 117.523 -2 112 -2 L 112 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--red-500)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body120 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-100)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body121 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-200-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body122 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-100)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body123 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-200)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-200)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-200)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body124 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body125 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body126 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-200)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-200)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-200)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body127 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-200)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-200)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body128 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body129 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-200)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-200)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body130 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--white)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          lineHeight: "26px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--white)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body131 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-800-3)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--white)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--white)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body132 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--white)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--white)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body133 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--blue-500)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body134 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body135 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body136 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--red-500)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body137 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--blue-500)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body138 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body139 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--red-500)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body140 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={97} height={44} viewBox="0 0 97 44" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 97,
        height: 44,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 89 2 L 89 -2 L 8 -2 L 8 2 Z M 95 8 L 95 36 L 99 36 L 99 8 L 95 8 Z M 89 42 L 8 42 L 8 46 L 89 46 L 89 42 Z M 2 36 L 2 8 L -2 8 L -2 36 L 2 36 Z M 8 42 C 4.686 42 2 39.314 2 36 L -2 36 C -2 41.523 2.477 46 8 46 L 8 42 Z M 95 36 C 95 39.314 92.314 42 89 42 L 89 46 C 94.523 46 99 41.523 99 36 L 95 36 Z M 89 2 C 92.314 2 95 4.686 95 8 L 99 8 C 99 2.477 94.523 -2 89 -2 L 89 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body141 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-800-3)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={97} height={44} viewBox="0 0 97 44" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 97,
        height: 44,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 89 2 L 89 -2 L 8 -2 L 8 2 Z M 95 8 L 95 36 L 99 36 L 99 8 L 95 8 Z M 89 42 L 8 42 L 8 46 L 89 46 L 89 42 Z M 2 36 L 2 8 L -2 8 L -2 36 L 2 36 Z M 8 42 C 4.686 42 2 39.314 2 36 L -2 36 C -2 41.523 2.477 46 8 46 L 8 42 Z M 95 36 C 95 39.314 92.314 42 89 42 L 89 46 C 94.523 46 99 41.523 99 36 L 95 36 Z M 89 2 C 92.314 2 95 4.686 95 8 L 99 8 C 99 2.477 94.523 -2 89 -2 L 89 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body142 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={97} height={44} viewBox="0 0 97 44" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 97,
        height: 44,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 89 2 L 89 -2 L 8 -2 L 8 2 Z M 95 8 L 95 36 L 99 36 L 99 8 L 95 8 Z M 89 42 L 8 42 L 8 46 L 89 46 L 89 42 Z M 2 36 L 2 8 L -2 8 L -2 36 L 2 36 Z M 8 42 C 4.686 42 2 39.314 2 36 L -2 36 C -2 41.523 2.477 46 8 46 L 8 42 Z M 95 36 C 95 39.314 92.314 42 89 42 L 89 46 C 94.523 46 99 41.523 99 36 L 95 36 Z M 89 2 C 92.314 2 95 4.686 95 8 L 99 8 C 99 2.477 94.523 -2 89 -2 L 89 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body143 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={97} height={44} viewBox="0 0 97 44" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 97,
        height: 44,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 89 2 L 89 -2 L 8 -2 L 8 2 Z M 95 8 L 95 36 L 99 36 L 99 8 L 95 8 Z M 89 42 L 8 42 L 8 46 L 89 46 L 89 42 Z M 2 36 L 2 8 L -2 8 L -2 36 L 2 36 Z M 8 42 C 4.686 42 2 39.314 2 36 L -2 36 C -2 41.523 2.477 46 8 46 L 8 42 Z M 95 36 C 95 39.314 92.314 42 89 42 L 89 46 C 94.523 46 99 41.523 99 36 L 95 36 Z M 89 2 C 92.314 2 95 4.686 95 8 L 99 8 C 99 2.477 94.523 -2 89 -2 L 89 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body144 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={97} height={44} viewBox="0 0 97 44" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 97,
        height: 44,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 89 2 L 89 -2 L 8 -2 L 8 2 Z M 95 8 L 95 36 L 99 36 L 99 8 L 95 8 Z M 89 42 L 8 42 L 8 46 L 89 46 L 89 42 Z M 2 36 L 2 8 L -2 8 L -2 36 L 2 36 Z M 8 42 C 4.686 42 2 39.314 2 36 L -2 36 C -2 41.523 2.477 46 8 46 L 8 42 Z M 95 36 C 95 39.314 92.314 42 89 42 L 89 46 C 94.523 46 99 41.523 99 36 L 95 36 Z M 89 2 C 92.314 2 95 4.686 95 8 L 99 8 C 99 2.477 94.523 -2 89 -2 L 89 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body145 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={97} height={44} viewBox="0 0 97 44" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 97,
        height: 44,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 89 2 L 89 -2 L 8 -2 L 8 2 Z M 95 8 L 95 36 L 99 36 L 99 8 L 95 8 Z M 89 42 L 8 42 L 8 46 L 89 46 L 89 42 Z M 2 36 L 2 8 L -2 8 L -2 36 L 2 36 Z M 8 42 C 4.686 42 2 39.314 2 36 L -2 36 C -2 41.523 2.477 46 8 46 L 8 42 Z M 95 36 C 95 39.314 92.314 42 89 42 L 89 46 C 94.523 46 99 41.523 99 36 L 95 36 Z M 89 2 C 92.314 2 95 4.686 95 8 L 99 8 C 99 2.477 94.523 -2 89 -2 L 89 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body146 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={97} height={44} viewBox="0 0 97 44" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 97,
        height: 44,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 89 2 L 89 -2 L 8 -2 L 8 2 Z M 95 8 L 95 36 L 99 36 L 99 8 L 95 8 Z M 89 42 L 8 42 L 8 46 L 89 46 L 89 42 Z M 2 36 L 2 8 L -2 8 L -2 36 L 2 36 Z M 8 42 C 4.686 42 2 39.314 2 36 L -2 36 C -2 41.523 2.477 46 8 46 L 8 42 Z M 95 36 C 95 39.314 92.314 42 89 42 L 89 46 C 94.523 46 99 41.523 99 36 L 95 36 Z M 89 2 C 92.314 2 95 4.686 95 8 L 99 8 C 99 2.477 94.523 -2 89 -2 L 89 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body147 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={97} height={44} viewBox="0 0 97 44" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 97,
        height: 44,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--blue-200)",
      }}>
        <path d={"M 8 2 L 89 2 L 89 -2 L 8 -2 L 8 2 Z M 95 8 L 95 36 L 99 36 L 99 8 L 95 8 Z M 89 42 L 8 42 L 8 46 L 89 46 L 89 42 Z M 2 36 L 2 8 L -2 8 L -2 36 L 2 36 Z M 8 42 C 4.686 42 2 39.314 2 36 L -2 36 C -2 41.523 2.477 46 8 46 L 8 42 Z M 95 36 C 95 39.314 92.314 42 89 42 L 89 46 C 94.523 46 99 41.523 99 36 L 95 36 Z M 89 2 C 92.314 2 95 4.686 95 8 L 99 8 C 99 2.477 94.523 -2 89 -2 L 89 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body148 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={97} height={44} viewBox="0 0 97 44" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 97,
        height: 44,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--slate-200-2)",
      }}>
        <path d={"M 8 2 L 89 2 L 89 -2 L 8 -2 L 8 2 Z M 95 8 L 95 36 L 99 36 L 99 8 L 95 8 Z M 89 42 L 8 42 L 8 46 L 89 46 L 89 42 Z M 2 36 L 2 8 L -2 8 L -2 36 L 2 36 Z M 8 42 C 4.686 42 2 39.314 2 36 L -2 36 C -2 41.523 2.477 46 8 46 L 8 42 Z M 95 36 C 95 39.314 92.314 42 89 42 L 89 46 C 94.523 46 99 41.523 99 36 L 95 36 Z M 89 2 C 92.314 2 95 4.686 95 8 L 99 8 C 99 2.477 94.523 -2 89 -2 L 89 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body149 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={97} height={44} viewBox="0 0 97 44" fill="none" style={{
        position: "absolute",
        left: -2,
        top: -2,
        width: 97,
        height: 44,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--red-200)",
      }}>
        <path d={"M 8 2 L 89 2 L 89 -2 L 8 -2 L 8 2 Z M 95 8 L 95 36 L 99 36 L 99 8 L 95 8 Z M 89 42 L 8 42 L 8 46 L 89 46 L 89 42 Z M 2 36 L 2 8 L -2 8 L -2 36 L 2 36 Z M 8 42 C 4.686 42 2 39.314 2 36 L -2 36 C -2 41.523 2.477 46 8 46 L 8 42 Z M 95 36 C 95 39.314 92.314 42 89 42 L 89 46 C 94.523 46 99 41.523 99 36 L 95 36 Z M 89 2 C 92.314 2 95 4.686 95 8 L 99 8 C 99 2.477 94.523 -2 89 -2 L 89 2 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body150 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-600)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--white)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--white)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body151 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-900-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--white)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--white)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body152 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-600)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--white)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--white)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body153 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--blue-500)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body154 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body155 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-10)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--slate-900-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body156 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--red-500)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body157 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-100)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--blue-600)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--blue-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--blue-600)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body158 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--slate-900-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body159 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-100)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--red-600)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--red-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--red-600)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body160 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-100)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--white)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--white)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body161 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-200-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--white)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--white)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body162 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-100)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--white)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--white)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body163 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-200)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--blue-200)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--blue-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--blue-200)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body164 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body165 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body166 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-200)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--red-200)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--red-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--red-200)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body167 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--blue-200)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--blue-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--blue-200)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body168 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body169 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={14.583} height={14.583} viewBox="0 0 14.583 14.583" fill="none" style={{
            position: "absolute",
            left: 2.708,
            top: 2.708,
            width: 14.583,
            height: 14.583,
            color: "var(--red-200)",
          }}>
            <path d={"M 7.917 0.625 C 7.917 0.28 7.637 0 7.292 0 C 6.946 0 6.667 0.28 6.667 0.625 L 6.667 6.667 L 0.625 6.667 C 0.28 6.667 0 6.946 0 7.292 C 0 7.637 0.28 7.917 0.625 7.917 L 6.667 7.917 L 6.667 13.958 C 6.667 14.304 6.946 14.583 7.292 14.583 C 7.637 14.583 7.917 14.304 7.917 13.958 L 7.917 7.917 L 13.958 7.917 C 14.304 7.917 14.583 7.637 14.583 7.292 C 14.583 6.946 14.304 6.667 13.958 6.667 L 7.917 6.667 L 7.917 0.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--red-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <svg width={7.083} height={12.917} viewBox="0 0 7.083 12.917" fill="none" style={{
            position: "absolute",
            left: 6.875,
            top: 3.542,
            width: 7.083,
            height: 12.917,
            color: "var(--red-200)",
          }}>
            <path d={"M 0.183 0.183 C 0.427 -0.061 0.823 -0.061 1.067 0.183 L 6.9 6.016 C 7.144 6.26 7.144 6.656 6.9 6.9 L 1.067 12.734 C 0.823 12.978 0.427 12.978 0.183 12.734 C -0.061 12.49 -0.061 12.094 0.183 11.85 L 5.574 6.458 L 0.183 1.067 C -0.061 0.823 -0.061 0.427 0.183 0.183 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body170 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body171 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-800-3)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body172 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body173 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body174 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body175 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body176 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body177 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body178 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body179 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body180 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-600)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body181 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-900-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body182 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-600)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body183 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body184 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      boxShadow: "inset 0 0 0 1px var(--slate-300-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-800-3)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body185 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-10)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-900-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body186 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-500)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-500)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body187 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-100)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-600)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-600)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body188 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-900-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body189 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-100)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-600)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-600)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body190 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-100)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body191 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-200-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body192 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-100)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--white)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--white)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body193 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--blue-200)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-200)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-200)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body194 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body195 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body196 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--red-200)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-200)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-200)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body197 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--blue-200)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--blue-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--blue-200)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body198 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-200-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body199 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
            position: "absolute",
            left: 2.167,
            top: 2.167,
            width: 11.667,
            height: 11.667,
            color: "var(--red-200)",
          }}>
            <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
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
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-200)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
            position: "absolute",
            left: 5.5,
            top: 2.833,
            width: 5.667,
            height: 10.333,
            color: "var(--red-200)",
          }}>
            <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: state=default, size=small, theme=primary, style=fill
    "state=default|size=sm|theme=primary|style2=fill": __body0,
    // figma: state=default, size=small, theme=secondary, style=fill
    "state=default|size=sm|theme=secondary|style2=fill": __body1,
    // figma: state=default, size=small, theme=error, style=fill
    "state=default|size=sm|theme=error|style2=fill": __body2,
    // figma: state=default, size=small, theme=primary, style=line
    "state=default|size=sm|theme=primary|style2=line": __body3,
    // figma: state=default, size=small, theme=secondary, style=line
    "state=default|size=sm|theme=secondary|style2=line": __body4,
    // figma: state=default, size=small, theme=ghost, style=line
    "state=default|size=sm|theme=ghost|style2=line": __body5,
    // figma: state=default, size=small, theme=error, style=line
    "state=default|size=sm|theme=error|style2=line": __body6,
    // figma: state=default, size=small, theme=primary, style=light
    "state=default|size=sm|theme=primary|style2=light": __body7,
    // figma: state=default, size=small, theme=secondary, style=light
    "state=default|size=sm|theme=secondary|style2=light": __body8,
    // figma: state=default, size=small, theme=error, style=light
    "state=default|size=sm|theme=error|style2=light": __body9,
    // figma: state=action, size=small, theme=primary, style=fill
    "state=action|size=sm|theme=primary|style2=fill": __body10,
    // figma: state=action, size=small, theme=secondary, style=fill
    "state=action|size=sm|theme=secondary|style2=fill": __body11,
    // figma: state=action, size=small, theme=error, style=fill
    "state=action|size=sm|theme=error|style2=fill": __body12,
    // figma: state=action, size=small, theme=primary, style=line
    "state=action|size=sm|theme=primary|style2=line": __body13,
    // figma: state=action, size=small, theme=secondary, style=line
    "state=action|size=sm|theme=secondary|style2=line": __body14,
    // figma: state=action, size=small, theme=ghost, style=line
    "state=action|size=sm|theme=ghost|style2=line": __body15,
    // figma: state=action, size=small, theme=error, style=line
    "state=action|size=sm|theme=error|style2=line": __body16,
    // figma: state=action, size=small, theme=primary, style=light
    "state=action|size=sm|theme=primary|style2=light": __body17,
    // figma: state=action, size=small, theme=secondary, style=light
    "state=action|size=sm|theme=secondary|style2=light": __body18,
    // figma: state=action, size=small, theme=error, style=light
    "state=action|size=sm|theme=error|style2=light": __body19,
    // figma: state=focused, size=small, theme=primary, style=fill
    "state=focused|size=sm|theme=primary|style2=fill": __body20,
    // figma: state=focused, size=small, theme=secondary, style=fill
    "state=focused|size=sm|theme=secondary|style2=fill": __body21,
    // figma: state=focused, size=small, theme=error, style=fill
    "state=focused|size=sm|theme=error|style2=fill": __body22,
    // figma: state=focused, size=small, theme=primary, style=line
    "state=focused|size=sm|theme=primary|style2=line": __body23,
    // figma: state=focused, size=small, theme=secondary, style=line
    "state=focused|size=sm|theme=secondary|style2=line": __body24,
    // figma: state=focused, size=small, theme=ghost, style=line
    "state=focused|size=sm|theme=ghost|style2=line": __body25,
    // figma: state=focused, size=small, theme=error, style=line
    "state=focused|size=sm|theme=error|style2=line": __body26,
    // figma: state=focused, size=small, theme=primary, style=light
    "state=focused|size=sm|theme=primary|style2=light": __body27,
    // figma: state=focused, size=small, theme=secondary, style=light
    "state=focused|size=sm|theme=secondary|style2=light": __body28,
    // figma: state=focused, size=small, theme=error, style=light
    "state=focused|size=sm|theme=error|style2=light": __body29,
    // figma: state=disabled, size=small, theme=primary, style=fill
    "state=disabled|size=sm|theme=primary|style2=fill": __body30,
    // figma: state=disabled, size=small, theme=secondary, style=fill
    "state=disabled|size=sm|theme=secondary|style2=fill": __body31,
    // figma: state=disabled, size=small, theme=error, style=fill
    "state=disabled|size=sm|theme=error|style2=fill": __body32,
    // figma: state=disabled, size=small, theme=primary, style=line
    "state=disabled|size=sm|theme=primary|style2=line": __body33,
    // figma: state=disabled, size=small, theme=secondary, style=line
    "state=disabled|size=sm|theme=secondary|style2=line": __body34,
    // figma: state=disabled, size=small, theme=ghost, style=line
    "state=disabled|size=sm|theme=ghost|style2=line": __body35,
    // figma: state=disabled, size=small, theme=error, style=line
    "state=disabled|size=sm|theme=error|style2=line": __body36,
    // figma: state=disabled, size=small, theme=primary, style=light
    "state=disabled|size=sm|theme=primary|style2=light": __body37,
    // figma: state=disabled, size=small, theme=secondary, style=light
    "state=disabled|size=sm|theme=secondary|style2=light": __body38,
    // figma: state=disabled, size=small, theme=error, style=light
    "state=disabled|size=sm|theme=error|style2=light": __body39,
    // figma: state=default, size=xsmall, theme=primary, style=fill
    "state=default|size=xs|theme=primary|style2=fill": __body40,
    // figma: state=default, size=xsmall, theme=secondary, style=fill
    "state=default|size=xs|theme=secondary|style2=fill": __body41,
    // figma: state=default, size=xsmall, theme=error, style=fill
    "state=default|size=xs|theme=error|style2=fill": __body42,
    // figma: state=default, size=xsmall, theme=primary, style=line
    "state=default|size=xs|theme=primary|style2=line": __body43,
    // figma: state=default, size=xsmall, theme=secondary, style=line
    "state=default|size=xs|theme=secondary|style2=line": __body44,
    // figma: state=default, size=xsmall, theme=ghost, style=line
    "state=default|size=xs|theme=ghost|style2=line": __body45,
    // figma: state=default, size=xsmall, theme=error, style=line
    "state=default|size=xs|theme=error|style2=line": __body46,
    // figma: state=default, size=xsmall, theme=primary, style=light
    "state=default|size=xs|theme=primary|style2=light": __body47,
    // figma: state=default, size=xsmall, theme=secondary, style=light
    "state=default|size=xs|theme=secondary|style2=light": __body48,
    // figma: state=default, size=xsmall, theme=error, style=light
    "state=default|size=xs|theme=error|style2=light": __body49,
    // figma: state=focused, size=xsmall, theme=primary, style=fill
    "state=focused|size=xs|theme=primary|style2=fill": __body50,
    // figma: state=focused, size=xsmall, theme=secondary, style=fill
    "state=focused|size=xs|theme=secondary|style2=fill": __body51,
    // figma: state=focused, size=xsmall, theme=error, style=fill
    "state=focused|size=xs|theme=error|style2=fill": __body52,
    // figma: state=focused, size=xsmall, theme=primary, style=line
    "state=focused|size=xs|theme=primary|style2=line": __body53,
    // figma: state=focused, size=xsmall, theme=secondary, style=line
    "state=focused|size=xs|theme=secondary|style2=line": __body54,
    // figma: state=focused, size=xsmall, theme=ghost, style=line
    "state=focused|size=xs|theme=ghost|style2=line": __body55,
    // figma: state=focused, size=xsmall, theme=error, style=line
    "state=focused|size=xs|theme=error|style2=line": __body56,
    // figma: state=focused, size=xsmall, theme=primary, style=light
    "state=focused|size=xs|theme=primary|style2=light": __body57,
    // figma: state=focused, size=xsmall, theme=secondary, style=light
    "state=focused|size=xs|theme=secondary|style2=light": __body58,
    // figma: state=focused, size=xsmall, theme=error, style=light
    "state=focused|size=xs|theme=error|style2=light": __body59,
    // figma: state=action, size=xsmall, theme=primary, style=fill
    "state=action|size=xs|theme=primary|style2=fill": __body60,
    // figma: state=action, size=xsmall, theme=secondary, style=fill
    "state=action|size=xs|theme=secondary|style2=fill": __body61,
    // figma: state=action, size=xsmall, theme=error, style=fill
    "state=action|size=xs|theme=error|style2=fill": __body62,
    // figma: state=action, size=xsmall, theme=primary, style=line
    "state=action|size=xs|theme=primary|style2=line": __body63,
    // figma: state=action, size=xsmall, theme=secondary, style=line
    "state=action|size=xs|theme=secondary|style2=line": __body64,
    // figma: state=action, size=xsmall, theme=ghost, style=line
    "state=action|size=xs|theme=ghost|style2=line": __body65,
    // figma: state=action, size=xsmall, theme=error, style=line
    "state=action|size=xs|theme=error|style2=line": __body66,
    // figma: state=action, size=xsmall, theme=primary, style=light
    "state=action|size=xs|theme=primary|style2=light": __body67,
    // figma: state=action, size=xsmall, theme=secondary, style=light
    "state=action|size=xs|theme=secondary|style2=light": __body68,
    // figma: state=action, size=xsmall, theme=error, style=light
    "state=action|size=xs|theme=error|style2=light": __body69,
    // figma: state=disabled, size=xsmall, theme=primary, style=fill
    "state=disabled|size=xs|theme=primary|style2=fill": __body70,
    // figma: state=disabled, size=xsmall, theme=secondary, style=fill
    "state=disabled|size=xs|theme=secondary|style2=fill": __body71,
    // figma: state=disabled, size=xsmall, theme=error, style=fill
    "state=disabled|size=xs|theme=error|style2=fill": __body72,
    // figma: state=disabled, size=xsmall, theme=primary, style=line
    "state=disabled|size=xs|theme=primary|style2=line": __body73,
    // figma: state=disabled, size=xsmall, theme=secondary, style=line
    "state=disabled|size=xs|theme=secondary|style2=line": __body74,
    // figma: state=disabled, size=xsmall, theme=ghost, style=line
    "state=disabled|size=xs|theme=ghost|style2=line": __body75,
    // figma: state=disabled, size=xsmall, theme=error, style=line
    "state=disabled|size=xs|theme=error|style2=line": __body76,
    // figma: state=disabled, size=xsmall, theme=primary, style=light
    "state=disabled|size=xs|theme=primary|style2=light": __body77,
    // figma: state=disabled, size=xsmall, theme=secondary, style=light
    "state=disabled|size=xs|theme=secondary|style2=light": __body78,
    // figma: state=disabled, size=xsmall, theme=error, style=light
    "state=disabled|size=xs|theme=error|style2=light": __body79,
    // figma: state=focused, size=large, theme=primary, style=fill
    "state=focused|size=lg|theme=primary|style2=fill": __body80,
    // figma: state=focused, size=large, theme=secondary, style=fill
    "state=focused|size=lg|theme=secondary|style2=fill": __body81,
    // figma: state=focused, size=large, theme=error, style=fill
    "state=focused|size=lg|theme=error|style2=fill": __body82,
    // figma: state=focused, size=large, theme=primary, style=line
    "state=focused|size=lg|theme=primary|style2=line": __body83,
    // figma: state=focused, size=large, theme=secondary, style=line
    "state=focused|size=lg|theme=secondary|style2=line": __body84,
    // figma: state=focused, size=large, theme=ghost, style=line
    "state=focused|size=lg|theme=ghost|style2=line": __body85,
    // figma: state=focused, size=large, theme=error, style=line
    "state=focused|size=lg|theme=error|style2=line": __body86,
    // figma: state=focused, size=large, theme=primary, style=light
    "state=focused|size=lg|theme=primary|style2=light": __body87,
    // figma: state=focused, size=large, theme=secondary, style=light
    "state=focused|size=lg|theme=secondary|style2=light": __body88,
    // figma: state=focused, size=large, theme=error, style=light
    "state=focused|size=lg|theme=error|style2=light": __body89,
    // figma: state=default, size=large, theme=primary, style=fill
    "state=default|size=lg|theme=primary|style2=fill": __body90,
    // figma: state=default, size=large, theme=secondary, style=fill
    "state=default|size=lg|theme=secondary|style2=fill": __body91,
    // figma: state=default, size=large, theme=error, style=fill
    "state=default|size=lg|theme=error|style2=fill": __body92,
    // figma: state=default, size=large, theme=primary, style=line
    "state=default|size=lg|theme=primary|style2=line": __body93,
    // figma: state=default, size=large, theme=secondary, style=line
    "state=default|size=lg|theme=secondary|style2=line": __body94,
    // figma: state=default, size=large, theme=ghost, style=line
    "state=default|size=lg|theme=ghost|style2=line": __body95,
    // figma: state=default, size=large, theme=error, style=line
    "state=default|size=lg|theme=error|style2=line": __body96,
    // figma: state=default, size=large, theme=primary, style=light
    "state=default|size=lg|theme=primary|style2=light": __body97,
    // figma: state=default, size=large, theme=secondary, style=light
    "state=default|size=lg|theme=secondary|style2=light": __body98,
    // figma: state=default, size=large, theme=error, style=light
    "state=default|size=lg|theme=error|style2=light": __body99,
    // figma: state=action, size=large, theme=primary, style=fill
    "state=action|size=lg|theme=primary|style2=fill": __body100,
    // figma: state=action, size=large, theme=secondary, style=fill
    "state=action|size=lg|theme=secondary|style2=fill": __body101,
    // figma: state=action, size=large, theme=error, style=fill
    "state=action|size=lg|theme=error|style2=fill": __body102,
    // figma: state=action, size=large, theme=primary, style=line
    "state=action|size=lg|theme=primary|style2=line": __body103,
    // figma: state=action, size=large, theme=secondary, style=line
    "state=action|size=lg|theme=secondary|style2=line": __body104,
    // figma: state=action, size=large, theme=ghost, style=line
    "state=action|size=lg|theme=ghost|style2=line": __body105,
    // figma: state=action, size=large, theme=error, style=line
    "state=action|size=lg|theme=error|style2=line": __body106,
    // figma: state=action, size=large, theme=primary, style=light
    "state=action|size=lg|theme=primary|style2=light": __body107,
    // figma: state=action, size=large, theme=secondary, style=light
    "state=action|size=lg|theme=secondary|style2=light": __body108,
    // figma: state=action, size=large, theme=error, style=light
    "state=action|size=lg|theme=error|style2=light": __body109,
    // figma: state=focused, size=xlarge, theme=primary, style=fill
    "state=focused|size=xl|theme=primary|style2=fill": __body110,
    // figma: state=focused, size=xlarge, theme=secondary, style=fill
    "state=focused|size=xl|theme=secondary|style2=fill": __body111,
    // figma: state=focused, size=xlarge, theme=error, style=fill
    "state=focused|size=xl|theme=error|style2=fill": __body112,
    // figma: state=focused, size=xlarge, theme=primary, style=line
    "state=focused|size=xl|theme=primary|style2=line": __body113,
    // figma: state=focused, size=xlarge, theme=secondary, style=line
    "state=focused|size=xl|theme=secondary|style2=line": __body114,
    // figma: state=focused, size=xlarge, theme=ghost, style=line
    "state=focused|size=xl|theme=ghost|style2=line": __body115,
    // figma: state=focused, size=xlarge, theme=error, style=line
    "state=focused|size=xl|theme=error|style2=line": __body116,
    // figma: state=focused, size=xlarge, theme=primary, style=light
    "state=focused|size=xl|theme=primary|style2=light": __body117,
    // figma: state=focused, size=xlarge, theme=secondary, style=light
    "state=focused|size=xl|theme=secondary|style2=light": __body118,
    // figma: state=focused, size=xlarge, theme=error, style=light
    "state=focused|size=xl|theme=error|style2=light": __body119,
    // figma: state=disabled, size=large, theme=primary, style=fill
    "state=disabled|size=lg|theme=primary|style2=fill": __body120,
    // figma: state=disabled, size=large, theme=secondary, style=fill
    "state=disabled|size=lg|theme=secondary|style2=fill": __body121,
    // figma: state=disabled, size=large, theme=error, style=fill
    "state=disabled|size=lg|theme=error|style2=fill": __body122,
    // figma: state=disabled, size=large, theme=primary, style=line
    "state=disabled|size=lg|theme=primary|style2=line": __body123,
    // figma: state=disabled, size=large, theme=secondary, style=line
    "state=disabled|size=lg|theme=secondary|style2=line": __body124,
    // figma: state=disabled, size=large, theme=ghost, style=line
    "state=disabled|size=lg|theme=ghost|style2=line": __body125,
    // figma: state=disabled, size=large, theme=error, style=line
    "state=disabled|size=lg|theme=error|style2=line": __body126,
    // figma: state=disabled, size=large, theme=primary, style=light
    "state=disabled|size=lg|theme=primary|style2=light": __body127,
    // figma: state=disabled, size=large, theme=secondary, style=light
    "state=disabled|size=lg|theme=secondary|style2=light": __body128,
    // figma: state=disabled, size=large, theme=error, style=light
    "state=disabled|size=lg|theme=error|style2=light": __body129,
    // figma: state=default, size=xlarge, theme=primary, style=fill
    "state=default|size=xl|theme=primary|style2=fill": __body130,
    // figma: state=default, size=xlarge, theme=secondary, style=fill
    "state=default|size=xl|theme=secondary|style2=fill": __body131,
    // figma: state=default, size=xlarge, theme=error, style=fill
    "state=default|size=xl|theme=error|style2=fill": __body132,
    // figma: state=default, size=xlarge, theme=primary, style=line
    "state=default|size=xl|theme=primary|style2=line": __body133,
    // figma: state=default, size=xlarge, theme=secondary, style=line
    "state=default|size=xl|theme=secondary|style2=line": __body134,
    // figma: state=default, size=xlarge, theme=ghost, style=line
    "state=default|size=xl|theme=ghost|style2=line": __body135,
    // figma: state=default, size=xlarge, theme=error, style=line
    "state=default|size=xl|theme=error|style2=line": __body136,
    // figma: state=default, size=xlarge, theme=primary, style=light
    "state=default|size=xl|theme=primary|style2=light": __body137,
    // figma: state=default, size=xlarge, theme=secondary, style=light
    "state=default|size=xl|theme=secondary|style2=light": __body138,
    // figma: state=default, size=xlarge, theme=error, style=light
    "state=default|size=xl|theme=error|style2=light": __body139,
    // figma: state=focused, size=medium, theme=primary, style=fill
    "state=focused|size=md|theme=primary|style2=fill": __body140,
    // figma: state=focused, size=medium, theme=secondary, style=fill
    "state=focused|size=md|theme=secondary|style2=fill": __body141,
    // figma: state=focused, size=medium, theme=error, style=fill
    "state=focused|size=md|theme=error|style2=fill": __body142,
    // figma: state=focused, size=medium, theme=primary, style=line
    "state=focused|size=md|theme=primary|style2=line": __body143,
    // figma: state=focused, size=medium, theme=secondary, style=line
    "state=focused|size=md|theme=secondary|style2=line": __body144,
    // figma: state=focused, size=medium, theme=ghost, style=line
    "state=focused|size=md|theme=ghost|style2=line": __body145,
    // figma: state=focused, size=medium, theme=error, style=line
    "state=focused|size=md|theme=error|style2=line": __body146,
    // figma: state=focused, size=medium, theme=primary, style=light
    "state=focused|size=md|theme=primary|style2=light": __body147,
    // figma: state=focused, size=medium, theme=secondary, style=light
    "state=focused|size=md|theme=secondary|style2=light": __body148,
    // figma: state=focused, size=medium, theme=error, style=light
    "state=focused|size=md|theme=error|style2=light": __body149,
    // figma: state=action, size=xlarge, theme=primary, style=fill
    "state=action|size=xl|theme=primary|style2=fill": __body150,
    // figma: state=action, size=xlarge, theme=secondary, style=fill
    "state=action|size=xl|theme=secondary|style2=fill": __body151,
    // figma: state=action, size=xlarge, theme=error, style=fill
    "state=action|size=xl|theme=error|style2=fill": __body152,
    // figma: state=action, size=xlarge, theme=primary, style=line
    "state=action|size=xl|theme=primary|style2=line": __body153,
    // figma: state=action, size=xlarge, theme=secondary, style=line
    "state=action|size=xl|theme=secondary|style2=line": __body154,
    // figma: state=action, size=xlarge, theme=ghost, style=line
    "state=action|size=xl|theme=ghost|style2=line": __body155,
    // figma: state=action, size=xlarge, theme=error, style=line
    "state=action|size=xl|theme=error|style2=line": __body156,
    // figma: state=action, size=xlarge, theme=primary, style=light
    "state=action|size=xl|theme=primary|style2=light": __body157,
    // figma: state=action, size=xlarge, theme=secondary, style=light
    "state=action|size=xl|theme=secondary|style2=light": __body158,
    // figma: state=action, size=xlarge, theme=error, style=light
    "state=action|size=xl|theme=error|style2=light": __body159,
    // figma: state=disabled, size=xlarge, theme=primary, style=fill
    "state=disabled|size=xl|theme=primary|style2=fill": __body160,
    // figma: state=disabled, size=xlarge, theme=secondary, style=fill
    "state=disabled|size=xl|theme=secondary|style2=fill": __body161,
    // figma: state=disabled, size=xlarge, theme=error, style=fill
    "state=disabled|size=xl|theme=error|style2=fill": __body162,
    // figma: state=disabled, size=xlarge, theme=primary, style=line
    "state=disabled|size=xl|theme=primary|style2=line": __body163,
    // figma: state=disabled, size=xlarge, theme=secondary, style=line
    "state=disabled|size=xl|theme=secondary|style2=line": __body164,
    // figma: state=disabled, size=xlarge, theme=ghost, style=line
    "state=disabled|size=xl|theme=ghost|style2=line": __body165,
    // figma: state=disabled, size=xlarge, theme=error, style=line
    "state=disabled|size=xl|theme=error|style2=line": __body166,
    // figma: state=disabled, size=xlarge, theme=primary, style=light
    "state=disabled|size=xl|theme=primary|style2=light": __body167,
    // figma: state=disabled, size=xlarge, theme=secondary, style=light
    "state=disabled|size=xl|theme=secondary|style2=light": __body168,
    // figma: state=disabled, size=xlarge, theme=error, style=light
    "state=disabled|size=xl|theme=error|style2=light": __body169,
    // figma: state=default, size=medium, theme=primary, style=fill
    "state=default|size=md|theme=primary|style2=fill": __body170,
    // figma: state=default, size=medium, theme=secondary, style=fill
    "state=default|size=md|theme=secondary|style2=fill": __body171,
    // figma: state=default, size=medium, theme=error, style=fill
    "state=default|size=md|theme=error|style2=fill": __body172,
    // figma: state=default, size=medium, theme=primary, style=line
    "state=default|size=md|theme=primary|style2=line": __body173,
    // figma: state=default, size=medium, theme=secondary, style=line
    "state=default|size=md|theme=secondary|style2=line": __body174,
    // figma: state=default, size=medium, theme=ghost, style=line
    "state=default|size=md|theme=ghost|style2=line": __body175,
    // figma: state=default, size=medium, theme=error, style=line
    "state=default|size=md|theme=error|style2=line": __body176,
    // figma: state=default, size=medium, theme=primary, style=light
    "state=default|size=md|theme=primary|style2=light": __body177,
    // figma: state=default, size=medium, theme=secondary, style=light
    "state=default|size=md|theme=secondary|style2=light": __body178,
    // figma: state=default, size=medium, theme=error, style=light
    "state=default|size=md|theme=error|style2=light": __body179,
    // figma: state=action, size=medium, theme=primary, style=fill
    "state=action|size=md|theme=primary|style2=fill": __body180,
    // figma: state=action, size=medium, theme=secondary, style=fill
    "state=action|size=md|theme=secondary|style2=fill": __body181,
    // figma: state=action, size=medium, theme=error, style=fill
    "state=action|size=md|theme=error|style2=fill": __body182,
    // figma: state=action, size=medium, theme=primary, style=line
    "state=action|size=md|theme=primary|style2=line": __body183,
    // figma: state=action, size=medium, theme=secondary, style=line
    "state=action|size=md|theme=secondary|style2=line": __body184,
    // figma: state=action, size=medium, theme=ghost, style=line
    "state=action|size=md|theme=ghost|style2=line": __body185,
    // figma: state=action, size=medium, theme=error, style=line
    "state=action|size=md|theme=error|style2=line": __body186,
    // figma: state=action, size=medium, theme=primary, style=light
    "state=action|size=md|theme=primary|style2=light": __body187,
    // figma: state=action, size=medium, theme=secondary, style=light
    "state=action|size=md|theme=secondary|style2=light": __body188,
    // figma: state=action, size=medium, theme=error, style=light
    "state=action|size=md|theme=error|style2=light": __body189,
    // figma: state=disabled, size=medium, theme=primary, style=fill
    "state=disabled|size=md|theme=primary|style2=fill": __body190,
    // figma: state=disabled, size=medium, theme=secondary, style=fill
    "state=disabled|size=md|theme=secondary|style2=fill": __body191,
    // figma: state=disabled, size=medium, theme=error, style=fill
    "state=disabled|size=md|theme=error|style2=fill": __body192,
    // figma: state=disabled, size=medium, theme=primary, style=line
    "state=disabled|size=md|theme=primary|style2=line": __body193,
    // figma: state=disabled, size=medium, theme=secondary, style=line
    "state=disabled|size=md|theme=secondary|style2=line": __body194,
    // figma: state=disabled, size=medium, theme=ghost, style=line
    "state=disabled|size=md|theme=ghost|style2=line": __body195,
    // figma: state=disabled, size=medium, theme=error, style=line
    "state=disabled|size=md|theme=error|style2=line": __body196,
    // figma: state=disabled, size=medium, theme=primary, style=light
    "state=disabled|size=md|theme=primary|style2=light": __body197,
    // figma: state=disabled, size=medium, theme=secondary, style=light
    "state=disabled|size=md|theme=secondary|style2=light": __body198,
    // figma: state=disabled, size=medium, theme=error, style=light
    "state=disabled|size=md|theme=error|style2=light": __body199,
  };
  return (__impls[__vkey(props)] ?? __body40)();
}
export default Button;
