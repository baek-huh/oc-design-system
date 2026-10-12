// figma node: 10226:618 icon/ic-coupon (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcCoupon(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={21.500} height={17.500} viewBox="0 0 21.500 17.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 3.25,
        width: 21.5,
        height: 17.5,
      }}>
        <path d={"M 0 2.75 C 0 1.231 1.231 0 2.75 0 L 18.75 0 C 20.269 0 21.5 1.231 21.5 2.75 L 21.5 5.75 C 21.5 6.164 21.164 6.5 20.75 6.5 C 19.507 6.5 18.5 7.507 18.5 8.75 C 18.5 9.993 19.507 11 20.75 11 C 21.164 11 21.5 11.336 21.5 11.75 L 21.5 14.75 C 21.5 16.269 20.269 17.5 18.75 17.5 L 2.75 17.5 C 1.231 17.5 0 16.269 0 14.75 L 0 11.75 C 0 11.336 0.336 11 0.75 11 C 1.993 11 3 9.993 3 8.75 C 3 7.507 1.993 6.5 0.75 6.5 C 0.336 6.5 0 6.164 0 5.75 L 0 2.75 Z M 2.75 1.5 C 2.06 1.5 1.5 2.06 1.5 2.75 L 1.5 5.075 C 3.212 5.422 4.5 6.936 4.5 8.75 C 4.5 10.564 3.212 12.078 1.5 12.425 L 1.5 14.75 C 1.5 15.44 2.06 16 2.75 16 L 18.75 16 C 19.44 16 20 15.44 20 14.75 L 20 12.425 C 18.288 12.078 17 10.564 17 8.75 C 17 6.936 18.288 5.422 20 5.075 L 20 2.75 C 20 2.06 19.44 1.5 18.75 1.5 L 2.75 1.5 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={21.500} height={17.500} viewBox="0 0 21.500 17.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 3.25,
        width: 21.5,
        height: 17.5,
      }}>
        <path d={"M 2.75 0 C 1.231 0 0 1.231 0 2.75 L 0 5.75 C 0 6.164 0.336 6.5 0.75 6.5 C 1.993 6.5 3 7.507 3 8.75 C 3 9.993 1.993 11 0.75 11 C 0.336 11 0 11.336 0 11.75 L 0 14.75 C 0 16.269 1.231 17.5 2.75 17.5 L 18.75 17.5 C 20.269 17.5 21.5 16.269 21.5 14.75 L 21.5 11.75 C 21.5 11.336 21.164 11 20.75 11 C 19.507 11 18.5 9.993 18.5 8.75 C 18.5 7.507 19.507 6.5 20.75 6.5 C 21.164 6.5 21.5 6.164 21.5 5.75 L 21.5 2.75 C 21.5 1.231 20.269 0 18.75 0 L 2.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcCoupon;
