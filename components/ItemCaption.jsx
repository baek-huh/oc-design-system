
// figma node: 4719:543 Item/Caption (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "number=" + __venc(p.number) + '|' + "color=" + __venc(p.color);

export function ItemCaption(_p = {}) {
  const props = { ..._p, number: _p.number ?? "1", color: _p.color ?? "gray 700" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(97,97,97)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Caption"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(34,119,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Caption"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
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
          height: "auto",
        }}>{props.icon1 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
      <div style={{
        position: "relative",
        width: 1.5,
        height: 1.5,
        borderRadius: "50%",
        backgroundColor: "rgb(97,97,97)",
        flexShrink: 0,
      }} />
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
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
          height: "auto",
        }}>{props.icon1 ?? <ItemCaption number={"1"} color={"primary"} />}</div>
      <div style={{
        position: "relative",
        width: 1.5,
        height: 1.5,
        borderRadius: "50%",
        backgroundColor: "rgb(97,97,97)",
        flexShrink: 0,
      }} />
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
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
          height: "auto",
        }}>{props.icon1 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
      <div style={{
        position: "relative",
        width: 1.5,
        height: 1.5,
        borderRadius: "50%",
        backgroundColor: "rgb(97,97,97)",
        flexShrink: 0,
      }} />
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
      <div style={{
        position: "relative",
        width: 1.5,
        height: 1.5,
        borderRadius: "50%",
        backgroundColor: "rgb(97,97,97)",
        flexShrink: 0,
      }} />
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
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
          height: "auto",
        }}>{props.icon1 ?? <ItemCaption number={"1"} color={"primary"} />}</div>
      <div style={{
        position: "relative",
        width: 1.5,
        height: 1.5,
        borderRadius: "50%",
        backgroundColor: "rgb(97,97,97)",
        flexShrink: 0,
      }} />
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
      <div style={{
        position: "relative",
        width: 1.5,
        height: 1.5,
        borderRadius: "50%",
        backgroundColor: "rgb(97,97,97)",
        flexShrink: 0,
      }} />
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
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
          height: "auto",
        }}>{props.icon1 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
      <div style={{
        position: "relative",
        width: 1.5,
        height: 1.5,
        borderRadius: "50%",
        backgroundColor: "rgb(97,97,97)",
        flexShrink: 0,
      }} />
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
      <div style={{
        position: "relative",
        width: 1.5,
        height: 1.5,
        borderRadius: "50%",
        backgroundColor: "rgb(97,97,97)",
        flexShrink: 0,
      }} />
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
      <div style={{
        position: "relative",
        width: 1.5,
        height: 1.5,
        borderRadius: "50%",
        backgroundColor: "rgb(97,97,97)",
        flexShrink: 0,
      }} />
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
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
          height: "auto",
        }}>{props.icon1 ?? <ItemCaption number={"1"} color={"primary"} />}</div>
      <div style={{
        position: "relative",
        width: 1.5,
        height: 1.5,
        borderRadius: "50%",
        backgroundColor: "rgb(97,97,97)",
        flexShrink: 0,
      }} />
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
      <div style={{
        position: "relative",
        width: 1.5,
        height: 1.5,
        borderRadius: "50%",
        backgroundColor: "rgb(97,97,97)",
        flexShrink: 0,
      }} />
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
      <div style={{
        position: "relative",
        width: 1.5,
        height: 1.5,
        borderRadius: "50%",
        backgroundColor: "rgb(97,97,97)",
        flexShrink: 0,
      }} />
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <ItemCaption number={"1"} color={"gray 700"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Number=1, Color=Gray 700
    "number=1|color=gray 700": __body0,
    // figma: Number=1, Color=Primary
    "number=1|color=primary": __body1,
    // figma: Number=2, Color=Gray 700
    "number=2|color=gray 700": __body2,
    // figma: Number=2, Color=Primary
    "number=2|color=primary": __body3,
    // figma: Number=3, Color=Gray 700
    "number=3|color=gray 700": __body4,
    // figma: Number=3, Color=Primary
    "number=3|color=primary": __body5,
    // figma: Number=4, Color=Gray 700
    "number=4|color=gray 700": __body6,
    // figma: Number=4, Color=Primary
    "number=4|color=primary": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemCaption;
