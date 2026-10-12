import { IconIcLightning } from './IconIcLightning.jsx';

// figma node: 3364:7498 Item/Tab (72 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size) + '|' + "update=" + __venc(p.update) + '|' + "state=" + __venc(p.state) + '|' + "icon=" + __venc(p.icon);

export function ItemTab(_p = {}) {
  const props = { ..._p, type: _p.type ?? "text", size: _p.size ?? "sm", update: _p.update ?? false, state: _p.state ?? "unselected", icon: _p.icon ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
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
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: 1,
        backgroundColor: "rgb(217,217,217)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
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
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: 1,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: 1,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: 1,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: 1,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
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
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: 1,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
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
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: 1,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
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
        }}>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: 1,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
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
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: 1,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        color: "rgb(189,189,189)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        color: "rgb(224,224,224)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(189,189,189)",
          flexShrink: 0,
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(189,189,189)",
          flexShrink: 0,
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        gap: 4,
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
          }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(189,189,189)",
          flexShrink: 0,
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(224,224,224)",
          flexShrink: 0,
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        gap: 4,
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
          }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(224,224,224)",
          flexShrink: 0,
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        gap: 4,
        alignItems: "flex-start",
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
          color: "rgb(189,189,189)",
          flexShrink: 0,
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        gap: 4,
        alignItems: "flex-start",
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
          color: "rgb(224,224,224)",
          flexShrink: 0,
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        gap: 4,
        alignItems: "flex-start",
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
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(189,189,189)",
            flexShrink: 0,
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        gap: 4,
        alignItems: "flex-start",
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
        }}>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(189,189,189)",
            flexShrink: 0,
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        gap: 4,
        alignItems: "flex-start",
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
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(189,189,189)",
            flexShrink: 0,
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        gap: 4,
        alignItems: "flex-start",
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
        }}>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(224,224,224)",
            flexShrink: 0,
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 0px 10px 0px",
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
        gap: 4,
        alignItems: "flex-start",
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
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(224,224,224)",
            flexShrink: 0,
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
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
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 18px 6px 18px",
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
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 12px 4px 12px",
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
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 18px 6px 18px",
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
        gap: 4,
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
          }}>{props.icon1 ?? <IconIcLightning fill={true} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
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
        gap: 4,
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
          }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 18px 6px 18px",
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
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 12px 4px 12px",
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
        gap: 4,
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
          }}>{props.icon1 ?? <IconIcLightning fill={true} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 18px 6px 18px",
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
        color: "rgb(189,189,189)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
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
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 18px 6px 18px",
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
        gap: 4,
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
          }}>{props.icon1 ?? <IconIcLightning fill={true} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 12px 4px 12px",
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
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 18px 6px 18px",
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
        gap: 4,
        alignItems: "flex-start",
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
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 12px 4px 12px",
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
        color: "rgb(189,189,189)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "탭 메뉴"}</span>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 18px 6px 18px",
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
        gap: 4,
        alignItems: "flex-start",
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
          <div style={{
              position: "relative",
              width: 18,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <IconIcLightning fill={true} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
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
        gap: 4,
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
          }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 18px 6px 18px",
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
        gap: 4,
        alignItems: "flex-start",
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
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 12px 4px 12px",
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
        gap: 4,
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
          }}>{props.icon1 ?? <IconIcLightning fill={true} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
      </div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 18px 6px 18px",
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
        gap: 4,
        alignItems: "flex-start",
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
          color: "rgb(189,189,189)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 18px 6px 18px",
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
        gap: 4,
        alignItems: "flex-start",
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
          <div style={{
              position: "relative",
              width: 18,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <IconIcLightning fill={true} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
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
        gap: 4,
        alignItems: "flex-start",
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
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 12px 4px 12px",
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
        gap: 4,
        alignItems: "flex-start",
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
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
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
        gap: 4,
        alignItems: "flex-start",
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
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 12px 4px 12px",
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
        gap: 4,
        alignItems: "flex-start",
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
          <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <IconIcLightning fill={true} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
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
        gap: 4,
        alignItems: "flex-start",
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
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 12px 4px 12px",
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
        gap: 4,
        alignItems: "flex-start",
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
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 12px 4px 12px",
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
        gap: 4,
        alignItems: "flex-start",
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
          color: "rgb(189,189,189)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "탭 메뉴"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
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
        gap: 4,
        alignItems: "flex-start",
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
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconIcLightning fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 12px 4px 12px",
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
        gap: 4,
        alignItems: "flex-start",
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
          <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <IconIcLightning fill={true} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "탭 메뉴"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(239,83,80)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Text, Size=Medium, Update=False, State=Selected, Icon=False
    "type=text|size=md|update=false|state=selected|icon=false": __body0,
    // figma: Type=Text, Size=Small, Update=False, State=Selected, Icon=False
    "type=text|size=sm|update=false|state=selected|icon=false": __body1,
    // figma: Type=Text, Size=Large, Update=False, State=Selected, Icon=False
    "type=text|size=lg|update=false|state=selected|icon=false": __body1,
    // figma: Type=Text, Size=Medium, Update=False, State=Selected, Icon=True
    "type=text|size=md|update=false|state=selected|icon=true": __body2,
    // figma: Type=Text, Size=Small, Update=False, State=Selected, Icon=True
    "type=text|size=sm|update=false|state=selected|icon=true": __body3,
    // figma: Type=Text, Size=Large, Update=False, State=Selected, Icon=True
    "type=text|size=lg|update=false|state=selected|icon=true": __body4,
    // figma: Type=Text, Size=Medium, Update=True, State=Selected, Icon=False
    "type=text|size=md|update=true|state=selected|icon=false": __body5,
    // figma: Type=Text, Size=Small, Update=True, State=Selected, Icon=False
    "type=text|size=sm|update=true|state=selected|icon=false": __body5,
    // figma: Type=Text, Size=Large, Update=True, State=Selected, Icon=False
    "type=text|size=lg|update=true|state=selected|icon=false": __body5,
    // figma: Type=Text, Size=Medium, Update=True, State=Selected, Icon=True
    "type=text|size=md|update=true|state=selected|icon=true": __body6,
    // figma: Type=Text, Size=Small, Update=True, State=Selected, Icon=True
    "type=text|size=sm|update=true|state=selected|icon=true": __body7,
    // figma: Type=Text, Size=Large, Update=True, State=Selected, Icon=True
    "type=text|size=lg|update=true|state=selected|icon=true": __body8,
    // figma: Type=Text, Size=Medium, Update=False, State=Unselected, Icon=False
    "type=text|size=md|update=false|state=unselected|icon=false": __body9,
    // figma: Type=Text, Size=Small, Update=False, State=Unselected, Icon=False
    "type=text|size=sm|update=false|state=unselected|icon=false": __body10,
    // figma: Type=Text, Size=Large, Update=False, State=Unselected, Icon=False
    "type=text|size=lg|update=false|state=unselected|icon=false": __body10,
    // figma: Type=Text, Size=Medium, Update=False, State=Disabled, Icon=False
    "type=text|size=md|update=false|state=disabled|icon=false": __body10,
    // figma: Type=Text, Size=Small, Update=False, State=Disabled, Icon=False
    "type=text|size=sm|update=false|state=disabled|icon=false": __body11,
    // figma: Type=Text, Size=Large, Update=False, State=Disabled, Icon=False
    "type=text|size=lg|update=false|state=disabled|icon=false": __body11,
    // figma: Type=Text, Size=Medium, Update=False, State=Unselected, Icon=True
    "type=text|size=md|update=false|state=unselected|icon=true": __body12,
    // figma: Type=Text, Size=Small, Update=False, State=Unselected, Icon=True
    "type=text|size=sm|update=false|state=unselected|icon=true": __body13,
    // figma: Type=Text, Size=Large, Update=False, State=Unselected, Icon=True
    "type=text|size=lg|update=false|state=unselected|icon=true": __body14,
    // figma: Type=Text, Size=Medium, Update=False, State=Disabled, Icon=True
    "type=text|size=md|update=false|state=disabled|icon=true": __body12,
    // figma: Type=Text, Size=Small, Update=False, State=Disabled, Icon=True
    "type=text|size=sm|update=false|state=disabled|icon=true": __body15,
    // figma: Type=Text, Size=Large, Update=False, State=Disabled, Icon=True
    "type=text|size=lg|update=false|state=disabled|icon=true": __body16,
    // figma: Type=Text, Size=Medium, Update=True, State=Unselected, Icon=False
    "type=text|size=md|update=true|state=unselected|icon=false": __body17,
    // figma: Type=Text, Size=Small, Update=True, State=Unselected, Icon=False
    "type=text|size=sm|update=true|state=unselected|icon=false": __body17,
    // figma: Type=Text, Size=Large, Update=True, State=Unselected, Icon=False
    "type=text|size=lg|update=true|state=unselected|icon=false": __body17,
    // figma: Type=Text, Size=Medium, Update=True, State=Disabled, Icon=False
    "type=text|size=md|update=true|state=disabled|icon=false": __body17,
    // figma: Type=Text, Size=Small, Update=True, State=Disabled, Icon=False
    "type=text|size=sm|update=true|state=disabled|icon=false": __body18,
    // figma: Type=Text, Size=Large, Update=True, State=Disabled, Icon=False
    "type=text|size=lg|update=true|state=disabled|icon=false": __body18,
    // figma: Type=Text, Size=Medium, Update=True, State=Unselected, Icon=True
    "type=text|size=md|update=true|state=unselected|icon=true": __body19,
    // figma: Type=Text, Size=Small, Update=True, State=Unselected, Icon=True
    "type=text|size=sm|update=true|state=unselected|icon=true": __body20,
    // figma: Type=Text, Size=Large, Update=True, State=Unselected, Icon=True
    "type=text|size=lg|update=true|state=unselected|icon=true": __body21,
    // figma: Type=Text, Size=Medium, Update=True, State=Disabled, Icon=True
    "type=text|size=md|update=true|state=disabled|icon=true": __body19,
    // figma: Type=Text, Size=Small, Update=True, State=Disabled, Icon=True
    "type=text|size=sm|update=true|state=disabled|icon=true": __body22,
    // figma: Type=Text, Size=Large, Update=True, State=Disabled, Icon=True
    "type=text|size=lg|update=true|state=disabled|icon=true": __body23,
    // figma: Type=Box, Size=Large, Update=False, State=Selected, Icon=False
    "type=box|size=lg|update=false|state=selected|icon=false": __body24,
    // figma: Type=Box, Size=Medium, Update=False, State=Selected, Icon=False
    "type=box|size=md|update=false|state=selected|icon=false": __body25,
    // figma: Type=Box, Size=Small, Update=False, State=Selected, Icon=False
    "type=box|size=sm|update=false|state=selected|icon=false": __body26,
    // figma: Type=Box, Size=Medium, Update=False, State=Selected, Icon=True
    "type=box|size=md|update=false|state=selected|icon=true": __body27,
    // figma: Type=Box, Size=Large, Update=False, State=Selected, Icon=True
    "type=box|size=lg|update=false|state=selected|icon=true": __body28,
    // figma: Type=Box, Size=Medium, Update=False, State=Unselected, Icon=False
    "type=box|size=md|update=false|state=unselected|icon=false": __body29,
    // figma: Type=Box, Size=Small, Update=False, State=Selected, Icon=True
    "type=box|size=sm|update=false|state=selected|icon=true": __body30,
    // figma: Type=Box, Size=Medium, Update=False, State=Disabled, Icon=False
    "type=box|size=md|update=false|state=disabled|icon=false": __body31,
    // figma: Type=Box, Size=Large, Update=False, State=Unselected, Icon=False
    "type=box|size=lg|update=false|state=unselected|icon=false": __body32,
    // figma: Type=Box, Size=Medium, Update=False, State=Unselected, Icon=True
    "type=box|size=md|update=false|state=unselected|icon=true": __body33,
    // figma: Type=Box, Size=Small, Update=False, State=Unselected, Icon=False
    "type=box|size=sm|update=false|state=unselected|icon=false": __body34,
    // figma: Type=Box, Size=Medium, Update=False, State=Disabled, Icon=True
    "type=box|size=md|update=false|state=disabled|icon=true": __body33,
    // figma: Type=Box, Size=Large, Update=False, State=Disabled, Icon=False
    "type=box|size=lg|update=false|state=disabled|icon=false": __body32,
    // figma: Type=Box, Size=Medium, Update=True, State=Selected, Icon=False
    "type=box|size=md|update=true|state=selected|icon=false": __body35,
    // figma: Type=Box, Size=Small, Update=False, State=Disabled, Icon=False
    "type=box|size=sm|update=false|state=disabled|icon=false": __body36,
    // figma: Type=Box, Size=Medium, Update=True, State=Selected, Icon=True
    "type=box|size=md|update=true|state=selected|icon=true": __body37,
    // figma: Type=Box, Size=Large, Update=False, State=Unselected, Icon=True
    "type=box|size=lg|update=false|state=unselected|icon=true": __body38,
    // figma: Type=Box, Size=Medium, Update=True, State=Unselected, Icon=False
    "type=box|size=md|update=true|state=unselected|icon=false": __body39,
    // figma: Type=Box, Size=Small, Update=False, State=Unselected, Icon=True
    "type=box|size=sm|update=false|state=unselected|icon=true": __body40,
    // figma: Type=Box, Size=Medium, Update=True, State=Disabled, Icon=False
    "type=box|size=md|update=true|state=disabled|icon=false": __body41,
    // figma: Type=Box, Size=Large, Update=False, State=Disabled, Icon=True
    "type=box|size=lg|update=false|state=disabled|icon=true": __body38,
    // figma: Type=Box, Size=Medium, Update=True, State=Unselected, Icon=True
    "type=box|size=md|update=true|state=unselected|icon=true": __body42,
    // figma: Type=Box, Size=Small, Update=False, State=Disabled, Icon=True
    "type=box|size=sm|update=false|state=disabled|icon=true": __body40,
    // figma: Type=Box, Size=Medium, Update=True, State=Disabled, Icon=True
    "type=box|size=md|update=true|state=disabled|icon=true": __body42,
    // figma: Type=Box, Size=Large, Update=True, State=Selected, Icon=False
    "type=box|size=lg|update=true|state=selected|icon=false": __body43,
    // figma: Type=Box, Size=Small, Update=True, State=Selected, Icon=False
    "type=box|size=sm|update=true|state=selected|icon=false": __body44,
    // figma: Type=Box, Size=Large, Update=True, State=Selected, Icon=True
    "type=box|size=lg|update=true|state=selected|icon=true": __body45,
    // figma: Type=Box, Size=Small, Update=True, State=Selected, Icon=True
    "type=box|size=sm|update=true|state=selected|icon=true": __body46,
    // figma: Type=Box, Size=Large, Update=True, State=Unselected, Icon=False
    "type=box|size=lg|update=true|state=unselected|icon=false": __body47,
    // figma: Type=Box, Size=Small, Update=True, State=Unselected, Icon=False
    "type=box|size=sm|update=true|state=unselected|icon=false": __body48,
    // figma: Type=Box, Size=Large, Update=True, State=Disabled, Icon=False
    "type=box|size=lg|update=true|state=disabled|icon=false": __body47,
    // figma: Type=Box, Size=Small, Update=True, State=Disabled, Icon=False
    "type=box|size=sm|update=true|state=disabled|icon=false": __body49,
    // figma: Type=Box, Size=Large, Update=True, State=Unselected, Icon=True
    "type=box|size=lg|update=true|state=unselected|icon=true": __body50,
    // figma: Type=Box, Size=Small, Update=True, State=Unselected, Icon=True
    "type=box|size=sm|update=true|state=unselected|icon=true": __body51,
    // figma: Type=Box, Size=Large, Update=True, State=Disabled, Icon=True
    "type=box|size=lg|update=true|state=disabled|icon=true": __body50,
    // figma: Type=Box, Size=Small, Update=True, State=Disabled, Icon=True
    "type=box|size=sm|update=true|state=disabled|icon=true": __body51,
  };
  return (__impls[__vkey(props)] ?? __body10)();
}
export default ItemTab;
