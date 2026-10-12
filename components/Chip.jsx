import { Prefixes } from './Prefixes.jsx';
import { Suffixes } from './Suffixes.jsx';

// figma node: 7115:892 chip (60 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state);

export function Chip(_p = {}) {
  const props = { ..._p, prefixes: _p.prefixes ?? true, type: _p.type ?? "fill", size: _p.size ?? "sm", state: _p.state ?? "default", suffixes: _p.suffixes ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--slate-800-3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--slate-800-3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--gray-50)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--white)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--white)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-25)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--blue-500)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--blue-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--blue-500)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-600)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--white)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--white)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--slate-200-2)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-50-2)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--blue-500)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--blue-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--blue-500)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--gray-200)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-200)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--gray-200)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--slate-200-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--gray-200)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-200)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--gray-200)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} />}</div>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--slate-800-3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} />}</div>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} />}</div>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--slate-800-3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--gray-50)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} />}</div>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--white)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--white)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-25)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--blue-500)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--blue-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--blue-500)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-600)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--white)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--white)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--slate-200-2)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-50-2)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--blue-500)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--blue-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--blue-500)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--gray-200)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-200)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--gray-200)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--slate-200-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 12,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={8.750} height={8.750} viewBox="0 0 8.750 8.750" fill="none" style={{
            position: "absolute",
            left: 1.625,
            top: 1.625,
            width: 8.75,
            height: 8.75,
            color: "var(--gray-200)",
          }}>
            <path d={"M 4.75 0.375 C 4.75 0.168 4.582 0 4.375 0 C 4.168 0 4 0.168 4 0.375 L 4 4 L 0.375 4 C 0.168 4 0 4.168 0 4.375 C 0 4.582 0.168 4.75 0.375 4.75 L 4 4.75 L 4 8.375 C 4 8.582 4.168 8.75 4.375 8.75 C 4.582 8.75 4.75 8.582 4.75 8.375 L 4.75 4.75 L 8.375 4.75 C 8.582 4.75 8.75 4.582 8.75 4.375 C 8.75 4.168 8.582 4 8.375 4 L 4.75 4 L 4.75 0.375 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-200)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
        }}>
          <svg width={7.750} height={7.750} viewBox="0 0 7.750 7.750" fill="none" style={{
            position: "absolute",
            left: 2.125,
            top: 2.125,
            width: 7.75,
            height: 7.75,
            color: "var(--gray-200)",
          }}>
            <path d={"M 7.64 0.64 C 7.787 0.494 7.787 0.256 7.64 0.11 C 7.494 -0.037 7.256 -0.037 7.11 0.11 L 3.875 3.345 L 0.64 0.11 C 0.494 -0.037 0.256 -0.037 0.11 0.11 C -0.037 0.256 -0.037 0.494 0.11 0.64 L 3.345 3.875 L 0.11 7.11 C -0.037 7.256 -0.037 7.494 0.11 7.64 C 0.256 7.787 0.494 7.787 0.64 7.64 L 3.875 4.405 L 7.11 7.64 C 7.256 7.787 7.494 7.787 7.64 7.64 C 7.787 7.494 7.787 7.256 7.64 7.11 L 4.405 3.875 L 7.64 0.64 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--slate-800-3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--slate-800-3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      boxShadow: "inset 0 0 0 1px var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
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
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--slate-800-3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--slate-800-3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--slate-800-3)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--gray-50)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--gray-50)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon1 ?? <Prefixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-900)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon2 ?? <Suffixes type={"icon-line"} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--slate-100-3)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-25)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--blue-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-25)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--blue-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-600)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-600)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--white)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--slate-200-2)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--slate-200-2)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--slate-900-2)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-50-2)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--blue-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--blue-50-2)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--blue-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--blue-500)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
            color: "var(--gray-200)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-200)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--gray-200)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
            color: "var(--gray-200)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-200)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--gray-200)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--slate-200-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--slate-200-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--slate-200-2)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
            color: "var(--gray-200)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-200)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--gray-200)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
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
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prefixes && (
      <div style={{
        position: "relative",
        width: 14,
        height: 14,
        borderRadius: 4,
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
            color: "var(--gray-200)",
          }}>
            <path d={"M 5.542 0.438 C 5.542 0.196 5.346 0 5.104 0 C 4.863 0 4.667 0.196 4.667 0.438 L 4.667 4.667 L 0.438 4.667 C 0.196 4.667 0 4.863 0 5.104 C 0 5.346 0.196 5.542 0.438 5.542 L 4.667 5.542 L 4.667 9.771 C 4.667 10.012 4.863 10.208 5.104 10.208 C 5.346 10.208 5.542 10.012 5.542 9.771 L 5.542 5.542 L 9.771 5.542 C 10.012 5.542 10.208 5.346 10.208 5.104 C 10.208 4.863 10.012 4.667 9.771 4.667 L 5.542 4.667 L 5.542 0.438 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-200)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "텍스트영역"}</span>
      {props.suffixes && (
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
          <svg width={9.042} height={9.042} viewBox="0 0 9.042 9.042" fill="none" style={{
            position: "absolute",
            left: 2.479,
            top: 2.479,
            width: 9.042,
            height: 9.042,
            color: "var(--gray-200)",
          }}>
            <path d={"M 8.914 0.747 C 9.084 0.576 9.084 0.299 8.914 0.128 C 8.743 -0.043 8.466 -0.043 8.295 0.128 L 4.521 3.902 L 0.747 0.128 C 0.576 -0.043 0.299 -0.043 0.128 0.128 C -0.043 0.299 -0.043 0.576 0.128 0.747 L 3.902 4.521 L 0.128 8.295 C -0.043 8.466 -0.043 8.743 0.128 8.914 C 0.299 9.084 0.576 9.084 0.747 8.914 L 4.521 5.14 L 8.295 8.914 C 8.466 9.084 8.743 9.084 8.914 8.914 C 9.084 8.743 9.084 8.466 8.914 8.295 L 5.14 4.521 L 8.914 0.747 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: type=fill, size=small, state=default
    "type=fill|size=sm|state=default": __body0,
    // figma: type=ghost, size=small, state=default
    "type=ghost|size=sm|state=default": __body1,
    // figma: type=outline, size=small, state=default
    "type=outline|size=sm|state=default": __body2,
    // figma: type=fill, size=small, state=hover
    "type=fill|size=sm|state=hover": __body3,
    // figma: type=ghost, size=small, state=hover
    "type=ghost|size=sm|state=hover": __body4,
    // figma: type=outline, size=small, state=hover
    "type=outline|size=sm|state=hover": __body5,
    // figma: type=fill, size=small, state=active
    "type=fill|size=sm|state=active": __body6,
    // figma: type=ghost, size=small, state=active
    "type=ghost|size=sm|state=active": __body7,
    // figma: type=outline, size=small, state=active
    "type=outline|size=sm|state=active": __body8,
    // figma: type=fill, size=small, state=active_hover
    "type=fill|size=sm|state=active_hover": __body9,
    // figma: type=ghost, size=small, state=active_hover
    "type=ghost|size=sm|state=active_hover": __body10,
    // figma: type=outline, size=small, state=active_hover
    "type=outline|size=sm|state=active_hover": __body11,
    // figma: type=fill, size=small, state=disabled
    "type=fill|size=sm|state=disabled": __body12,
    // figma: type=ghost, size=small, state=disabled
    "type=ghost|size=sm|state=disabled": __body13,
    // figma: type=outline, size=small, state=disabled
    "type=outline|size=sm|state=disabled": __body14,
    // figma: type=fill, size=medium, state=default
    "type=fill|size=md|state=default": __body15,
    // figma: type=ghost, size=medium, state=default
    "type=ghost|size=md|state=default": __body16,
    // figma: type=outline, size=medium, state=default
    "type=outline|size=md|state=default": __body17,
    // figma: type=fill, size=medium, state=hover
    "type=fill|size=md|state=hover": __body18,
    // figma: type=ghost, size=medium, state=hover
    "type=ghost|size=md|state=hover": __body19,
    // figma: type=outline, size=medium, state=hover
    "type=outline|size=md|state=hover": __body20,
    // figma: type=fill, size=medium, state=active
    "type=fill|size=md|state=active": __body21,
    // figma: type=ghost, size=medium, state=active
    "type=ghost|size=md|state=active": __body22,
    // figma: type=outline, size=medium, state=active
    "type=outline|size=md|state=active": __body23,
    // figma: type=fill, size=medium, state=active_hover
    "type=fill|size=md|state=active_hover": __body24,
    // figma: type=ghost, size=medium, state=active_hover
    "type=ghost|size=md|state=active_hover": __body25,
    // figma: type=outline, size=medium, state=active_hover
    "type=outline|size=md|state=active_hover": __body26,
    // figma: type=fill, size=medium, state=disabled
    "type=fill|size=md|state=disabled": __body27,
    // figma: type=ghost, size=medium, state=disabled
    "type=ghost|size=md|state=disabled": __body28,
    // figma: type=outline, size=medium, state=disabled
    "type=outline|size=md|state=disabled": __body29,
    // figma: type=fill, size=large, state=default
    "type=fill|size=lg|state=default": __body30,
    // figma: type=fill, size=xlarge, state=default
    "type=fill|size=xl|state=default": __body31,
    // figma: type=ghost, size=large, state=default
    "type=ghost|size=lg|state=default": __body32,
    // figma: type=ghost, size=xlarge, state=default
    "type=ghost|size=xl|state=default": __body33,
    // figma: type=outline, size=large, state=default
    "type=outline|size=lg|state=default": __body34,
    // figma: type=outline, size=xlarge, state=default
    "type=outline|size=xl|state=default": __body35,
    // figma: type=fill, size=large, state=hover
    "type=fill|size=lg|state=hover": __body36,
    // figma: type=fill, size=xlarge, state=hover
    "type=fill|size=xl|state=hover": __body37,
    // figma: type=ghost, size=large, state=hover
    "type=ghost|size=lg|state=hover": __body38,
    // figma: type=ghost, size=xlarge, state=hover
    "type=ghost|size=xl|state=hover": __body39,
    // figma: type=outline, size=large, state=hover
    "type=outline|size=lg|state=hover": __body40,
    // figma: type=outline, size=xlarge, state=hover
    "type=outline|size=xl|state=hover": __body41,
    // figma: type=fill, size=large, state=active
    "type=fill|size=lg|state=active": __body42,
    // figma: type=fill, size=xlarge, state=active
    "type=fill|size=xl|state=active": __body43,
    // figma: type=ghost, size=large, state=active
    "type=ghost|size=lg|state=active": __body44,
    // figma: type=ghost, size=xlarge, state=active
    "type=ghost|size=xl|state=active": __body45,
    // figma: type=outline, size=large, state=active
    "type=outline|size=lg|state=active": __body46,
    // figma: type=outline, size=xlarge, state=active
    "type=outline|size=xl|state=active": __body47,
    // figma: type=fill, size=large, state=active_hover
    "type=fill|size=lg|state=active_hover": __body48,
    // figma: type=fill, size=xlarge, state=active_hover
    "type=fill|size=xl|state=active_hover": __body49,
    // figma: type=ghost, size=large, state=active_hover
    "type=ghost|size=lg|state=active_hover": __body50,
    // figma: type=ghost, size=xlarge, state=active_hover
    "type=ghost|size=xl|state=active_hover": __body51,
    // figma: type=outline, size=large, state=active_hover
    "type=outline|size=lg|state=active_hover": __body52,
    // figma: type=outline, size=xlarge, state=active_hover
    "type=outline|size=xl|state=active_hover": __body53,
    // figma: type=fill, size=large, state=disabled
    "type=fill|size=lg|state=disabled": __body54,
    // figma: type=fill, size=xlarge, state=disabled
    "type=fill|size=xl|state=disabled": __body55,
    // figma: type=ghost, size=large, state=disabled
    "type=ghost|size=lg|state=disabled": __body56,
    // figma: type=ghost, size=xlarge, state=disabled
    "type=ghost|size=xl|state=disabled": __body57,
    // figma: type=outline, size=large, state=disabled
    "type=outline|size=lg|state=disabled": __body58,
    // figma: type=outline, size=xlarge, state=disabled
    "type=outline|size=xl|state=disabled": __body59,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Chip;
