import { BodyTable } from './BodyTable.jsx';
import { IconIcCheck } from './IconIcCheck.jsx';

// figma node: 1516:4765 Column (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Column(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1070,
      height: 57,
      position: "relative",
      ...props.style,
    }}>
      <BodyTable
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1070,
          height: 56,
        }}
        state={"default"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 56,
        width: 1070,
        height: 1,
        backgroundColor: "rgb(245,245,245)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1070,
      height: 57,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1070,
        height: 56,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 56,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 16px 0px 16px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            borderRadius: 4,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 16,
              height: 16,
              backgroundColor: "rgb(189,189,189)",
            }} />
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 16,
                height: 16,
              }}>
              <IconIcCheck style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>바디 텍스트</span>
          <div style={{
            position: "relative",
            borderRadius: 4,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "8px 8px 8px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 14,
              height: 14,
              flexShrink: 0,
            }}>
              <svg width={11.662} height={11.662} viewBox="0 0 11.662 11.662" fill="none" style={{
                position: "absolute",
                left: 1.368,
                top: 1.262,
                width: 11.662,
                height: 11.662,
                color: "var(--gray-900)",
              }}>
                <path d={"M 9.439 6.049 L 4.343 11.146 C 4.172 11.317 3.946 11.421 3.706 11.441 L 1.106 11.658 C 0.477 11.71 -0.049 11.185 0.004 10.556 L 0.22 7.956 C 0.24 7.715 0.345 7.489 0.516 7.319 L 7.536 0.299 C 7.934 -0.1 8.581 -0.1 8.979 0.299 L 11.363 2.682 C 11.761 3.081 11.761 3.727 11.363 4.126 L 9.444 6.045 L 9.442 6.047 L 9.439 6.049 Z M 8.154 0.918 C 8.211 0.861 8.304 0.861 8.36 0.918 L 10.744 3.301 C 10.801 3.358 10.801 3.45 10.744 3.507 L 9.132 5.119 L 6.543 2.529 L 8.154 0.918 Z M 5.924 3.148 L 1.134 7.937 C 1.11 7.962 1.095 7.994 1.092 8.028 L 0.876 10.629 C 0.868 10.718 0.943 10.793 1.033 10.786 L 3.633 10.569 C 3.667 10.566 3.7 10.551 3.724 10.527 L 8.514 5.738 L 5.924 3.148 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>바디 텍스트</span>
          <div style={{
            position: "relative",
            borderRadius: 4,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "8px 8px 8px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 14,
              height: 14,
              flexShrink: 0,
            }}>
              <svg width={11.662} height={11.662} viewBox="0 0 11.662 11.662" fill="none" style={{
                position: "absolute",
                left: 1.368,
                top: 1.262,
                width: 11.662,
                height: 11.662,
                color: "var(--gray-900)",
              }}>
                <path d={"M 9.439 6.049 L 4.343 11.146 C 4.172 11.317 3.946 11.421 3.706 11.441 L 1.106 11.658 C 0.477 11.71 -0.049 11.185 0.004 10.556 L 0.22 7.956 C 0.24 7.715 0.345 7.489 0.516 7.319 L 7.536 0.299 C 7.934 -0.1 8.581 -0.1 8.979 0.299 L 11.363 2.682 C 11.761 3.081 11.761 3.727 11.363 4.126 L 9.444 6.045 L 9.442 6.047 L 9.439 6.049 Z M 8.154 0.918 C 8.211 0.861 8.304 0.861 8.36 0.918 L 10.744 3.301 C 10.801 3.358 10.801 3.45 10.744 3.507 L 9.132 5.119 L 6.543 2.529 L 8.154 0.918 Z M 5.924 3.148 L 1.134 7.937 C 1.11 7.962 1.095 7.994 1.092 8.028 L 0.876 10.629 C 0.868 10.718 0.943 10.793 1.033 10.786 L 3.633 10.569 C 3.667 10.566 3.7 10.551 3.724 10.527 L 8.514 5.738 L 5.924 3.148 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>바디 텍스트</span>
          <div style={{
            position: "relative",
            borderRadius: 4,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "8px 8px 8px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 14,
              height: 14,
              flexShrink: 0,
            }}>
              <svg width={11.662} height={11.662} viewBox="0 0 11.662 11.662" fill="none" style={{
                position: "absolute",
                left: 1.368,
                top: 1.262,
                width: 11.662,
                height: 11.662,
                color: "var(--gray-900)",
              }}>
                <path d={"M 9.439 6.049 L 4.343 11.146 C 4.172 11.317 3.946 11.421 3.706 11.441 L 1.106 11.658 C 0.477 11.71 -0.049 11.185 0.004 10.556 L 0.22 7.956 C 0.24 7.715 0.345 7.489 0.516 7.319 L 7.536 0.299 C 7.934 -0.1 8.581 -0.1 8.979 0.299 L 11.363 2.682 C 11.761 3.081 11.761 3.727 11.363 4.126 L 9.444 6.045 L 9.442 6.047 L 9.439 6.049 Z M 8.154 0.918 C 8.211 0.861 8.304 0.861 8.36 0.918 L 10.744 3.301 C 10.801 3.358 10.801 3.45 10.744 3.507 L 9.132 5.119 L 6.543 2.529 L 8.154 0.918 Z M 5.924 3.148 L 1.134 7.937 C 1.11 7.962 1.095 7.994 1.092 8.028 L 0.876 10.629 C 0.868 10.718 0.943 10.793 1.033 10.786 L 3.633 10.569 C 3.667 10.566 3.7 10.551 3.724 10.527 L 8.514 5.738 L 5.924 3.148 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>바디 텍스트</span>
          <div style={{
            position: "relative",
            borderRadius: 4,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "8px 8px 8px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 14,
              height: 14,
              flexShrink: 0,
            }}>
              <svg width={11.662} height={11.662} viewBox="0 0 11.662 11.662" fill="none" style={{
                position: "absolute",
                left: 1.368,
                top: 1.262,
                width: 11.662,
                height: 11.662,
                color: "var(--gray-900)",
              }}>
                <path d={"M 9.439 6.049 L 4.343 11.146 C 4.172 11.317 3.946 11.421 3.706 11.441 L 1.106 11.658 C 0.477 11.71 -0.049 11.185 0.004 10.556 L 0.22 7.956 C 0.24 7.715 0.345 7.489 0.516 7.319 L 7.536 0.299 C 7.934 -0.1 8.581 -0.1 8.979 0.299 L 11.363 2.682 C 11.761 3.081 11.761 3.727 11.363 4.126 L 9.444 6.045 L 9.442 6.047 L 9.439 6.049 Z M 8.154 0.918 C 8.211 0.861 8.304 0.861 8.36 0.918 L 10.744 3.301 C 10.801 3.358 10.801 3.45 10.744 3.507 L 9.132 5.119 L 6.543 2.529 L 8.154 0.918 Z M 5.924 3.148 L 1.134 7.937 C 1.11 7.962 1.095 7.994 1.092 8.028 L 0.876 10.629 C 0.868 10.718 0.943 10.793 1.033 10.786 L 3.633 10.569 C 3.667 10.566 3.7 10.551 3.724 10.527 L 8.514 5.738 L 5.924 3.148 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>바디 텍스트</span>
          <div style={{
            position: "relative",
            borderRadius: 4,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "8px 8px 8px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 14,
              height: 14,
              flexShrink: 0,
            }}>
              <svg width={11.662} height={11.662} viewBox="0 0 11.662 11.662" fill="none" style={{
                position: "absolute",
                left: 1.368,
                top: 1.262,
                width: 11.662,
                height: 11.662,
                color: "var(--gray-900)",
              }}>
                <path d={"M 9.439 6.049 L 4.343 11.146 C 4.172 11.317 3.946 11.421 3.706 11.441 L 1.106 11.658 C 0.477 11.71 -0.049 11.185 0.004 10.556 L 0.22 7.956 C 0.24 7.715 0.345 7.489 0.516 7.319 L 7.536 0.299 C 7.934 -0.1 8.581 -0.1 8.979 0.299 L 11.363 2.682 C 11.761 3.081 11.761 3.727 11.363 4.126 L 9.444 6.045 L 9.442 6.047 L 9.439 6.049 Z M 8.154 0.918 C 8.211 0.861 8.304 0.861 8.36 0.918 L 10.744 3.301 C 10.801 3.358 10.801 3.45 10.744 3.507 L 9.132 5.119 L 6.543 2.529 L 8.154 0.918 Z M 5.924 3.148 L 1.134 7.937 C 1.11 7.962 1.095 7.994 1.092 8.028 L 0.876 10.629 C 0.868 10.718 0.943 10.793 1.033 10.786 L 3.633 10.569 C 3.667 10.566 3.7 10.551 3.724 10.527 L 8.514 5.738 L 5.924 3.148 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 56,
        width: 1070,
        height: 1,
        backgroundColor: "rgb(245,245,245)",
      }} />
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Hover/Pressed
    "state=hover/pressed": __body0,
    // figma: State=Select
    "state=select": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Column;
