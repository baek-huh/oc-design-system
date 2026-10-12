import { IconIcXCircle } from './IconIcXCircle.jsx';
import { Label } from './Label.jsx';
import { Prefixes2 } from './Prefixes2.jsx';
import { Suffixes2 } from './Suffixes2.jsx';

// figma node: 625:2824 TextField (24 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "dataType=" + __venc(p.dataType) + '|' + "size=" + __venc(p.size);

export function TextField(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", dataType: _p.dataType ?? "default", size: _p.size ?? "md", showLabel: _p.showLabel ?? false, showClose: _p.showClose ?? false, showHelptext: _p.showHelptext ?? false, showSuffixes: _p.showSuffixes ?? false, showPrefixes: _p.showPrefixes ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
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
          {props.showPrefixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Prefixes2 type={"icon"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 2px 0px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
            }}>{props.text1 ?? "플레이스홀더"}</span>
            {props.showClose && (
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon2 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            </div>
            )}
          </div>
          {props.showSuffixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon3 ?? <Suffixes2 type={"icon-calendar-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
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
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
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
          {props.showPrefixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Prefixes2 type={"icon"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 2px 0px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
            }}>{props.text1 ?? "플레이스홀더"}</span>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              {props.showClose && (
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon2 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
              )}
            </div>
            )}
          </div>
          {props.showSuffixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon3 ?? <Suffixes2 type={"icon-calendar-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
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
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 2px 0px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "7px 0px 7px 0px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
            </div>
            {props.showClose && (
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon1 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            </div>
            )}
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Suffixes2 type={"icon-eye-off-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
      }}>{props.text1 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 2px 0px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "7px 0px 7px 0px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
            </div>
            {props.showClose && (
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon1 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            </div>
            )}
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Suffixes2 type={"icon-eye-off-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
      }}>{props.text1 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 2px 0px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "7px 0px 7px 0px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
            </div>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon1 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            </div>
            )}
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Suffixes2 type={"icon-eye-off-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
      }}>{props.text1 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 2px 0px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "7px 0px 7px 0px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
            </div>
            {props.showClose && (
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon1 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            </div>
            )}
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Suffixes2 type={"icon-eye-off-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
      }}>{props.text1 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 2px 0px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "7px 0px 7px 0px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
            </div>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon1 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            </div>
            )}
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Suffixes2 type={"icon-eye-off-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
      }}>{props.text1 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(97,97,97)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 2px 0px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "7px 0px 7px 0px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
            </div>
            {props.showClose && (
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon1 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            </div>
            )}
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Suffixes2 type={"icon-eye-off-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
      }}>{props.text1 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "7px 0px 7px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 6,
              borderRadius: "50%",
              backgroundColor: "rgb(33,33,33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              width: 6,
              borderRadius: "50%",
              backgroundColor: "rgb(33,33,33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              width: 6,
              borderRadius: "50%",
              backgroundColor: "rgb(33,33,33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              width: 6,
              borderRadius: "50%",
              backgroundColor: "rgb(33,33,33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              width: 6,
              borderRadius: "50%",
              backgroundColor: "rgb(33,33,33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              width: 6,
              borderRadius: "50%",
              backgroundColor: "rgb(33,33,33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
          </div>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Suffixes2 type={"icon-eye-off-line"} />}</div>
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
      }}>{props.text1 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "7px 0px 7px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "rgb(189,189,189)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "rgb(189,189,189)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "rgb(189,189,189)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "rgb(189,189,189)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "rgb(189,189,189)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "rgb(189,189,189)",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Suffixes2 type={"icon-eye-off-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
      }}>{props.text1 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 2px 0px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "7px 0px 7px 0px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                width: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                width: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                width: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                width: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                width: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
            </div>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
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
                  width: 20,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}>{props.icon1 ?? <IconIcXCircle fill={true} />}</div>
            </div>
            )}
          </div>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <Suffixes2 type={"icon-eye-off-line"} />}</div>
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
      }}>{props.text1 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 2px 0px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "7px 0px 7px 0px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
            </div>
            {props.showClose && (
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon1 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            </div>
            )}
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Suffixes2 type={"icon-eye-off-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
      }}>{props.text1 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(239,83,80)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 2px 0px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "7px 0px 7px 0px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                width: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                width: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                width: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                width: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                width: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
            </div>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
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
                  width: 20,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}>{props.icon1 ?? <IconIcXCircle fill={true} />}</div>
            </div>
            )}
          </div>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <Suffixes2 type={"icon-eye-off-line"} />}</div>
        </div>
      </div>
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
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(239,83,80)",
          flexShrink: 0,
        }}>{props.text1 ?? "에러 메세지가 이곳에 표기됩니다."}</span>
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
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(239,83,80)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 2px 0px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "7px 0px 7px 0px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
            </div>
            {props.showClose && (
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon1 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            </div>
            )}
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Suffixes2 type={"icon-eye-off-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
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
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(239,83,80)",
          flexShrink: 0,
        }}>{props.text1 ?? "에러 메세지가 이곳에 표기됩니다."}</span>
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
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          {props.showPrefixes && (
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Prefixes2 type={"icon"} />}</div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 5,
            padding: "0px 2px 0px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text1 ?? "플레이스홀더"}</span>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              {props.showClose && (
              <div style={{
                  position: "relative",
                  width: 20,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}>{props.icon2 ?? <IconIcXCircle fill={true} />}</div>
              )}
            </div>
            )}
          </div>
          {props.showSuffixes && (
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon3 ?? <Suffixes2 type={"icon-calendar-line"} />}</div>
          )}
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
  const __body15 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          {props.showPrefixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Prefixes2 type={"icon"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 2px 0px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
            }}>{props.text1 ?? "플레이스홀더"}</span>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              {props.showClose && (
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon2 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
              )}
            </div>
            )}
          </div>
          {props.showSuffixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon3 ?? <Suffixes2 type={"icon-calendar-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
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
  const __body16 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(97,97,97)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          {props.showPrefixes && (
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Prefixes2 type={"icon"} />}</div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 2px 0px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text1 ?? "플레이스홀더"}</span>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              {props.showClose && (
              <div style={{
                  position: "relative",
                  width: 20,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}>{props.icon2 ?? <IconIcXCircle fill={true} />}</div>
              )}
            </div>
            )}
          </div>
          {props.showSuffixes && (
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon3 ?? <Suffixes2 type={"icon-calendar-line"} />}</div>
          )}
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
  const __body17 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(97,97,97)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          {props.showPrefixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Prefixes2 type={"icon"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 2px 0px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
            }}>{props.text1 ?? "플레이스홀더"}</span>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              {props.showClose && (
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon2 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
              )}
            </div>
            )}
          </div>
          {props.showSuffixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon3 ?? <Suffixes2 type={"icon-calendar-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
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
  const __body18 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          {props.showPrefixes && (
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Prefixes2 type={"icon"} />}</div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
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
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text1 ?? "플레이스홀더"}</span>
          </div>
          {props.showSuffixes && (
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <Suffixes2 type={"icon-calendar-line"} />}</div>
          )}
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
  const __body19 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          {props.showPrefixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Prefixes2 type={"icon"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
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
            }}>{props.text1 ?? "플레이스홀더"}</span>
          </div>
          {props.showSuffixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Suffixes2 type={"icon-calendar-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
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
  const __body20 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          {props.showPrefixes && (
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Prefixes2 type={"icon"} />}</div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 2px 0px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text1 ?? "플레이스홀더"}</span>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              {props.showClose && (
              <div style={{
                  position: "relative",
                  width: 20,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}>{props.icon2 ?? <IconIcXCircle fill={true} />}</div>
              )}
            </div>
            )}
          </div>
          {props.showSuffixes && (
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon3 ?? <Suffixes2 type={"icon-calendar-line"} />}</div>
          )}
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
  const __body21 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          {props.showPrefixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Prefixes2 type={"icon"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 2px 0px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
            }}>{props.text1 ?? "플레이스홀더"}</span>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              {props.showClose && (
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon2 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
              )}
            </div>
            )}
          </div>
          {props.showSuffixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon3 ?? <Suffixes2 type={"icon-calendar-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
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
  const __body22 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(239,83,80)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 12px 10px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          {props.showPrefixes && (
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Prefixes2 type={"icon"} />}</div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 2px 0px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text1 ?? "플레이스홀더"}</span>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              {props.showClose && (
              <div style={{
                  position: "relative",
                  width: 20,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}>{props.icon2 ?? <IconIcXCircle fill={true} />}</div>
              )}
            </div>
            )}
          </div>
          {props.showSuffixes && (
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon3 ?? <Suffixes2 type={"icon-calendar-line"} />}</div>
          )}
        </div>
      </div>
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
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(239,83,80)",
          flexShrink: 0,
        }}>{props.text2 ?? "에러 메세지가 이곳에 표기됩니다."}</span>
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
        }}>{props.text3 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
        )}
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
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
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(239,83,80)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "14px 12px 14px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          {props.showPrefixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Prefixes2 type={"icon"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 2px 0px 0px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
            }}>{props.text1 ?? "플레이스홀더"}</span>
            {props.showClose && (
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              {props.showClose && (
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon2 ?? <IconIcXCircle fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
              )}
            </div>
            )}
          </div>
          {props.showSuffixes && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon3 ?? <Suffixes2 type={"icon-calendar-line"} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
        </div>
      </div>
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
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(239,83,80)",
          flexShrink: 0,
        }}>{props.text2 ?? "에러 메세지가 이곳에 표기됩니다."}</span>
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
        }}>{props.text3 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default, Data-Type=Default, Size=Medium
    "state=default|dataType=default|size=md": __body0,
    // figma: State=Default, Data-Type=Default, Size=Large
    "state=default|dataType=default|size=lg": __body1,
    // figma: State=Default, Data-Type=PW, Size=Medium
    "state=default|dataType=pw|size=md": __body2,
    // figma: State=Default, Data-Type=PW, Size=Large
    "state=default|dataType=pw|size=lg": __body3,
    // figma: State=Hover, Data-Type=PW, Size=Medium
    "state=hover|dataType=pw|size=md": __body4,
    // figma: State=Hover, Data-Type=PW, Size=Large
    "state=hover|dataType=pw|size=lg": __body5,
    // figma: State=Active, Data-Type=PW, Size=Medium
    "state=active|dataType=pw|size=md": __body6,
    // figma: State=Active, Data-Type=PW, Size=Large
    "state=active|dataType=pw|size=lg": __body7,
    // figma: State=Disabled, Data-Type=PW, Size=Medium
    "state=disabled|dataType=pw|size=md": __body8,
    // figma: State=Disabled, Data-Type=PW, Size=Large
    "state=disabled|dataType=pw|size=lg": __body9,
    // figma: State=Typed, Data-Type=PW, Size=Medium
    "state=typed|dataType=pw|size=md": __body10,
    // figma: State=Typed, Data-Type=PW, Size=Large
    "state=typed|dataType=pw|size=lg": __body11,
    // figma: State=Error, Data-Type=PW, Size=Medium
    "state=error|dataType=pw|size=md": __body12,
    // figma: State=Error, Data-Type=PW, Size=Large
    "state=error|dataType=pw|size=lg": __body13,
    // figma: State=Hover, Data-Type=Default, Size=Medium
    "state=hover|dataType=default|size=md": __body14,
    // figma: State=Hover, Data-Type=Default, Size=Large
    "state=hover|dataType=default|size=lg": __body15,
    // figma: State=Active, Data-Type=Default, Size=Medium
    "state=active|dataType=default|size=md": __body16,
    // figma: State=Active, Data-Type=Default, Size=Large
    "state=active|dataType=default|size=lg": __body17,
    // figma: State=Disabled, Data-Type=Default, Size=Medium
    "state=disabled|dataType=default|size=md": __body18,
    // figma: State=Disabled, Data-Type=Default, Size=Large
    "state=disabled|dataType=default|size=lg": __body19,
    // figma: State=Typed, Data-Type=Default, Size=Medium
    "state=typed|dataType=default|size=md": __body20,
    // figma: State=Typed, Data-Type=Default, Size=Large
    "state=typed|dataType=default|size=lg": __body21,
    // figma: State=Error, Data-Type=Default, Size=Medium
    "state=error|dataType=default|size=md": __body22,
    // figma: State=Error, Data-Type=Default, Size=Large
    "state=error|dataType=default|size=lg": __body23,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TextField;
