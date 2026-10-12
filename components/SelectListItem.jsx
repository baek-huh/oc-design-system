import { ItemCheckBox } from './ItemCheckBox.jsx';
import { SelectListPrefixes } from './SelectListPrefixes.jsx';
import { SelectListSuffixes } from './SelectListSuffixes.jsx';

// figma node: 7814:1631 select-list-item (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function SelectListItem(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", size: _p.size ?? "md", showPrefixes: _p.showPrefixes ?? false, showSuffixes: _p.showSuffixes ?? false, showSubtext: _p.showSubtext ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 8,
      backgroundColor: "var(--white)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <SelectListPrefixes prefixes={"icon"} />}</div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 4px 0px 4px",
        alignItems: "flex-start",
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
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "옵션 A 컨텐츠"}</span>
        {props.showSubtext && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
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
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "서브정보"}</span>
        </div>
        )}
      </div>
      {props.showSuffixes && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <SelectListSuffixes type={"icon"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 8,
      backgroundColor: "var(--white)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "10px 12px 10px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "5px 5px 5px 5px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <SelectListPrefixes prefixes={"icon"} />}</div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 4px 0px 4px",
        alignItems: "flex-start",
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
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "옵션 A 컨텐츠"}</span>
        {props.showSubtext && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
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
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "서브정보"}</span>
        </div>
        )}
      </div>
      {props.showSuffixes && (
      <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <SelectListSuffixes type={"icon"} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 8,
      backgroundColor: "var(--gray-25)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <SelectListPrefixes prefixes={"check-box"} />}</div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 4px 0px 4px",
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
          fontSize: "calc(var(--size-text-14) * 1px)",
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "옵션 A 컨텐츠"}</span>
        {props.showSubtext && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
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
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "서브정보"}</span>
        </div>
        )}
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 30,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "1px 0px 1px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <SelectListSuffixes type={"tag"} />}</div>
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 8,
      backgroundColor: "var(--gray-25)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "10px 12px 10px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <SelectListPrefixes icon1={<ItemCheckBox state={"default"} checked={false} size={"md"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />} prefixes={"check-box"} />}</div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 4px 0px 4px",
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
          fontSize: "calc(var(--size-text-16) * 1px)",
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "옵션 A 컨텐츠"}</span>
        {props.showSubtext && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
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
            fontSize: "calc(var(--size-text-14) * 1px)",
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "서브정보"}</span>
        </div>
        )}
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 30,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "3px 0px 3px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <SelectListSuffixes type={"tag"} />}</div>
      </div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 8,
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <SelectListPrefixes prefixes={"icon"} />}</div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 4px 0px 4px",
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
          fontSize: "calc(var(--size-text-14) * 1px)",
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "옵션 A 컨텐츠"}</span>
        {props.showSubtext && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
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
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "서브정보"}</span>
        </div>
        )}
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 30,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "1px 0px 1px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <SelectListSuffixes type={"tag"} />}</div>
      </div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 8,
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "10px 12px 10px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <SelectListPrefixes prefixes={"icon"} />}</div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 4px 0px 4px",
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
          fontSize: "calc(var(--size-text-16) * 1px)",
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "옵션 A 컨텐츠"}</span>
        {props.showSubtext && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
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
            fontSize: "calc(var(--size-text-14) * 1px)",
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "서브정보"}</span>
        </div>
        )}
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 30,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "3px 0px 3px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <SelectListSuffixes type={"tag"} />}</div>
      </div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 8,
      backgroundColor: "var(--color-white)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>
            <svg width={12.333} height={12.667} viewBox="0 0 12.333 12.667" fill="none" style={{
              position: "absolute",
              left: 1.833,
              top: 1.5,
              width: 12.333,
              height: 12.667,
              color: "var(--gray-300)",
            }}>
              <path d={"M 6.52 0.146 C 6.325 -0.049 6.008 -0.049 5.813 0.146 L 2.146 3.813 C 1.951 4.008 1.951 4.325 2.146 4.52 C 2.342 4.715 2.658 4.715 2.854 4.52 L 5.667 1.707 L 5.667 8.5 C 5.667 8.776 5.891 9 6.167 9 C 6.443 9 6.667 8.776 6.667 8.5 L 6.667 1.707 L 9.48 4.52 C 9.675 4.715 9.992 4.715 10.187 4.52 C 10.382 4.325 10.382 4.008 10.187 3.813 L 6.52 0.146 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 1 7.833 C 1 7.557 0.776 7.333 0.5 7.333 C 0.224 7.333 0 7.557 0 7.833 L 0 10.833 C 0 11.846 0.821 12.667 1.833 12.667 L 10.5 12.667 C 11.513 12.667 12.333 11.846 12.333 10.833 L 12.333 7.833 C 12.333 7.557 12.109 7.333 11.833 7.333 C 11.557 7.333 11.333 7.557 11.333 7.833 L 11.333 10.833 C 11.333 11.294 10.96 11.667 10.5 11.667 L 1.833 11.667 C 1.373 11.667 1 11.294 1 10.833 L 1 7.833 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 4px 0px 4px",
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
          fontSize: "calc(var(--size-text-14) * 1px)",
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(189,189,189)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "옵션 A 컨텐츠"}</span>
        {props.showSubtext && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
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
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "서브정보"}</span>
        </div>
        )}
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 30,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "1px 0px 1px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <SelectListSuffixes type={"tag"} />}</div>
      </div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 8,
      backgroundColor: "var(--white)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "10px 12px 10px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
          }}>
            <svg width={15.417} height={15.833} viewBox="0 0 15.417 15.833" fill="none" style={{
              position: "absolute",
              left: 2.292,
              top: 1.875,
              width: 15.417,
              height: 15.833,
              color: "var(--gray-300)",
            }}>
              <path d={"M 8.15 0.183 C 7.906 -0.061 7.51 -0.061 7.266 0.183 L 2.683 4.766 C 2.439 5.01 2.439 5.406 2.683 5.65 C 2.927 5.894 3.323 5.894 3.567 5.65 L 7.083 2.134 L 7.083 10.625 C 7.083 10.97 7.363 11.25 7.708 11.25 C 8.054 11.25 8.333 10.97 8.333 10.625 L 8.333 2.134 L 11.85 5.65 C 12.094 5.894 12.49 5.894 12.734 5.65 C 12.978 5.406 12.978 5.01 12.734 4.766 L 8.15 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 1.25 9.792 C 1.25 9.446 0.97 9.167 0.625 9.167 C 0.28 9.167 0 9.446 0 9.792 L 0 13.542 C 0 14.807 1.026 15.833 2.292 15.833 L 13.125 15.833 C 14.391 15.833 15.417 14.807 15.417 13.542 L 15.417 9.792 C 15.417 9.446 15.137 9.167 14.792 9.167 C 14.446 9.167 14.167 9.446 14.167 9.792 L 14.167 13.542 C 14.167 14.117 13.7 14.583 13.125 14.583 L 2.292 14.583 C 1.716 14.583 1.25 14.117 1.25 13.542 L 1.25 9.792 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 4px 0px 4px",
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
          fontSize: "calc(var(--size-text-16) * 1px)",
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "rgb(189,189,189)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "옵션 A 컨텐츠"}</span>
        {props.showSubtext && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
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
            fontSize: "calc(var(--size-text-14) * 1px)",
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "서브정보"}</span>
        </div>
        )}
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 30,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "3px 0px 3px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <SelectListSuffixes type={"tag"} />}</div>
      </div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 8,
      backgroundColor: "var(--color-white)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <SelectListPrefixes prefixes={"select"} />}</div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
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
          fontSize: "calc(var(--size-text-14) * 1px)",
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "옵션 A 컨텐츠"}</span>
        {props.showSubtext && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
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
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "서브정보"}</span>
        </div>
        )}
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 30,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "1px 0px 1px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <SelectListSuffixes type={"tag"} />}</div>
      </div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 8,
      backgroundColor: "var(--white)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "10px 12px 10px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <SelectListPrefixes prefixes={"select"} />}</div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
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
          fontSize: "calc(var(--size-text-16) * 1px)",
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "옵션 A 컨텐츠"}</span>
        {props.showSubtext && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
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
            fontSize: "calc(var(--size-text-14) * 1px)",
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "서브정보"}</span>
        </div>
        )}
      </div>
      {props.showSuffixes && (
      <div style={{
        position: "relative",
        width: 30,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "3px 0px 3px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <SelectListSuffixes type={"tag"} />}</div>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: state=default, size=medium
    "state=default|size=md": __body0,
    // figma: state=default, size=large
    "state=default|size=lg": __body1,
    // figma: state=hover, size=medium
    "state=hover|size=md": __body2,
    // figma: state=hover, size=large
    "state=hover|size=lg": __body3,
    // figma: state=pressed, size=medium
    "state=pressed|size=md": __body4,
    // figma: state=pressed, size=large
    "state=pressed|size=lg": __body5,
    // figma: state=disabled, size=medium
    "state=disabled|size=md": __body6,
    // figma: state=disabled, size=large
    "state=disabled|size=lg": __body7,
    // figma: state=active, size=medium
    "state=active|size=md": __body8,
    // figma: state=active, size=large
    "state=active|size=lg": __body9,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SelectListItem;
