import { BadgeDot } from './BadgeDot.jsx';
import { BadgeIcon } from './BadgeIcon.jsx';
import { IconIcPencil } from './IconIcPencil.jsx';
import { IconIcUser } from './IconIcUser.jsx';

// figma node: 4477:5065 Avatar (14 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "badge=" + __venc(p.badge);

export function Avatar(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm", badge: _p.badge ?? "none" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 24,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 24,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 18,
          top: 0,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <BadgeDot type={"primary"} size={"sm"} border={false} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 8,
          top: 8,
          width: 18,
          height: 18,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 8,
          top: 8,
          width: 18,
          height: 18,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 22,
          top: 20,
          width: 18,
          height: 18,
        }}>{props.icon2 ?? <BadgeIcon icon1={<IconIcPencil fill={true} style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />} size={"md"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 8,
          top: 8,
          width: 18,
          height: 18,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 22,
          top: 20,
          width: 18,
          height: 18,
        }}>{props.icon2 ?? <BadgeIcon icon1={<IconIcPencil fill={true} style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />} size={"md"} />}</div>
      <div style={{
          position: "absolute",
          left: 28,
          top: 4,
          width: 6,
          height: 6,
        }}>{props.icon3 ?? <BadgeDot type={"primary"} size={"sm"} border={false} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 8,
          top: 8,
          width: 18,
          height: 18,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 28,
          top: 4,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <BadgeDot type={"primary"} size={"sm"} border={false} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 11,
          top: 11,
          width: 26,
          height: 26,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(1.083, 1.083)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 11,
          top: 11,
          width: 26,
          height: 26,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(1.083, 1.083)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 34,
          top: 30,
          width: 18,
          height: 18,
        }}>{props.icon2 ?? <BadgeIcon icon1={<IconIcPencil fill={true} style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />} size={"md"} />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 11,
          top: 11,
          width: 26,
          height: 26,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(1.083, 1.083)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 34,
          top: 30,
          width: 18,
          height: 18,
        }}>{props.icon2 ?? <BadgeIcon icon1={<IconIcPencil fill={true} style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />} size={"md"} />}</div>
      <div style={{
          position: "absolute",
          left: 40,
          top: 6,
          width: 6,
          height: 6,
        }}>{props.icon3 ?? <BadgeDot type={"primary"} size={"sm"} border={false} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 11,
          top: 11,
          width: 26,
          height: 26,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(1.083, 1.083)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 40,
          top: 6,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <BadgeDot type={"primary"} size={"sm"} border={false} />}</div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 62,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 15,
          top: 15,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 62,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 15,
          top: 15,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 44,
          top: 42,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <BadgeIcon icon1={<IconIcPencil fill={true} style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />} size={"lg"} />}</div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 62,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 15,
          top: 15,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 44,
          top: 42,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <BadgeIcon icon1={<IconIcPencil fill={true} style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />} size={"lg"} />}</div>
      <div style={{
          position: "absolute",
          left: 50,
          top: 6,
          width: 8,
          height: 8,
        }}>{props.icon3 ?? <BadgeDot type={"primary"} size={"md"} border={false} />}</div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 62,
        borderRadius: "50%",
        backgroundColor: "rgb(250,250,250)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
          position: "absolute",
          left: 15,
          top: 15,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <IconIcUser fill={true} style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 50,
          top: 6,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <BadgeDot type={"primary"} size={"md"} border={false} />}</div>
    </div>
  );
  const __impls = {
    // figma: Size=Small, Badge=None
    "size=sm|badge=none": __body0,
    // figma: Size=Small, Badge=Dot
    "size=sm|badge=dot": __body1,
    // figma: Size=Medium, Badge=None
    "size=md|badge=none": __body2,
    // figma: Size=Medium, Badge=Icon
    "size=md|badge=icon": __body3,
    // figma: Size=Medium, Badge=Icon+Dot
    "size=md|badge=icon+dot": __body4,
    // figma: Size=Medium, Badge=Dot
    "size=md|badge=dot": __body5,
    // figma: Size=Large, Badge=None
    "size=lg|badge=none": __body6,
    // figma: Size=Large, Badge=Icon
    "size=lg|badge=icon": __body7,
    // figma: Size=Large, Badge=Icon+Dot
    "size=lg|badge=icon+dot": __body8,
    // figma: Size=Large, Badge=Dot
    "size=lg|badge=dot": __body9,
    // figma: Size=XLarge, Badge=None
    "size=xl|badge=none": __body10,
    // figma: Size=XLarge, Badge=Icon
    "size=xl|badge=icon": __body11,
    // figma: Size=XLarge, Badge=Icon+Dot
    "size=xl|badge=icon+dot": __body12,
    // figma: Size=XLarge, Badge=Dot
    "size=xl|badge=dot": __body13,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Avatar;
