// figma node: 10227:5857 icon/ic-compass (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcCompass(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={21.500} height={21.500} viewBox="0 0 21.500 21.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 1.25,
        width: 21.5,
        height: 21.5,
      }}>
        <path d={"M 15.523 5.977 C 15.737 6.191 15.801 6.513 15.686 6.793 L 13.211 12.803 C 13.135 12.988 12.988 13.135 12.803 13.211 L 6.793 15.686 C 6.513 15.801 6.191 15.737 5.977 15.523 C 5.763 15.309 5.699 14.987 5.814 14.707 L 8.289 8.697 C 8.365 8.512 8.512 8.365 8.697 8.289 L 14.707 5.814 C 14.987 5.699 15.309 5.763 15.523 5.977 Z M 9.557 9.557 L 7.886 13.614 L 11.943 11.943 L 9.557 9.557 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 0 10.75 C 0 4.813 4.813 0 10.75 0 C 16.687 0 21.5 4.813 21.5 10.75 C 21.5 16.687 16.687 21.5 10.75 21.5 C 4.813 21.5 0 16.687 0 10.75 Z M 10.75 1.5 C 5.641 1.5 1.5 5.641 1.5 10.75 C 1.5 15.859 5.641 20 10.75 20 C 15.859 20 20 15.859 20 10.75 C 20 5.641 15.859 1.5 10.75 1.5 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={21.500} height={21.500} viewBox="0 0 21.500 21.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 1.25,
        width: 21.5,
        height: 21.5,
      }}>
        <path d={"M 9.557 9.557 L 7.886 13.614 L 11.943 11.943 L 9.557 9.557 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 0 10.75 C 0 4.813 4.813 0 10.75 0 C 16.687 0 21.5 4.813 21.5 10.75 C 21.5 16.687 16.687 21.5 10.75 21.5 C 4.813 21.5 0 16.687 0 10.75 Z M 15.523 5.977 C 15.737 6.191 15.801 6.513 15.686 6.793 L 13.211 12.803 C 13.135 12.988 12.988 13.135 12.803 13.211 L 6.793 15.686 C 6.513 15.801 6.191 15.737 5.977 15.523 C 5.763 15.309 5.699 14.987 5.814 14.707 L 8.289 8.697 C 8.365 8.512 8.512 8.365 8.697 8.289 L 14.707 5.814 C 14.987 5.699 15.309 5.763 15.523 5.977 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcCompass;
