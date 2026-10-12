import { CheckCheckBox } from './CheckCheckBox.jsx';

// figma node: 952:3206 check-list/check-box (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "stack=" + __venc(p.stack) + '|' + "description=" + __venc(p.description);

export function CheckListCheckBox(_p = {}) {
  const props = { ..._p, stack: _p.stack ?? "horizontal", description: _p.description ?? false };
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
        }}>{props.icon1 ?? <CheckCheckBox state={"check"} description={false} size={"md"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <CheckCheckBox state={"check"} description={false} size={"md"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <CheckCheckBox state={"check"} description={false} size={"md"} />}</div>
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
      <CheckCheckBox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"check"}
        description={true}
        size={"lg"}
      />
      <CheckCheckBox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"check"}
        description={true}
        size={"lg"}
      />
      <CheckCheckBox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"check"}
        description={true}
        size={"lg"}
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
        <CheckCheckBox
          style={{ position: "relative", width: 336, flexShrink: 0 }}
          state={"check"}
          description={false}
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
        <CheckCheckBox
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          state={"check"}
          description={false}
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
        <CheckCheckBox
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          state={"check"}
          description={false}
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
        <CheckCheckBox
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          state={"check"}
          description={true}
          size={"lg"}
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
        <CheckCheckBox
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          state={"check"}
          description={true}
          size={"lg"}
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
        <CheckCheckBox
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          state={"check"}
          description={true}
          size={"lg"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: stack=horizontal, description=false
    "stack=horizontal|description=false": __body0,
    // figma: stack=horizontal, description=true
    "stack=horizontal|description=true": __body1,
    // figma: stack=vertical, description=false
    "stack=vertical|description=false": __body2,
    // figma: stack=vertical, description=true
    "stack=vertical|description=true": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default CheckListCheckBox;
