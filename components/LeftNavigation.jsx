import { Divider } from './Divider.jsx';
import { IconButtonOutline } from './IconButtonOutline.jsx';
import { IconIcArrowLeft } from './IconIcArrowLeft.jsx';
import { IconIcArrowRight } from './IconIcArrowRight.jsx';
import { IconIcArrowUp } from './IconIcArrowUp.jsx';
import { ItemMenu } from './ItemMenu.jsx';
import { ItemMenuIcon } from './ItemMenuIcon.jsx';
import { ItemSectionTitle } from './ItemSectionTitle.jsx';

// figma node: 1619:7177 Left Navigation (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function LeftNavigation(_p = {}) {
  const props = { ..._p, state: _p.state ?? "expandable" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 1011,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "absolute", left: 188, top: 947 }}>{props.icon1 ?? <IconButtonOutline icon1={<IconIcArrowLeft small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} size={"md"} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <ItemSectionTitle style={{ position: "relative", width: 240, flexShrink: 0 }} />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={true}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          type={"parent"}
          state={"default"}
          disclosure={true}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          type={"parent"}
          state={"hover/focus"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={true}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          type={"parent"}
          state={"default"}
          disclosure={true}
          badge={false}
          tag={false}
        />
        <Divider
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          hierarchy={"hierarchy-2"}
          margin={"12px"}
        />
        <ItemSectionTitle style={{ position: "relative", width: 240, flexShrink: 0 }} />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          icon2={<IconIcArrowUp small={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={true}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          type={"child"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          type={"child"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          type={"child"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 60,
      height: 1011,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 8,
        top: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <ItemMenuIcon state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <ItemMenuIcon state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <ItemMenuIcon state={"hover/focus"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon4 ?? <ItemMenuIcon state={"default"} dotBadge={true} />}</div>
        <ItemMenuIcon
          style={{ position: "relative", flexShrink: 0 }}
          state={"default"}
          dotBadge={false}
        />
        <Divider
          style={{ position: "relative", width: 44, flexShrink: 0 }}
          hierarchy={"hierarchy-2"}
          margin={"12px"}
        />
        <ItemMenuIcon
          style={{ position: "relative", flexShrink: 0 }}
          state={"default"}
          dotBadge={false}
        />
      </div>
      <IconButtonOutline
        style={{ position: "absolute", left: 10, top: 947 }}
        icon1={<IconIcArrowRight small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
        state={"default"}
        size={"md"}
      />
    </div>
  );
  const __impls = {
    // figma: State=Expandable
    "state=expandable": __body0,
    // figma: State=Compact
    "state=compact": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default LeftNavigation;
