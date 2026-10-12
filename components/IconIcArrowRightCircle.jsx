// figma node: 10227:5524 icon/ic-arrow-right-circle (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcArrowRightCircle(_p = {}) {
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
        <path d={"M 16.5 10.75 C 16.5 11.164 16.164 11.5 15.75 11.5 L 8.561 11.5 L 11.28 14.22 C 11.573 14.513 11.573 14.987 11.28 15.28 C 10.987 15.573 10.513 15.573 10.22 15.28 L 6.22 11.28 C 6.148 11.208 6.093 11.125 6.057 11.036 C 6.021 10.95 6.001 10.856 6 10.757 C 6 10.755 6 10.752 6 10.75 C 6 10.748 6 10.745 6 10.743 C 6.002 10.553 6.075 10.364 6.22 10.22 L 10.22 6.22 C 10.513 5.927 10.987 5.927 11.28 6.22 C 11.573 6.513 11.573 6.987 11.28 7.28 L 8.561 10 L 15.75 10 C 16.164 10 16.5 10.336 16.5 10.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 21.5 10.75 C 21.5 16.687 16.687 21.5 10.75 21.5 C 4.813 21.5 0 16.687 0 10.75 C 0 4.813 4.813 0 10.75 0 C 16.687 0 21.5 4.813 21.5 10.75 Z M 10.75 20 C 15.859 20 20 15.859 20 10.75 C 20 5.641 15.859 1.5 10.75 1.5 C 5.641 1.5 1.5 5.641 1.5 10.75 C 1.5 15.859 5.641 20 10.75 20 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 22,
        height: 22,
      }}>
        <path d={"M 11 0 C 4.925 0 0 4.925 0 11 C 0 17.075 4.925 22 11 22 C 17.075 22 22 17.075 22 11 C 22 4.925 17.075 0 11 0 Z M 11.53 14.47 C 11.823 14.763 11.823 15.237 11.53 15.53 C 11.237 15.823 10.763 15.823 10.47 15.53 L 6.47 11.53 C 6.177 11.237 6.177 10.763 6.47 10.47 L 10.47 6.47 C 10.763 6.177 11.237 6.177 11.53 6.47 C 11.823 6.763 11.823 7.237 11.53 7.53 L 8.811 10.25 L 16 10.25 C 16.414 10.25 16.75 10.586 16.75 11 C 16.75 11.414 16.414 11.75 16 11.75 L 8.811 11.75 L 11.53 14.47 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcArrowRightCircle;
