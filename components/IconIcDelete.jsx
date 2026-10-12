// figma node: 10226:726 icon/ic-delete (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcDelete(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={17.500} height={19} viewBox="0 0 17.500 19" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 2.25,
        width: 17.5,
        height: 19,
      }}>
        <path d={"M 6.75 8.5 C 7.164 8.5 7.5 8.836 7.5 9.25 L 7.5 13.75 C 7.5 14.164 7.164 14.5 6.75 14.5 C 6.336 14.5 6 14.164 6 13.75 L 6 9.25 C 6 8.836 6.336 8.5 6.75 8.5 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 10.75 8.5 C 11.164 8.5 11.5 8.836 11.5 9.25 L 11.5 13.75 C 11.5 14.164 11.164 14.5 10.75 14.5 C 10.336 14.5 10 14.164 10 13.75 L 10 9.25 C 10 8.836 10.336 8.5 10.75 8.5 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 6.92 0 C 6.01 0 5.252 0.698 5.176 1.605 L 5.06 3 L 0.75 3 C 0.336 3 0 3.336 0 3.75 C 0 4.164 0.336 4.5 0.75 4.5 L 1.025 4.5 L 1.434 16.345 C 1.485 17.826 2.7 19 4.182 19 L 13.318 19 C 14.8 19 16.015 17.826 16.066 16.345 L 16.475 4.5 L 16.75 4.5 C 17.164 4.5 17.5 4.164 17.5 3.75 C 17.5 3.336 17.164 3 16.75 3 L 12.44 3 L 12.324 1.605 C 12.248 0.698 11.49 0 10.58 0 L 6.92 0 Z M 10.935 3 L 10.829 1.729 C 10.818 1.6 10.71 1.5 10.58 1.5 L 6.92 1.5 C 6.79 1.5 6.682 1.6 6.671 1.729 L 6.565 3 L 10.935 3 Z M 2.933 16.293 L 2.526 4.5 L 14.974 4.5 L 14.567 16.293 C 14.544 16.966 13.991 17.5 13.318 17.5 L 4.182 17.5 C 3.509 17.5 2.956 16.966 2.933 16.293 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={17.500} height={19} viewBox="0 0 17.500 19" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 2.25,
        width: 17.5,
        height: 19,
      }}>
        <path d={"M 6.92 0 C 6.01 0 5.252 0.698 5.176 1.605 L 5.06 3 L 0.75 3 C 0.336 3 0 3.336 0 3.75 C 0 4.164 0.336 4.5 0.75 4.5 L 1.025 4.5 L 1.434 16.345 C 1.485 17.826 2.7 19 4.182 19 L 13.318 19 C 14.8 19 16.015 17.826 16.066 16.345 L 16.475 4.5 L 16.75 4.5 C 17.164 4.5 17.5 4.164 17.5 3.75 C 17.5 3.336 17.164 3 16.75 3 L 12.44 3 L 12.324 1.605 C 12.248 0.698 11.49 0 10.58 0 L 6.92 0 Z M 10.935 3 L 10.829 1.729 C 10.818 1.6 10.71 1.5 10.58 1.5 L 6.92 1.5 C 6.79 1.5 6.682 1.6 6.671 1.729 L 6.565 3 L 10.935 3 Z M 6.75 8.5 C 7.164 8.5 7.5 8.836 7.5 9.25 L 7.5 13.75 C 7.5 14.164 7.164 14.5 6.75 14.5 C 6.336 14.5 6 14.164 6 13.75 L 6 9.25 C 6 8.836 6.336 8.5 6.75 8.5 Z M 11.5 9.25 C 11.5 8.836 11.164 8.5 10.75 8.5 C 10.336 8.5 10 8.836 10 9.25 L 10 13.75 C 10 14.164 10.336 14.5 10.75 14.5 C 11.164 14.5 11.5 14.164 11.5 13.75 L 11.5 9.25 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcDelete;
