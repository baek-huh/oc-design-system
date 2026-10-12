import { Avatar } from './Avatar.jsx';
import { ItemProfileLabel } from './ItemProfileLabel.jsx';

// figma node: 6007:5280 Profile (24 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "stack=" + __venc(p.stack) + '|' + "style2=" + __venc(p.style2);

export function Profile(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm", stack: _p.stack ?? "horizontal", style2: _p.style2 ?? "label" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
        }}>{props.icon1 ?? <Avatar size={"sm"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          width: 31,
          height: 18,
          flexShrink: 0,
        }}>{props.icon2 ?? <ItemProfileLabel size={"sm"} style2={"label"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
        }}>{props.icon1 ?? <Avatar size={"sm"} badge={"none"} />}</div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <ItemProfileLabel size={"sm"} style2={"horizontal"} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Avatar size={"sm"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemProfileLabel size={"sm"} style2={"vertical"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <Avatar size={"xl"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          width: 51,
          height: 30,
          flexShrink: 0,
        }}>{props.icon2 ?? <ItemProfileLabel size={"xl"} style2={"label"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Avatar size={"xl"} badge={"none"} />}</div>
      <ItemProfileLabel
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"xl"}
        style2={"horizontal"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <Avatar size={"xl"} badge={"none"} />}</div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <ItemProfileLabel size={"xl"} style2={"verticalcenter"} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <Avatar size={"lg"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          height: 26,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ItemProfileLabel size={"lg"} style2={"label"} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Avatar size={"lg"} badge={"none"} />}</div>
      <ItemProfileLabel
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"lg"}
        style2={"horizontal"}
      />
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <Avatar size={"lg"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ItemProfileLabel size={"lg"} style2={"verticalcenter"} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <Avatar size={"md"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          height: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ItemProfileLabel size={"md"} style2={"label"} />}</div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Avatar size={"md"} badge={"none"} />}</div>
      <ItemProfileLabel
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        style2={"horizontal"}
      />
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Avatar size={"md"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ItemProfileLabel size={"md"} style2={"verticalcenter"} />}</div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Avatar size={"sm"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          height: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ItemProfileLabel size={"sm"} style2={"label"} />}</div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Avatar size={"sm"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ItemProfileLabel size={"sm"} style2={"horizontal"} />}</div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Avatar size={"sm"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ItemProfileLabel size={"sm"} style2={"verticalcenter"} />}</div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
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
        }}>{props.icon1 ?? <Avatar size={"xl"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          width: 51,
          height: 30,
          flexShrink: 0,
        }}>{props.icon2 ?? <ItemProfileLabel size={"xl"} style2={"label"} />}</div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
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
        }}>{props.icon1 ?? <Avatar size={"xl"} badge={"none"} />}</div>
      <ItemProfileLabel
        style={{ position: "relative", flexShrink: 0 }}
        size={"xl"}
        style2={"horizontal"}
      />
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
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
        }}>{props.icon1 ?? <Avatar size={"xl"} badge={"none"} />}</div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <ItemProfileLabel size={"xl"} style2={"vertical"} />}</div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
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
        }}>{props.icon1 ?? <Avatar size={"lg"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          width: 46,
          height: 26,
          flexShrink: 0,
        }}>{props.icon2 ?? <ItemProfileLabel size={"lg"} style2={"label"} />}</div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
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
        }}>{props.icon1 ?? <Avatar size={"lg"} badge={"none"} />}</div>
      <ItemProfileLabel
        style={{ position: "relative", flexShrink: 0 }}
        size={"lg"}
        style2={"horizontal"}
      />
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
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
        }}>{props.icon1 ?? <Avatar size={"lg"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemProfileLabel size={"lg"} style2={"vertical"} />}</div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
        }}>{props.icon1 ?? <Avatar size={"md"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <ItemProfileLabel size={"md"} style2={"label"} />}</div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
        }}>{props.icon1 ?? <Avatar size={"md"} badge={"none"} />}</div>
      <ItemProfileLabel
        style={{ position: "relative", flexShrink: 0 }}
        size={"md"}
        style2={"horizontal"}
      />
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Avatar size={"md"} badge={"none"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemProfileLabel size={"md"} style2={"vertical"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Size=Small, Stack=Horizontal, Style=Label
    "size=sm|stack=horizontal|style2=label": __body0,
    // figma: Size=Small, Stack=Horizontal, Style=Label ➡️Option
    "size=sm|stack=horizontal|style2=label ➡️option": __body1,
    // figma: Size=Small, Stack=Horizontal, Style=Label ⬇️Option
    "size=sm|stack=horizontal|style2=label ⬇️option": __body2,
    // figma: Size=XLarge, Stack=Vertical, Style=Label
    "size=xl|stack=vertical|style2=label": __body3,
    // figma: Size=XLarge, Stack=Vertical, Style=Label ➡️Option
    "size=xl|stack=vertical|style2=label ➡️option": __body4,
    // figma: Size=XLarge, Stack=Vertical, Style=Label ⬇️Option
    "size=xl|stack=vertical|style2=label ⬇️option": __body5,
    // figma: Size=Large, Stack=Vertical, Style=Label
    "size=lg|stack=vertical|style2=label": __body6,
    // figma: Size=Large, Stack=Vertical, Style=Label ➡️Option
    "size=lg|stack=vertical|style2=label ➡️option": __body7,
    // figma: Size=Large, Stack=Vertical, Style=Label ⬇️Option
    "size=lg|stack=vertical|style2=label ⬇️option": __body8,
    // figma: Size=Medium, Stack=Vertical, Style=Label
    "size=md|stack=vertical|style2=label": __body9,
    // figma: Size=Medium, Stack=Vertical, Style=Label ➡️Option
    "size=md|stack=vertical|style2=label ➡️option": __body10,
    // figma: Size=Medium, Stack=Vertical, Style=Label ⬇️Option
    "size=md|stack=vertical|style2=label ⬇️option": __body11,
    // figma: Size=Small, Stack=Vertical, Style=Label
    "size=sm|stack=vertical|style2=label": __body12,
    // figma: Size=Small, Stack=Vertical, Style=Label ➡️Option
    "size=sm|stack=vertical|style2=label ➡️option": __body13,
    // figma: Size=Small, Stack=Vertical, Style=Label ⬇️Option
    "size=sm|stack=vertical|style2=label ⬇️option": __body14,
    // figma: Size=XLarge, Stack=Horizontal, Style=Label
    "size=xl|stack=horizontal|style2=label": __body15,
    // figma: Size=XLarge, Stack=Horizontal, Style=Label ➡️Option
    "size=xl|stack=horizontal|style2=label ➡️option": __body16,
    // figma: Size=XLarge, Stack=Horizontal, Style=Label ⬇️Option
    "size=xl|stack=horizontal|style2=label ⬇️option": __body17,
    // figma: Size=Large, Stack=Horizontal, Style=Label
    "size=lg|stack=horizontal|style2=label": __body18,
    // figma: Size=Large, Stack=Horizontal, Style=Label ➡️Option
    "size=lg|stack=horizontal|style2=label ➡️option": __body19,
    // figma: Size=Large, Stack=Horizontal, Style=Label ⬇️Option
    "size=lg|stack=horizontal|style2=label ⬇️option": __body20,
    // figma: Size=Medium, Stack=Horizontal, Style=Label
    "size=md|stack=horizontal|style2=label": __body21,
    // figma: Size=Medium, Stack=Horizontal, Style=Label ➡️Option
    "size=md|stack=horizontal|style2=label ➡️option": __body22,
    // figma: Size=Medium, Stack=Horizontal, Style=Label ⬇️Option
    "size=md|stack=horizontal|style2=label ⬇️option": __body23,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Profile;
