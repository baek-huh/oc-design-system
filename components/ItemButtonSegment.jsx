import { BoxButtonSecondary } from './BoxButtonSecondary.jsx';

// figma node: 1508:5468 Item/ButtonSegment (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "type=" + __venc(p.type);

export function ItemButtonSegment(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm", type: _p.type ?? "right" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <BoxButtonSecondary state={"default"} size={"sm"} icon={"none"} />}</div>
      <div style={{
        position: "relative",
        width: 1,
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
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <BoxButtonSecondary state={"default"} size={"sm"} icon={"none"} />}</div>
      <div style={{
        position: "relative",
        width: 1,
        backgroundColor: "rgb(224,224,224)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <BoxButtonSecondary state={"default"} size={"sm"} icon={"none"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <BoxButtonSecondary state={"default"} size={"md"} icon={"none"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <BoxButtonSecondary state={"default"} size={"md"} icon={"none"} />}</div>
      <div style={{
        position: "relative",
        width: 1,
        backgroundColor: "rgb(217,217,217)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <BoxButtonSecondary state={"default"} size={"md"} icon={"none"} />}</div>
      <div style={{
        position: "relative",
        width: 1,
        backgroundColor: "rgb(224,224,224)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <BoxButtonSecondary state={"default"} size={"lg"} icon={"none"} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <BoxButtonSecondary state={"default"} size={"lg"} icon={"none"} />}</div>
      <div style={{
        position: "relative",
        width: 1,
        backgroundColor: "rgb(224,224,224)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __impls = {
    // figma: Size=Small, Type=Left
    "size=sm|type=left": __body0,
    // figma: Size=Small, Type=Center
    "size=sm|type=center": __body1,
    // figma: Size=Small, Type=Right
    "size=sm|type=right": __body2,
    // figma: Size=Medium, Type=Right
    "size=md|type=right": __body3,
    // figma: Size=Medium, Type=Left
    "size=md|type=left": __body4,
    // figma: Size=Medium, Type=Center
    "size=md|type=center": __body5,
    // figma: Size=Large, Type=Right
    "size=lg|type=right": __body6,
    // figma: Size=Large, Type=Left
    "size=lg|type=left": __body7,
    // figma: Size=Large, Type=Center
    "size=lg|type=center": __body7,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default ItemButtonSegment;
