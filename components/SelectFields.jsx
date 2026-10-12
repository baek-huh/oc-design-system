import { Disclosure2 } from './Disclosure2.jsx';
import { IconIcArrowDown } from './IconIcArrowDown.jsx';
import { Label } from './Label.jsx';
import { TagDefaultSmallFalse } from './TagDefaultSmallFalse.jsx';
import { TagGrayMediumFalseLight } from './TagGrayMediumFalseLight.jsx';

// figma node: 7814:1533 select-fields (20 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size) + '|' + "content=" + __venc(p.content);

export function SelectFields(_p = {}) {
  const props = { ..._p, showLabel: _p.showLabel ?? false, state: _p.state ?? "default", size: _p.size ?? "md", content: _p.content ?? "filledtext", showHelptext: _p.showHelptext ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{ position: "relative", width: 330, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 48,
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
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Disclosure2 type={"down"} />}</div>
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
      borderRadius: 4,
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
          style={{ position: "relative", width: 330, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 48,
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
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Disclosure2 type={"down"} />}</div>
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
      borderRadius: 4,
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
          style={{ position: "relative", width: 330, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 48,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
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
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <IconIcArrowDown small={true} />}</div>
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
  const __body3 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{ position: "relative", width: 330, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 48,
          borderRadius: 8,
          backgroundColor: "rgb(245,245,245)",
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
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Disclosure2 type={"down"} />}</div>
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
  const __body4 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{ position: "relative", width: 330, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 48,
          borderRadius: 8,
          backgroundColor: "var(--color-white)",
          boxShadow: "inset 0 0 0 1px rgb(239,83,80)",
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
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Disclosure2 type={"down"} />}</div>
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
        color: "rgb(239,83,80)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
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
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Disclosure2 type={"down"} />}</div>
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
  const __body6 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
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
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon1 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon2 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon3 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon4 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <TagDefaultSmallFalse
              style={{ position: "relative", width: 40, flexShrink: 0 }}
              showClose={true}
            />
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(158,158,158)",
              flexShrink: 0,
            }}>{props.text1 ?? "외 3개"}</span>
          </div>
          <Disclosure2
            style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}
            type={"down"}
          />
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
  const __body7 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 48,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
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
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon1 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon2 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon3 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon4 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "rgb(33,33,33)",
              flexGrow: 1,
              whiteSpace: "nowrap",
            }}>{props.text1 ?? "외 3개"}</span>
          </div>
          <Disclosure2
            style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}
            type={"down"}
          />
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
  const __body8 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
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
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Disclosure2 type={"down"} />}</div>
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
  const __body9 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
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
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon1 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon2 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon3 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon4 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <TagDefaultSmallFalse
              style={{ position: "relative", width: 40, flexShrink: 0 }}
              showClose={true}
            />
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(33,33,33)",
              flexShrink: 0,
            }}>{props.text1 ?? "외 3개"}</span>
          </div>
          <Disclosure2
            style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}
            type={"down"}
          />
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
  const __body10 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 48,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
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
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon1 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon2 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon3 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon4 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(33,33,33)",
              flexShrink: 0,
            }}>{props.text1 ?? "외 3개"}</span>
          </div>
          <Disclosure2
            style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}
            type={"down"}
          />
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
  const __body11 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
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
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Disclosure2 type={"down"} />}</div>
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
  const __body12 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
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
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon1 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon2 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon3 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon4 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <TagDefaultSmallFalse
              style={{ position: "relative", width: 40, flexShrink: 0 }}
              showClose={true}
            />
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(158,158,158)",
              flexShrink: 0,
            }}>{props.text1 ?? "외 3개"}</span>
          </div>
          <Disclosure2
            style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}
            type={"down"}
          />
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
  const __body13 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 48,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
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
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon1 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon2 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon3 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon4 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(33,33,33)",
              flexShrink: 0,
            }}>{props.text1 ?? "외 3개"}</span>
          </div>
          <Disclosure2
            style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}
            type={"down"}
          />
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
  const __body14 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(245,245,245)",
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
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Disclosure2 type={"down"} />}</div>
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
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(245,245,245)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
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
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon1 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon2 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon3 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon4 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <TagDefaultSmallFalse
              style={{ position: "relative", width: 40, flexShrink: 0 }}
              showClose={true}
            />
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(189,189,189)",
              flexShrink: 0,
            }}>{props.text1 ?? "외 3개"}</span>
          </div>
          <Disclosure2
            style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}
            type={"down"}
          />
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
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 48,
          borderRadius: 8,
          backgroundColor: "rgb(245,245,245)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
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
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon1 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon2 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon3 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon4 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(189,189,189)",
              flexShrink: 0,
            }}>{props.text1 ?? "외 3개"}</span>
          </div>
          <Disclosure2
            style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}
            type={"down"}
          />
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
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          borderRadius: 8,
          backgroundColor: "var(--color-white)",
          boxShadow: "inset 0 0 0 1px rgb(239,83,80)",
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
          }}>{props.text1 ?? "텍스트"}</span>
          <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Disclosure2 type={"down"} />}</div>
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
        color: "rgb(239,83,80)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 40,
          borderRadius: 8,
          backgroundColor: "var(--color-white)",
          boxShadow: "inset 0 0 0 1px rgb(239,83,80)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
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
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon1 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon2 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon3 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon4 ?? <TagDefaultSmallFalse showClose={true} />}</div>
            <TagDefaultSmallFalse
              style={{ position: "relative", width: 40, flexShrink: 0 }}
              showClose={true}
            />
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(33,33,33)",
              flexShrink: 0,
            }}>{props.text1 ?? "외 3개"}</span>
          </div>
          <Disclosure2
            style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}
            type={"down"}
          />
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
        color: "rgb(239,83,80)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 4,
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
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          height: 48,
          borderRadius: 8,
          backgroundColor: "var(--color-white)",
          boxShadow: "inset 0 0 0 1px rgb(239,83,80)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
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
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon1 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon2 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon3 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon4 ?? <TagGrayMediumFalseLight showClose={true} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(33,33,33)",
              flexShrink: 0,
            }}>{props.text1 ?? "외 3개"}</span>
          </div>
          <Disclosure2
            style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}
            type={"down"}
          />
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
        color: "rgb(239,83,80)",
        flexShrink: 0,
      }}>{props.text2 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: State=Default, Size=Large, Content=FilledText
    "state=default|size=lg|content=filledtext": __body0,
    // figma: State=Filled, Size=Large, Content=FilledText
    "state=filled|size=lg|content=filledtext": __body1,
    // figma: State=Hover, Size=Large, Content=FilledText
    "state=hover|size=lg|content=filledtext": __body2,
    // figma: State=Disabled, Size=Large, Content=FilledText
    "state=disabled|size=lg|content=filledtext": __body3,
    // figma: State=Error, Size=Large, Content=FilledText
    "state=error|size=lg|content=filledtext": __body4,
    // figma: State=Default, Size=Medium, Content=FilledText
    "state=default|size=md|content=filledtext": __body5,
    // figma: State=Default, Size=Medium, Content=FilledTag
    "state=default|size=md|content=filledtag": __body6,
    // figma: State=Default, Size=Large, Content=FilledTag
    "state=default|size=lg|content=filledtag": __body7,
    // figma: State=Filled, Size=Medium, Content=FilledText
    "state=filled|size=md|content=filledtext": __body8,
    // figma: State=Filled, Size=Medium, Content=FilledTag
    "state=filled|size=md|content=filledtag": __body9,
    // figma: State=Filled, Size=Large, Content=FilledTag
    "state=filled|size=lg|content=filledtag": __body10,
    // figma: State=Hover, Size=Medium, Content=FilledText
    "state=hover|size=md|content=filledtext": __body11,
    // figma: State=Hover, Size=Medium, Content=FilledTag
    "state=hover|size=md|content=filledtag": __body12,
    // figma: State=Hover, Size=Large, Content=FilledTag
    "state=hover|size=lg|content=filledtag": __body13,
    // figma: State=Disabled, Size=Medium, Content=FilledText
    "state=disabled|size=md|content=filledtext": __body14,
    // figma: State=Disabled, Size=Medium, Content=FilledTag
    "state=disabled|size=md|content=filledtag": __body15,
    // figma: State=Disabled, Size=Large, Content=FilledTag
    "state=disabled|size=lg|content=filledtag": __body16,
    // figma: State=Error, Size=Medium, Content=FilledText
    "state=error|size=md|content=filledtext": __body17,
    // figma: State=Error, Size=Medium, Content=FilledTag
    "state=error|size=md|content=filledtag": __body18,
    // figma: State=Error, Size=Large, Content=FilledTag
    "state=error|size=lg|content=filledtag": __body19,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default SelectFields;
