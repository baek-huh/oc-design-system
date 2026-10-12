import { CheckRadio } from './CheckRadio.jsx';

// figma node: 952:3488 CheckList/Radio (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "orientation=" + __venc(p.orientation) + '|' + "description=" + __venc(p.description);

export function CheckListRadio(_p = {}) {
  const props = { ..._p, orientation: _p.orientation ?? "horizontal", description: _p.description ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 60,
      padding: "12px 0px 12px 0px",
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
        }}>{props.icon1 ?? <CheckRadio state={"check"} description={false} checked={"true"} size={"md"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <CheckRadio state={"check"} description={false} checked={"true"} size={"md"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <CheckRadio state={"check"} description={false} checked={"true"} size={"md"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 60,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <CheckRadio
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"check"}
        description={true}
        checked={"check"}
        size={"md"}
      />
      <CheckRadio
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"check"}
        description={true}
        checked={"check"}
        size={"md"}
      />
      <CheckRadio
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"check"}
        description={true}
        checked={"check"}
        size={"md"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 0px 12px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <CheckRadio
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          state={"check"}
          description={false}
          checked={"true"}
          size={"md"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 0px 12px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <CheckRadio
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          state={"check"}
          description={false}
          checked={"true"}
          size={"md"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 0px 12px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <CheckRadio
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          state={"check"}
          description={false}
          checked={"true"}
          size={"md"}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 0px 12px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <CheckRadio
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          state={"check"}
          description={true}
          checked={"check"}
          size={"md"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 0px 12px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <CheckRadio
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          state={"check"}
          description={true}
          checked={"check"}
          size={"md"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 0px 12px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <CheckRadio
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          state={"check"}
          description={true}
          checked={"check"}
          size={"md"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Orientation=Horizontal, Description=False
    "orientation=horizontal|description=false": __body0,
    // figma: Orientation=Horizontal, Description=True
    "orientation=horizontal|description=true": __body1,
    // figma: Orientation=Vertical, Description=False
    "orientation=vertical|description=false": __body2,
    // figma: Orientation=Vertical, Description=True
    "orientation=vertical|description=true": __body3,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default CheckListRadio;
