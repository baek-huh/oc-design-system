// figma node: 10226:1639 icon/ic-chat-bubble-dots (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcChatBubbleDots(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={20.500} height={18.348} viewBox="0 0 20.500 18.348" fill="none" style={{
        position: "absolute",
        left: 1.75,
        top: 2.75,
        width: 20.5,
        height: 18.348,
      }}>
        <path d={"M 6.25 9.25 C 7.078 9.25 7.75 8.578 7.75 7.75 C 7.75 6.922 7.078 6.25 6.25 6.25 C 5.422 6.25 4.75 6.922 4.75 7.75 C 4.75 8.578 5.422 9.25 6.25 9.25 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 10.25 9.25 C 11.078 9.25 11.75 8.578 11.75 7.75 C 11.75 6.922 11.078 6.25 10.25 6.25 C 9.422 6.25 8.75 6.922 8.75 7.75 C 8.75 8.578 9.422 9.25 10.25 9.25 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 15.75 7.75 C 15.75 8.578 15.078 9.25 14.25 9.25 C 13.422 9.25 12.75 8.578 12.75 7.75 C 12.75 6.922 13.422 6.25 14.25 6.25 C 15.078 6.25 15.75 6.922 15.75 7.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 7.75 0 C 3.47 0 0 3.47 0 7.75 C 0 10.671 1.616 13.213 4 14.534 L 4 17.096 C 4 18.19 5.307 18.756 6.105 18.008 L 8.78 15.5 L 12.75 15.5 C 17.03 15.5 20.5 12.03 20.5 7.75 C 20.5 3.47 17.03 0 12.75 0 L 7.75 0 Z M 1.5 7.75 C 1.5 4.298 4.298 1.5 7.75 1.5 L 12.75 1.5 C 16.202 1.5 19 4.298 19 7.75 C 19 11.202 16.202 14 12.75 14 L 8.483 14 C 8.293 14 8.109 14.073 7.97 14.203 L 5.5 16.519 L 5.5 14.076 C 5.5 13.787 5.333 13.523 5.072 13.399 C 2.959 12.395 1.5 10.242 1.5 7.75 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={20.500} height={18.348} viewBox="0 0 20.500 18.348" fill="none" style={{
        position: "absolute",
        left: 1.75,
        top: 2.75,
        width: 20.5,
        height: 18.348,
      }}>
        <path d={"M 0 7.75 C 0 3.47 3.47 0 7.75 0 L 12.75 0 C 17.03 0 20.5 3.47 20.5 7.75 C 20.5 12.03 17.03 15.5 12.75 15.5 L 8.78 15.5 L 6.105 18.008 C 5.307 18.756 4 18.19 4 17.096 L 4 14.534 C 1.616 13.213 0 10.671 0 7.75 Z M 10.25 9.25 C 11.078 9.25 11.75 8.578 11.75 7.75 C 11.75 6.922 11.078 6.25 10.25 6.25 C 9.422 6.25 8.75 6.922 8.75 7.75 C 8.75 8.578 9.422 9.25 10.25 9.25 Z M 7.75 7.75 C 7.75 8.578 7.078 9.25 6.25 9.25 C 5.422 9.25 4.75 8.578 4.75 7.75 C 4.75 6.922 5.422 6.25 6.25 6.25 C 7.078 6.25 7.75 6.922 7.75 7.75 Z M 14.25 9.25 C 15.078 9.25 15.75 8.578 15.75 7.75 C 15.75 6.922 15.078 6.25 14.25 6.25 C 13.422 6.25 12.75 6.922 12.75 7.75 C 12.75 8.578 13.422 9.25 14.25 9.25 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: fill=false
    "fill=false": __body0,
    // figma: fill=true
    "fill=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default IconIcChatBubbleDots;
