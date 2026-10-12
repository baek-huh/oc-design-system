import { ItemTab } from './ItemTab.jsx';

// figma node: 3364:7517 Tab (24 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size) + '|' + "tabType=" + __venc(p.tabType);

export function Tab(_p = {}) {
  const props = { ..._p, type: _p.type ?? "text", size: _p.size ?? "sm", tabType: _p.tabType ?? "scrollable - 2tabs" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemTab type={"text"} size={"md"} update={false} state={"selected"} icon={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemTab type={"text"} size={"md"} update={false} state={"unselected"} icon={false} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"md"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"md"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemTab type={"text"} size={"lg"} update={false} state={"selected"} icon={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemTab type={"text"} size={"lg"} update={false} state={"unselected"} icon={false} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"lg"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"lg"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemTab type={"text"} size={"md"} update={false} state={"selected"} icon={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemTab type={"text"} size={"md"} update={false} state={"unselected"} icon={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemTab type={"text"} size={"md"} update={false} state={"unselected"} icon={false} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"md"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"md"}
        update={false}
        state={"unselected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"md"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemTab type={"text"} size={"lg"} update={false} state={"selected"} icon={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemTab type={"text"} size={"lg"} update={false} state={"unselected"} icon={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemTab type={"text"} size={"lg"} update={false} state={"unselected"} icon={false} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"lg"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"lg"}
        update={false}
        state={"unselected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"lg"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemTab type={"text"} size={"sm"} update={false} state={"selected"} icon={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemTab type={"text"} size={"sm"} update={false} state={"unselected"} icon={false} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"sm"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"sm"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemTab type={"text"} size={"sm"} update={false} state={"selected"} icon={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemTab type={"text"} size={"sm"} update={false} state={"unselected"} icon={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemTab type={"text"} size={"sm"} update={false} state={"unselected"} icon={false} />}</div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"sm"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"sm"}
        update={false}
        state={"unselected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"text"}
        size={"sm"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"box"}
        size={"lg"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"box"}
        size={"lg"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"lg"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"lg"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"box"}
        size={"md"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"box"}
        size={"md"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"md"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"md"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemTab type={"box"} size={"sm"} update={false} state={"selected"} icon={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemTab type={"box"} size={"sm"} update={false} state={"unselected"} icon={false} />}</div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"sm"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"sm"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"box"}
        size={"md"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"box"}
        size={"md"}
        update={false}
        state={"unselected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"box"}
        size={"md"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"md"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"md"}
        update={false}
        state={"unselected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"md"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"box"}
        size={"lg"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"box"}
        size={"lg"}
        update={false}
        state={"unselected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"box"}
        size={"lg"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"lg"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"lg"}
        update={false}
        state={"unselected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"lg"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemTab type={"box"} size={"sm"} update={false} state={"selected"} icon={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemTab type={"box"} size={"sm"} update={false} state={"unselected"} icon={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemTab type={"box"} size={"sm"} update={false} state={"unselected"} icon={false} />}</div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"sm"}
        update={false}
        state={"selected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"sm"}
        update={false}
        state={"unselected"}
        icon={false}
      />
      <ItemTab
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        type={"box"}
        size={"sm"}
        update={false}
        state={"unselected"}
        icon={false}
      />
    </div>
  );
  const __impls = {
    // figma: Type=Text, Size=Medium, Tab Type=Scrollable - 2Tabs
    "type=text|size=md|tabType=scrollable - 2tabs": __body0,
    // figma: Type=Text, Size=Medium, Tab Type=Fixed - 2Tabs
    "type=text|size=md|tabType=fixed - 2tabs": __body1,
    // figma: Type=Text, Size=Large, Tab Type=Scrollable - 2Tabs
    "type=text|size=lg|tabType=scrollable - 2tabs": __body2,
    // figma: Type=Text, Size=Large, Tab Type=Fixed - 2Tabs
    "type=text|size=lg|tabType=fixed - 2tabs": __body3,
    // figma: Type=Text, Size=Medium, Tab Type=Scrollable - 3Tabs
    "type=text|size=md|tabType=scrollable - 3tabs": __body4,
    // figma: Type=Text, Size=Medium, Tab Type=Fixed - 3Tabs
    "type=text|size=md|tabType=fixed - 3tabs": __body5,
    // figma: Type=Text, Size=Large, Tab Type=Scrollable - 3Tabs
    "type=text|size=lg|tabType=scrollable - 3tabs": __body6,
    // figma: Type=Text, Size=Large, Tab Type=Fixed - 3Tabs
    "type=text|size=lg|tabType=fixed - 3tabs": __body7,
    // figma: Type=Text, Size=Small, Tab Type=Scrollable - 2Tabs
    "type=text|size=sm|tabType=scrollable - 2tabs": __body8,
    // figma: Type=Text, Size=Small, Tab Type=Fixed - 2Tabs
    "type=text|size=sm|tabType=fixed - 2tabs": __body9,
    // figma: Type=Text, Size=Small, Tab Type=Scrollable - 3Tabs
    "type=text|size=sm|tabType=scrollable - 3tabs": __body10,
    // figma: Type=Text, Size=Small, Tab Type=Fixed - 3Tabs
    "type=text|size=sm|tabType=fixed - 3tabs": __body11,
    // figma: Type=Box, Size=Large, Tab Type=Scrollable - 2Tabs
    "type=box|size=lg|tabType=scrollable - 2tabs": __body12,
    // figma: Type=Box, Size=Large, Tab Type=Fixed - 2Tabs
    "type=box|size=lg|tabType=fixed - 2tabs": __body13,
    // figma: Type=Box, Size=Medium, Tab Type=Scrollable - 2Tabs
    "type=box|size=md|tabType=scrollable - 2tabs": __body14,
    // figma: Type=Box, Size=Medium, Tab Type=Fixed - 2Tabs
    "type=box|size=md|tabType=fixed - 2tabs": __body15,
    // figma: Type=Box, Size=Small, Tab Type=Scrollable - 2Tabs
    "type=box|size=sm|tabType=scrollable - 2tabs": __body16,
    // figma: Type=Box, Size=Small, Tab Type=Fixed - 2Tabs
    "type=box|size=sm|tabType=fixed - 2tabs": __body17,
    // figma: Type=Box, Size=Medium, Tab Type=Scrollable - 3Tabs
    "type=box|size=md|tabType=scrollable - 3tabs": __body18,
    // figma: Type=Box, Size=Medium, Tab Type=Fixed - 3Tabs
    "type=box|size=md|tabType=fixed - 3tabs": __body19,
    // figma: Type=Box, Size=Large, Tab Type=Scrollable - 3Tabs
    "type=box|size=lg|tabType=scrollable - 3tabs": __body20,
    // figma: Type=Box, Size=Large, Tab Type=Fixed - 3Tabs
    "type=box|size=lg|tabType=fixed - 3tabs": __body21,
    // figma: Type=Box, Size=Small, Tab Type=Scrollable - 3Tabs
    "type=box|size=sm|tabType=scrollable - 3tabs": __body22,
    // figma: Type=Box, Size=Small, Tab Type=Fixed - 3Tabs
    "type=box|size=sm|tabType=fixed - 3tabs": __body23,
  };
  return (__impls[__vkey(props)] ?? __body8)();
}
export default Tab;
