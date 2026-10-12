import { ItemGoal } from './ItemGoal.jsx';
import { OCLogoFin } from './OCLogoFin.jsx';

// figma node: 10781:992 header (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Header(_p = {}) {
  const props = { ..._p, type: _p.type ?? "취업/자격증" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1194,
      backgroundColor: "var(--white)",
      borderTop: "1px solid var(--slate-50-2)",
      borderRight: "1px solid var(--slate-50-2)",
      borderBottom: "1px solid var(--slate-50-2)",
      borderLeft: "1px solid var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 24px 8px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 68.4,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <OCLogoFin />}</div>
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
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <ItemGoal
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            type={"취업/자격증"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
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
            }}>{props.text1 ?? "🥰"}</span>
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
            }}>{props.text2 ?? "홍길동 화이팅!"}</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 42,
          borderRadius: 6,
          backgroundColor: "var(--slate-10)",
          boxShadow: "inset 0 0 0 1px var(--slate-100-3)",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "3px 6px 3px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>
            <svg width={9.687} height={9.275} viewBox="0 0 9.687 9.275" fill="none" style={{
              position: "absolute",
              left: 1.156,
              top: 0.94,
              width: 9.687,
              height: 9.275,
              color: "var(--gray-600)",
            }}>
              <path d={"M 4.283 0.348 C 4.513 -0.116 5.175 -0.116 5.404 0.348 L 6.562 2.695 L 9.152 3.071 C 9.664 3.146 9.869 3.776 9.498 4.137 L 7.624 5.964 L 8.067 8.543 C 8.154 9.053 7.618 9.442 7.16 9.201 L 4.844 7.984 L 2.528 9.201 C 2.069 9.442 1.533 9.053 1.621 8.543 L 2.063 5.964 L 0.189 4.137 C -0.182 3.776 0.023 3.146 0.536 3.071 L 3.125 2.695 L 4.283 0.348 Z M 4.844 0.907 L 3.769 3.086 C 3.678 3.27 3.502 3.398 3.298 3.428 L 0.894 3.777 L 2.634 5.472 C 2.781 5.616 2.848 5.823 2.813 6.026 L 2.403 8.42 L 4.553 7.289 C 4.735 7.194 4.952 7.194 5.135 7.289 L 7.285 8.42 L 6.874 6.026 C 6.839 5.823 6.906 5.616 7.054 5.472 L 8.793 3.777 L 6.389 3.428 C 6.186 3.398 6.01 3.27 5.919 3.086 L 4.844 0.907 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "var(--slate-400)",
            flexShrink: 0,
          }}>D-300</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1194,
      backgroundColor: "var(--white)",
      borderTop: "1px solid var(--slate-50-2)",
      borderRight: "1px solid var(--slate-50-2)",
      borderBottom: "1px solid var(--slate-50-2)",
      borderLeft: "1px solid var(--slate-50-2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 24px 8px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 68.4,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <OCLogoFin />}</div>
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
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <ItemGoal
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            type={"초/중/고/n수"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
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
            }}>{props.text1 ?? "🥰"}</span>
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
            }}>{props.text2 ?? "홍길동 화이팅!"}</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 42,
          borderRadius: 6,
          backgroundColor: "var(--slate-10)",
          boxShadow: "inset 0 0 0 1px var(--slate-100-3)",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "3px 6px 3px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>
            <svg width={9.687} height={9.275} viewBox="0 0 9.687 9.275" fill="none" style={{
              position: "absolute",
              left: 1.156,
              top: 0.94,
              width: 9.687,
              height: 9.275,
              color: "var(--gray-600)",
            }}>
              <path d={"M 4.283 0.348 C 4.513 -0.116 5.175 -0.116 5.404 0.348 L 6.562 2.695 L 9.152 3.071 C 9.664 3.146 9.869 3.776 9.498 4.137 L 7.624 5.964 L 8.067 8.543 C 8.154 9.053 7.618 9.442 7.16 9.201 L 4.844 7.984 L 2.528 9.201 C 2.069 9.442 1.533 9.053 1.621 8.543 L 2.063 5.964 L 0.189 4.137 C -0.182 3.776 0.023 3.146 0.536 3.071 L 3.125 2.695 L 4.283 0.348 Z M 4.844 0.907 L 3.769 3.086 C 3.678 3.27 3.502 3.398 3.298 3.428 L 0.894 3.777 L 2.634 5.472 C 2.781 5.616 2.848 5.823 2.813 6.026 L 2.403 8.42 L 4.553 7.289 C 4.735 7.194 4.952 7.194 5.135 7.289 L 7.285 8.42 L 6.874 6.026 C 6.839 5.823 6.906 5.616 7.054 5.472 L 8.793 3.777 L 6.389 3.428 C 6.186 3.398 6.01 3.27 5.919 3.086 L 4.844 0.907 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "var(--slate-400)",
            flexShrink: 0,
          }}>D-300</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: type=취업/자격증
    "type=취업/자격증": __body0,
    // figma: type=초/중/고/N수
    "type=초/중/고/n수": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Header;
