// figma node: 730:3164 state_tag (21 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color) + '|' + "size=" + __venc(p.size) + '|' + "dIsabled=" + __venc(p.dIsabled);

export function StateTag(_p = {}) {
  const props = { ..._p, color: _p.color ?? "purple", size: _p.size ?? "sm", dIsabled: _p.dIsabled ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
        position: "relative",
        width: 6,
        height: 6,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--blue-500)",
      }}>
        <path d={"M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
        position: "relative",
        width: 6,
        height: 6,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--purple-500)",
      }}>
        <path d={"M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
        position: "relative",
        width: 6,
        height: 6,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--yellow-500)",
      }}>
        <path d={"M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
        position: "relative",
        width: 6,
        height: 6,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--gray-200)",
      }}>
        <path d={"M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-400)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
        position: "relative",
        width: 6,
        height: 6,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--gray-600)",
      }}>
        <path d={"M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
        position: "relative",
        width: 6,
        height: 6,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--green-500)",
      }}>
        <path d={"M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
        position: "relative",
        width: 6,
        height: 6,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--red-500)",
      }}>
        <path d={"M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 5px 2px 5px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={5} height={5} viewBox="0 0 5 5" fill="none" style={{
        position: "relative",
        width: 5,
        height: 5,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--blue-500)",
      }}>
        <path d={"M 0 2.5 C 0 1.119 1.119 0 2.5 0 L 2.5 0 C 3.881 0 5 1.119 5 2.5 L 5 2.5 C 5 3.881 3.881 5 2.5 5 L 2.5 5 C 1.119 5 0 3.881 0 2.5 L 0 2.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 5px 2px 5px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
        position: "relative",
        width: 6,
        height: 6,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--purple-500)",
      }}>
        <path d={"M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 5px 2px 5px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={5} height={5} viewBox="0 0 5 5" fill="none" style={{
        position: "relative",
        width: 5,
        height: 5,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--yellow-500)",
      }}>
        <path d={"M 0 2.5 C 0 1.119 1.119 0 2.5 0 L 2.5 0 C 3.881 0 5 1.119 5 2.5 L 5 2.5 C 5 3.881 3.881 5 2.5 5 L 2.5 5 C 1.119 5 0 3.881 0 2.5 L 0 2.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 5px 2px 5px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
        position: "relative",
        width: 6,
        height: 6,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--gray-200)",
      }}>
        <path d={"M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-400)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 5px 2px 5px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={5} height={5} viewBox="0 0 5 5" fill="none" style={{
        position: "relative",
        width: 5,
        height: 5,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--gray-600)",
      }}>
        <path d={"M 0 2.5 C 0 1.119 1.119 0 2.5 0 L 2.5 0 C 3.881 0 5 1.119 5 2.5 L 5 2.5 C 5 3.881 3.881 5 2.5 5 L 2.5 5 C 1.119 5 0 3.881 0 2.5 L 0 2.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 5px 2px 5px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={5} height={5} viewBox="0 0 5 5" fill="none" style={{
        position: "relative",
        width: 5,
        height: 5,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--green-500)",
      }}>
        <path d={"M 0 2.5 C 0 1.119 1.119 0 2.5 0 L 2.5 0 C 3.881 0 5 1.119 5 2.5 L 5 2.5 C 5 3.881 3.881 5 2.5 5 L 2.5 5 C 1.119 5 0 3.881 0 2.5 L 0 2.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 5px 2px 5px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={5} height={5} viewBox="0 0 5 5" fill="none" style={{
        position: "relative",
        width: 5,
        height: 5,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--red-500)",
      }}>
        <path d={"M 0 2.5 C 0 1.119 1.119 0 2.5 0 L 2.5 0 C 3.881 0 5 1.119 5 2.5 L 5 2.5 C 5 3.881 3.881 5 2.5 5 L 2.5 5 C 1.119 5 0 3.881 0 2.5 L 0 2.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 9px 5px 9px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
        position: "relative",
        width: 7,
        height: 7,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--blue-500)",
      }}>
        <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 9px 5px 9px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
        position: "relative",
        width: 7,
        height: 7,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--purple-500)",
      }}>
        <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 9px 5px 9px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
        position: "relative",
        width: 7,
        height: 7,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--yellow-500)",
      }}>
        <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 9px 5px 9px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
        position: "relative",
        width: 7,
        height: 7,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--gray-200)",
      }}>
        <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-400)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 9px 5px 9px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
        position: "relative",
        width: 7,
        height: 7,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--gray-600)",
      }}>
        <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 9px 5px 9px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
        position: "relative",
        width: 7,
        height: 7,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--green-500)",
      }}>
        <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 9px 5px 9px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
        position: "relative",
        width: 7,
        height: 7,
        overflow: "hidden",
        borderRadius: 9999,
        flexShrink: 0,
        color: "var(--red-500)",
      }}>
        <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태 태그"}</span>
    </div>
  );
  const __impls = {
    // figma: color=blue, size=medium, dIsabled=false
    "color=blue|size=md|dIsabled=false": __body0,
    // figma: color=purple, size=medium, dIsabled=false
    "color=purple|size=md|dIsabled=false": __body1,
    // figma: color=yellow, size=medium, dIsabled=false
    "color=yellow|size=md|dIsabled=false": __body2,
    // figma: color=gray, size=medium, dIsabled=true
    "color=gray|size=md|dIsabled=true": __body3,
    // figma: color=gray, size=medium, dIsabled=false
    "color=gray|size=md|dIsabled=false": __body4,
    // figma: color=green, size=medium, dIsabled=false
    "color=green|size=md|dIsabled=false": __body5,
    // figma: color=red, size=medium, dIsabled=false
    "color=red|size=md|dIsabled=false": __body6,
    // figma: color=blue, size=small, dIsabled=false
    "color=blue|size=sm|dIsabled=false": __body7,
    // figma: color=purple, size=small, dIsabled=false
    "color=purple|size=sm|dIsabled=false": __body8,
    // figma: color=yellow, size=small, dIsabled=false
    "color=yellow|size=sm|dIsabled=false": __body9,
    // figma: color=gray, size=small, dIsabled=true
    "color=gray|size=sm|dIsabled=true": __body10,
    // figma: color=gray, size=small, dIsabled=false
    "color=gray|size=sm|dIsabled=false": __body11,
    // figma: color=green, size=small, dIsabled=false
    "color=green|size=sm|dIsabled=false": __body12,
    // figma: color=red, size=small, dIsabled=false
    "color=red|size=sm|dIsabled=false": __body13,
    // figma: color=blue, size=large, dIsabled=false
    "color=blue|size=lg|dIsabled=false": __body14,
    // figma: color=purple, size=large, dIsabled=false
    "color=purple|size=lg|dIsabled=false": __body15,
    // figma: color=yellow, size=large, dIsabled=false
    "color=yellow|size=lg|dIsabled=false": __body16,
    // figma: color=gray, size=large, dIsabled=true
    "color=gray|size=lg|dIsabled=true": __body17,
    // figma: color=gray, size=large, dIsabled=false
    "color=gray|size=lg|dIsabled=false": __body18,
    // figma: color=green, size=large, dIsabled=false
    "color=green|size=lg|dIsabled=false": __body19,
    // figma: color=red, size=large, dIsabled=false
    "color=red|size=lg|dIsabled=false": __body20,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default StateTag;
