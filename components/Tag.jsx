import { IconIcStar } from './IconIcStar.jsx';
import { IconIcX } from './IconIcX.jsx';

// figma node: 714:3164 tag (63 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color) + '|' + "size=" + __venc(p.size) + '|' + "dIsabled=" + __venc(p.dIsabled) + '|' + "type=" + __venc(p.type);

export function Tag(_p = {}) {
  const props = { ..._p, showIcon: _p.showIcon ?? false, color: _p.color ?? "blue", size: _p.size ?? "sm", dIsabled: _p.dIsabled ?? false, type: _p.type ?? "line", showClose: _p.showClose ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--gray-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-200)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--gray-200)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--blue-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--blue-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--green-50)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--green-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--green-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--green-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--yellow-100)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--yellow-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--yellow-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--yellow-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--red-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--red-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--red-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--purple-50)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--red-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--purple-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--red-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--gray-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-200)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--gray-200)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--blue-50-2)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--blue-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--blue-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--green-50)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--green-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--green-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--green-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--yellow-100)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--yellow-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--yellow-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--yellow-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--red-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--red-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--red-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--purple-50)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--red-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--purple-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--red-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--gray-50)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--gray-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
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
      padding: "5px 9px 5px 9px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-200)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--gray-200)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-50-2)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--blue-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--blue-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--green-50)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--green-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--green-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--green-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--yellow-100)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--yellow-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--yellow-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--yellow-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--red-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--red-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--red-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--purple-50)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--red-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--purple-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--red-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-50)",
      boxShadow: "inset 0 0 0 1px var(--gray-600)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--gray-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-50)",
      boxShadow: "inset 0 0 0 1px var(--gray-600)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--gray-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-600)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-600)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-50)",
      boxShadow: "inset 0 0 0 1px var(--gray-200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-200)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--gray-200)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-50)",
      boxShadow: "inset 0 0 0 1px var(--gray-200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-200)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--gray-200)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--blue-50-2)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--blue-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--blue-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--blue-50-2)",
      boxShadow: "inset 0 0 0 1px var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--blue-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--blue-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--green-50)",
      boxShadow: "inset 0 0 0 1px var(--green-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--green-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--green-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--green-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--green-50)",
      boxShadow: "inset 0 0 0 1px var(--green-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--green-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--green-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--green-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--green-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--green-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--yellow-100)",
      boxShadow: "inset 0 0 0 1px var(--yellow-600)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--yellow-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--yellow-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--yellow-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--yellow-100)",
      boxShadow: "inset 0 0 0 1px var(--yellow-600)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--yellow-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--yellow-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--yellow-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--yellow-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--yellow-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--red-50-2)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--red-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--red-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--red-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--purple-50)",
      boxShadow: "inset 0 0 0 1px var(--purple-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--red-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--purple-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--red-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--red-50-2)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--red-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--red-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--red-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--purple-50)",
      boxShadow: "inset 0 0 0 1px var(--purple-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--red-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--purple-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--red-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--red-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--purple-500)",
      boxShadow: "inset 0 0 0 1px var(--purple-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "3px 6px 3px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--red-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--purple-500)",
      boxShadow: "inset 0 0 0 1px var(--purple-500)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--gray-50)",
      boxShadow: "inset 0 0 0 1px var(--gray-600)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--gray-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--gray-600)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--gray-50)",
      boxShadow: "inset 0 0 0 1px var(--gray-200)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-200)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--gray-200)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--gray-200)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
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
      padding: "5px 9px 5px 9px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--blue-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--blue-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--blue-500)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--green-50)",
      boxShadow: "inset 0 0 0 1px var(--green-500)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--green-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--green-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--green-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--green-500)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--yellow-100)",
      boxShadow: "inset 0 0 0 1px var(--yellow-600)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--yellow-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--yellow-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--yellow-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--yellow-500)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-50-2)",
      boxShadow: "inset 0 0 0 1px var(--red-500)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--red-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--red-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--red-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--purple-50)",
      boxShadow: "inset 0 0 0 1px var(--purple-500)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--red-500)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--purple-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--red-500)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--red-500)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--purple-500)",
      boxShadow: "inset 0 0 0 1px var(--purple-500)",
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
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--white)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
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
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 1px 1px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
            color: "var(--white)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: color=gray, size=medium, dIsabled=false, type=light
    "color=gray|size=md|dIsabled=false|type=light": __body0,
    // figma: color=gray, size=medium, dIsabled=true, type=light
    "color=gray|size=md|dIsabled=true|type=light": __body1,
    // figma: color=blue, size=medium, dIsabled=false, type=light
    "color=blue|size=md|dIsabled=false|type=light": __body2,
    // figma: color=green, size=medium, dIsabled=false, type=light
    "color=green|size=md|dIsabled=false|type=light": __body3,
    // figma: color=yellow, size=medium, dIsabled=false, type=light
    "color=yellow|size=md|dIsabled=false|type=light": __body4,
    // figma: color=red, size=medium, dIsabled=false, type=light
    "color=red|size=md|dIsabled=false|type=light": __body5,
    // figma: color=purple, size=medium, dIsabled=false, type=light
    "color=purple|size=md|dIsabled=false|type=light": __body6,
    // figma: color=gray, size=small, dIsabled=false, type=light
    "color=gray|size=sm|dIsabled=false|type=light": __body7,
    // figma: color=gray, size=small, dIsabled=true, type=light
    "color=gray|size=sm|dIsabled=true|type=light": __body8,
    // figma: color=blue, size=small, dIsabled=false, type=light
    "color=blue|size=sm|dIsabled=false|type=light": __body9,
    // figma: color=green, size=small, dIsabled=false, type=light
    "color=green|size=sm|dIsabled=false|type=light": __body10,
    // figma: color=yellow, size=small, dIsabled=false, type=light
    "color=yellow|size=sm|dIsabled=false|type=light": __body11,
    // figma: color=red, size=small, dIsabled=false, type=light
    "color=red|size=sm|dIsabled=false|type=light": __body12,
    // figma: color=purple, size=small, dIsabled=false, type=light
    "color=purple|size=sm|dIsabled=false|type=light": __body13,
    // figma: color=gray, size=large, dIsabled=false, type=light
    "color=gray|size=lg|dIsabled=false|type=light": __body14,
    // figma: color=gray, size=large, dIsabled=true, type=light
    "color=gray|size=lg|dIsabled=true|type=light": __body15,
    // figma: color=blue, size=large, dIsabled=false, type=light
    "color=blue|size=lg|dIsabled=false|type=light": __body16,
    // figma: color=green, size=large, dIsabled=false, type=light
    "color=green|size=lg|dIsabled=false|type=light": __body17,
    // figma: color=yellow, size=large, dIsabled=false, type=light
    "color=yellow|size=lg|dIsabled=false|type=light": __body18,
    // figma: color=red, size=large, dIsabled=false, type=light
    "color=red|size=lg|dIsabled=false|type=light": __body19,
    // figma: color=purple, size=large, dIsabled=false, type=light
    "color=purple|size=lg|dIsabled=false|type=light": __body20,
    // figma: color=gray, size=medium, dIsabled=false, type=line
    "color=gray|size=md|dIsabled=false|type=line": __body21,
    // figma: color=gray, size=small, dIsabled=false, type=line
    "color=gray|size=sm|dIsabled=false|type=line": __body22,
    // figma: color=gray, size=medium, dIsabled=false, type=fill
    "color=gray|size=md|dIsabled=false|type=fill": __body23,
    // figma: color=gray, size=small, dIsabled=false, type=fill
    "color=gray|size=sm|dIsabled=false|type=fill": __body24,
    // figma: color=gray, size=medium, dIsabled=true, type=line
    "color=gray|size=md|dIsabled=true|type=line": __body25,
    // figma: color=gray, size=small, dIsabled=true, type=line
    "color=gray|size=sm|dIsabled=true|type=line": __body26,
    // figma: color=gray, size=medium, dIsabled=true, type=fill
    "color=gray|size=md|dIsabled=true|type=fill": __body27,
    // figma: color=gray, size=small, dIsabled=true, type=fill
    "color=gray|size=sm|dIsabled=true|type=fill": __body28,
    // figma: color=blue, size=medium, dIsabled=false, type=line
    "color=blue|size=md|dIsabled=false|type=line": __body29,
    // figma: color=blue, size=small, dIsabled=false, type=line
    "color=blue|size=sm|dIsabled=false|type=line": __body30,
    // figma: color=blue, size=medium, dIsabled=false, type=fill
    "color=blue|size=md|dIsabled=false|type=fill": __body31,
    // figma: color=blue, size=small, dIsabled=false, type=fill
    "color=blue|size=sm|dIsabled=false|type=fill": __body32,
    // figma: color=green, size=medium, dIsabled=false, type=line
    "color=green|size=md|dIsabled=false|type=line": __body33,
    // figma: color=green, size=small, dIsabled=false, type=line
    "color=green|size=sm|dIsabled=false|type=line": __body34,
    // figma: color=green, size=medium, dIsabled=false, type=fill
    "color=green|size=md|dIsabled=false|type=fill": __body35,
    // figma: color=green, size=small, dIsabled=false, type=fill
    "color=green|size=sm|dIsabled=false|type=fill": __body36,
    // figma: color=yellow, size=medium, dIsabled=false, type=line
    "color=yellow|size=md|dIsabled=false|type=line": __body37,
    // figma: color=yellow, size=small, dIsabled=false, type=line
    "color=yellow|size=sm|dIsabled=false|type=line": __body38,
    // figma: color=yellow, size=medium, dIsabled=false, type=fill
    "color=yellow|size=md|dIsabled=false|type=fill": __body39,
    // figma: color=yellow, size=small, dIsabled=false, type=fill
    "color=yellow|size=sm|dIsabled=false|type=fill": __body40,
    // figma: color=red, size=medium, dIsabled=false, type=line
    "color=red|size=md|dIsabled=false|type=line": __body41,
    // figma: color=purple, size=medium, dIsabled=false, type=line
    "color=purple|size=md|dIsabled=false|type=line": __body42,
    // figma: color=red, size=small, dIsabled=false, type=line
    "color=red|size=sm|dIsabled=false|type=line": __body43,
    // figma: color=purple, size=small, dIsabled=false, type=line
    "color=purple|size=sm|dIsabled=false|type=line": __body44,
    // figma: color=red, size=medium, dIsabled=false, type=fill
    "color=red|size=md|dIsabled=false|type=fill": __body45,
    // figma: color=purple, size=medium, dIsabled=false, type=fill
    "color=purple|size=md|dIsabled=false|type=fill": __body46,
    // figma: color=red, size=small, dIsabled=false, type=fill
    "color=red|size=sm|dIsabled=false|type=fill": __body47,
    // figma: color=purple, size=small, dIsabled=false, type=fill
    "color=purple|size=sm|dIsabled=false|type=fill": __body48,
    // figma: color=gray, size=large, dIsabled=false, type=line
    "color=gray|size=lg|dIsabled=false|type=line": __body49,
    // figma: color=gray, size=large, dIsabled=false, type=fill
    "color=gray|size=lg|dIsabled=false|type=fill": __body50,
    // figma: color=gray, size=large, dIsabled=true, type=line
    "color=gray|size=lg|dIsabled=true|type=line": __body51,
    // figma: color=gray, size=large, dIsabled=true, type=fill
    "color=gray|size=lg|dIsabled=true|type=fill": __body52,
    // figma: color=blue, size=large, dIsabled=false, type=line
    "color=blue|size=lg|dIsabled=false|type=line": __body53,
    // figma: color=blue, size=large, dIsabled=false, type=fill
    "color=blue|size=lg|dIsabled=false|type=fill": __body54,
    // figma: color=green, size=large, dIsabled=false, type=line
    "color=green|size=lg|dIsabled=false|type=line": __body55,
    // figma: color=green, size=large, dIsabled=false, type=fill
    "color=green|size=lg|dIsabled=false|type=fill": __body56,
    // figma: color=yellow, size=large, dIsabled=false, type=line
    "color=yellow|size=lg|dIsabled=false|type=line": __body57,
    // figma: color=yellow, size=large, dIsabled=false, type=fill
    "color=yellow|size=lg|dIsabled=false|type=fill": __body58,
    // figma: color=red, size=large, dIsabled=false, type=line
    "color=red|size=lg|dIsabled=false|type=line": __body59,
    // figma: color=purple, size=large, dIsabled=false, type=line
    "color=purple|size=lg|dIsabled=false|type=line": __body60,
    // figma: color=red, size=large, dIsabled=false, type=fill
    "color=red|size=lg|dIsabled=false|type=fill": __body61,
    // figma: color=purple, size=large, dIsabled=false, type=fill
    "color=purple|size=lg|dIsabled=false|type=fill": __body62,
  };
  return (__impls[__vkey(props)] ?? __body30)();
}
export default Tag;
