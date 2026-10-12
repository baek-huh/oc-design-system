import { Blank } from './Blank.jsx';
import { ProgressIndicators } from './ProgressIndicators.jsx';

// figma node: 4417:4606 Progress Indicator Tracker (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "itemLeft=" + __venc(p.itemLeft) + '|' + "itemRight=" + __venc(p.itemRight) + '|' + "suffixPrefix=" + __venc(p.suffixPrefix) + '|' + "itemTop=" + __venc(p.itemTop) + '|' + "itemBottom=" + __venc(p.itemBottom) + '|' + "itemMiddle=" + __venc(p.itemMiddle);

export function ProgressIndicatorTracker(_p = {}) {
  const props = { ..._p, itemLeft: _p.itemLeft ?? false, itemRight: _p.itemRight ?? false, suffixPrefix: _p.suffixPrefix ?? false, itemTop: _p.itemTop ?? false, itemBottom: _p.itemBottom ?? false, itemMiddle: _p.itemMiddle ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 432,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Blank style={{ position: "relative", flexShrink: 0 }} />
      <ProgressIndicators
        style={{
          position: "relative",
          height: 2,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"2px"}
        color={"gray 700"}
        gauge={true}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 432,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Blank style={{ position: "relative", flexShrink: 0 }} />
      <ProgressIndicators
        style={{
          position: "relative",
          height: 2,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"2px"}
        color={"gray 700"}
        gauge={true}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 432,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Blank style={{ position: "relative", flexShrink: 0 }} />
        <Blank style={{ position: "relative", flexShrink: 0 }} />
      </div>
      <ProgressIndicators
        style={{
          position: "relative",
          height: 2,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"2px"}
        color={"gray 700"}
        gauge={true}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 432,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ProgressIndicators
        style={{
          position: "relative",
          height: 2,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"2px"}
        color={"gray 700"}
        gauge={true}
      />
      <Blank style={{ position: "relative", flexShrink: 0 }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 432,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ProgressIndicators
        style={{
          position: "relative",
          height: 2,
          flexGrow: 1,
          width: "auto",
        }}
        size={"2px"}
        color={"gray 700"}
        gauge={true}
      />
      <Blank style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 432,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ProgressIndicators
        style={{
          position: "relative",
          height: 2,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"2px"}
        color={"gray 700"}
        gauge={true}
      />
      <Blank style={{ position: "relative", flexShrink: 0 }} />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 432,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Blank style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
      <ProgressIndicators
        style={{
          position: "relative",
          height: 2,
          flexGrow: 1,
          width: "auto",
        }}
        size={"2px"}
        color={"gray 700"}
        gauge={true}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 432,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Blank style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
      <ProgressIndicators
        style={{
          position: "relative",
          height: 2,
          flexGrow: 1,
          width: "auto",
        }}
        size={"2px"}
        color={"gray 700"}
        gauge={true}
      />
      <Blank style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 432,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ProgressIndicators
        style={{
          position: "relative",
          height: 2,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"2px"}
        color={"gray 700"}
        gauge={true}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Blank style={{ position: "relative", flexShrink: 0 }} />
        <Blank style={{ position: "relative", flexShrink: 0 }} />
      </div>
    </div>
  );
  const __impls = {
    // figma: ItemLeft=True, ItemRight=False, Suffix-Prefix=False, ItemTop=True, ItemBottom=False, ItemMiddle=False
    "itemLeft=true|itemRight=false|suffixPrefix=false|itemTop=true|itemBottom=false|itemMiddle=false": __body0,
    // figma: ItemLeft=False, ItemRight=True, Suffix-Prefix=False, ItemTop=True, ItemBottom=False, ItemMiddle=False
    "itemLeft=false|itemRight=true|suffixPrefix=false|itemTop=true|itemBottom=false|itemMiddle=false": __body1,
    // figma: ItemLeft=False, ItemRight=False, Suffix-Prefix=True, ItemTop=True, ItemBottom=False, ItemMiddle=False
    "itemLeft=false|itemRight=false|suffixPrefix=true|itemTop=true|itemBottom=false|itemMiddle=false": __body2,
    // figma: ItemLeft=True, ItemRight=False, Suffix-Prefix=False, ItemTop=False, ItemBottom=True, ItemMiddle=False
    "itemLeft=true|itemRight=false|suffixPrefix=false|itemTop=false|itemBottom=true|itemMiddle=false": __body3,
    // figma: ItemLeft=False, ItemRight=True, Suffix-Prefix=False, ItemTop=False, ItemBottom=False, ItemMiddle=True
    "itemLeft=false|itemRight=true|suffixPrefix=false|itemTop=false|itemBottom=false|itemMiddle=true": __body4,
    // figma: ItemLeft=False, ItemRight=True, Suffix-Prefix=False, ItemTop=False, ItemBottom=True, ItemMiddle=False
    "itemLeft=false|itemRight=true|suffixPrefix=false|itemTop=false|itemBottom=true|itemMiddle=false": __body5,
    // figma: ItemLeft=True, ItemRight=False, Suffix-Prefix=False, ItemTop=False, ItemBottom=False, ItemMiddle=True
    "itemLeft=true|itemRight=false|suffixPrefix=false|itemTop=false|itemBottom=false|itemMiddle=true": __body6,
    // figma: ItemLeft=False, ItemRight=False, Suffix-Prefix=True, ItemTop=False, ItemBottom=False, ItemMiddle=True
    "itemLeft=false|itemRight=false|suffixPrefix=true|itemTop=false|itemBottom=false|itemMiddle=true": __body7,
    // figma: ItemLeft=False, ItemRight=False, Suffix-Prefix=True, ItemTop=False, ItemBottom=True, ItemMiddle=False
    "itemLeft=false|itemRight=false|suffixPrefix=true|itemTop=false|itemBottom=true|itemMiddle=false": __body8,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ProgressIndicatorTracker;
